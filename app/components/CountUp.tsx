"use client";

import { useEffect, useRef, useState } from "react";

function parse(raw: string): { prefix: string; num: number; suffix: string } {
  const m = raw.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return { prefix: "", num: 0, suffix: raw };
  return { prefix: m[1], num: parseFloat(m[2]), suffix: m[3] };
}

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

export default function CountUp({ value, className, duration = 1800 }: CountUpProps) {
  const { prefix, num, suffix } = parse(value);
  const [display, setDisplay] = useState(0);
  const ref     = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (num === 0) return; // non-numeric values skip animation
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const step = (ts: number) => {
            const p = Math.min((ts - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // cubic ease-out
            setDisplay(Math.floor(eased * num));
            if (p < 1) requestAnimationFrame(step);
            else setDisplay(num);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [num, duration]);

  return (
    <span ref={ref} className={className}>
      {num === 0 ? value : `${prefix}${display}${suffix}`}
    </span>
  );
}
