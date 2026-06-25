"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAG = `
precision highp float;
uniform sampler2D u_tex;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_intensity;
uniform vec2 u_resolution;
varying vec2 v_uv;

void main() {
  vec2 uv = v_uv;

  // slow ambient wave
  float wave = sin(uv.x * 3.0 + u_time * 0.4) * cos(uv.y * 2.5 + u_time * 0.3);
  vec2 ambient = vec2(wave, wave * 0.7) * 0.003;

  // mouse proximity distortion
  vec2 mouse = u_mouse;
  float dist = distance(uv, mouse);
  float radius = 0.35;
  float strength = smoothstep(radius, 0.0, dist) * u_intensity;

  float angle = atan(uv.y - mouse.y, uv.x - mouse.x);
  float ripple = sin(dist * 18.0 - u_time * 2.5) * strength * 0.012;
  vec2 mouseDisp = vec2(cos(angle), sin(angle)) * ripple;

  uv += ambient + mouseDisp;

  // blur near mouse - sample in a circle and average
  float blurAmount = strength * 0.006;
  vec4 color = vec4(0.0);
  float total = 0.0;
  for (float a = 0.0; a < 6.28318; a += 0.7854) {
    for (float r = 1.0; r <= 3.0; r += 1.0) {
      vec2 offset = vec2(cos(a), sin(a)) * blurAmount * r;
      color += texture2D(u_tex, uv + offset);
      total += 1.0;
    }
  }
  color += texture2D(u_tex, uv);
  total += 1.0;

  gl_FragColor = color / total;
}`;

export function HeroDistortion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 860) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uIntensity = gl.getUniformLocation(prog, "u_intensity");
    const uResolution = gl.getUniformLocation(prog, "u_resolution");

    const tex = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/hero-bg.png";

    let ready = false;
    img.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      ready = true;
    };

    let mouse = { x: 0.5, y: 0.5 };
    let smoothMouse = { x: 0.5, y: 0.5 };
    let intensity = 0;
    let targetIntensity = 0;
    let raf = 0;

    const hero = canvas.closest(".hero") as HTMLElement;

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = 1.0 - (e.clientY - rect.top) / rect.height;
    };
    const onEnter = () => { targetIntensity = 1; };
    const onLeave = () => { targetIntensity = 0; };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseenter", onEnter);
    hero.addEventListener("mouseleave", onLeave);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      const w = hero.clientWidth;
      const h = hero.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const loop = (t: number) => {
      if (!ready) { raf = requestAnimationFrame(loop); return; }

      smoothMouse.x += (mouse.x - smoothMouse.x) * 0.04;
      smoothMouse.y += (mouse.y - smoothMouse.y) * 0.04;
      intensity += (targetIntensity - intensity) * 0.03;

      gl.uniform1f(uTime, t * 0.001);
      gl.uniform2f(uMouse, smoothMouse.x, smoothMouse.y);
      gl.uniform1f(uIntensity, intensity);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseenter", onEnter);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__canvas" />;
}
