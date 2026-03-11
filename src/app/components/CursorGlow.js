'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../styles/CursorGlow.module.css';

export default function CursorGlow() {
  const glowRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia('(pointer: fine)').matches);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const el = glowRef.current;
    if (!el) return;

    let raf;
    let currentX = -300;
    let currentY = -300;
    let targetX = -300;
    let targetY = -300;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      el.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return <div ref={glowRef} className={styles.glow} />;
}
