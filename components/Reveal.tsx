"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades content up once it scrolls into view. Content is only hidden after
 * JavaScript runs (the `js` class on <html>), and never when the visitor
 * prefers reduced motion, so the page is fully readable without JS.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${shown ? "is-in" : ""} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
