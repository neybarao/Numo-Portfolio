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

    const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]");
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;

      gsap.to(card, {
        scale: 0.9 + i * 0.025,
        opacity: 0.5,
        filter: "brightness(0.6)",
        scrollTrigger: {
          trigger: card,
          start: "top 80px",
          end: "bottom 80px",
          scrub: 0.5,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
