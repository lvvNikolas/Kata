'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import styles from '../styles/Header.module.css';

// Animated counter that counts up when visible
function Counter({ end, suffix = '' }) {
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
          const duration = 1600;
          const start = performance.now();
          const step = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(eased * end));
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
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Header() {
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);

  // Typewriter state
  const LINE1 = 'Change is';
  const LINE2 = 'happening now';
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [cursorDone, setCursorDone] = useState(false);

  // Parallax on mouse move (direct DOM — no re-renders)
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX / width - 0.5) * 40;
    const y = (clientY / height - 0.5) * 40;
    if (orb1Ref.current)
      orb1Ref.current.style.transform = `translate(${x * 0.7}px, ${y * 0.7}px)`;
    if (orb2Ref.current)
      orb2Ref.current.style.transform = `translate(${-x * 0.5}px, ${-y * 0.5}px)`;
    if (orb3Ref.current)
      orb3Ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.9}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (orb1Ref.current) orb1Ref.current.style.transform = '';
    if (orb2Ref.current) orb2Ref.current.style.transform = '';
    if (orb3Ref.current) orb3Ref.current.style.transform = '';
  }, []);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const t1 = setInterval(() => {
      if (i <= LINE1.length) {
        setLine1(LINE1.slice(0, i));
        i++;
      } else {
        clearInterval(t1);
        let j = 0;
        const t2 = setInterval(() => {
          if (j <= LINE2.length) {
            setLine2(LINE2.slice(0, j));
            j++;
          } else {
            clearInterval(t2);
            setTimeout(() => setCursorDone(true), 800);
          }
        }, 60);
      }
    }, 60);
    return () => clearInterval(t1);
  }, []);

  return (
    <header
      className={styles.header}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={orb1Ref} className={styles.orb1} />
      <div ref={orb2Ref} className={styles.orb2} />
      <div ref={orb3Ref} className={styles.orb3} />
      <div className={styles.grid} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Mobile App Development Studio
        </div>

        <h1 className={styles.title}>
          <span className={styles.line1}>{line1 || '\u00A0'}</span>
          <br />
          <span className={styles.gradient}>{line2}</span>
          <span className={`${styles.cursor} ${cursorDone ? styles.cursorHide : ''}`}>
            |
          </span>
        </h1>

        <p className={styles.subtitle}>
          We build next-generation software products that shape the world.
          Crafting digital experiences that matter.
        </p>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              <Counter end={1} suffix="M+" />
            </span>
            <span className={styles.statLabel}>Active Users</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              <Counter end={20} suffix="K" />
            </span>
            <span className={styles.statLabel}>Daily Downloads</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              <Counter end={7} suffix="+" />
            </span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.ctaPrimary}
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Work with us
          </button>
          <button
            className={styles.ctaSecondary}
            onClick={() =>
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View Projects
          </button>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </header>
  );
}
