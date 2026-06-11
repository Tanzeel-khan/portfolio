"use client";

import { useEffect } from "react";

export default function AnimationProvider() {
  useEffect(() => {
    const observe = () => {
      const els = document.querySelectorAll<HTMLElement>(
        ".reveal:not(.visible), .reveal-scale:not(.visible)"
      );
      if (!els.length) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      els.forEach((el) => io.observe(el));
      return io;
    };

    let io = observe();

    // Re-scan when new content mounts (e.g. after navigation)
    const mo = new MutationObserver(() => {
      io?.disconnect();
      io = observe();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io?.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
