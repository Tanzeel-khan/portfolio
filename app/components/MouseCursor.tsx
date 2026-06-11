"use client";

import { useEffect, useRef } from "react";

export default function MouseCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Touch devices don't need a custom cursor
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.style.cursor = "none";

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current)  dotRef.current.style.opacity  = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const onLeave = () => {
      if (dotRef.current)  dotRef.current.style.opacity  = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    // Scale ring up on clickable elements
    const onEnterLink = () => ringRef.current?.classList.add("ring-expand");
    const onLeaveLink = () => ringRef.current?.classList.remove("ring-expand");
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      ringX = lerp(ringX, mouseX, 0.11);
      ringY = lerp(ringY, mouseY, 0.11);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Dot — snaps instantly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[7px] h-[7px] rounded-full bg-[#F6E8F8] pointer-events-none z-[9999] opacity-0"
        style={{ marginLeft: "-3.5px", marginTop: "-3.5px" }}
      />
      {/* Ring — lags behind with lerp */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[#F6E8F8]/55 pointer-events-none z-[9998] opacity-0 transition-[width,height,border-color] duration-200 [&.ring-expand]:w-12 [&.ring-expand]:h-12 [&.ring-expand]:border-[#F6E8F8]"
        style={{ marginLeft: "-18px", marginTop: "-18px" }}
      />
    </>
  );
}
