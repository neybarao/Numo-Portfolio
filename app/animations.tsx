"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Animations() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 92%",
        once: true,
        onEnter: () => el.classList.add("is-visible"),
      });
    });

    const marquee = document.querySelector(".marquee__track");
    if (marquee) {
      marquee.addEventListener("mouseenter", () => {
        (marquee as HTMLElement).style.animationPlayState = "paused";
      });
      marquee.addEventListener("mouseleave", () => {
        (marquee as HTMLElement).style.animationPlayState = "running";
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
