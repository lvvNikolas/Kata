'use client';

import { useEffect, useRef, useState } from 'react';

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
  style = {},
}) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mark as mounted — prevents SSR/client hydration mismatch
    setMounted(true);

    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // On server (and first client render before hydration): no inline styles
  // so SSR and client initial render always match.
  const revealStyle = mounted
    ? {
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }
    : {};

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ ...revealStyle, ...style }}
    >
      {children}
    </Tag>
  );
}
