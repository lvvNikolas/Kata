'use client';

import { useEffect, useRef, useState } from 'react';

export default function Counter({ end, suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();
          const duration = 1800;
          const start = performance.now();
          const step = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = eased * end;
            setCount(decimals > 0 ? parseFloat(val.toFixed(decimals)) : Math.floor(val));
            if (p < 1) requestAnimationFrame(step);
            else setCount(end);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, decimals]);

  const display = decimals > 0 ? count.toFixed(decimals) : count;

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
