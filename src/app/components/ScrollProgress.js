'use client';

import { useEffect, useRef } from 'react';
import styles from '../styles/ScrollProgress.module.css';

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = (scrollTop / (scrollHeight - clientHeight)) * 100;
      bar.style.width = `${pct}%`;
    };

    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className={styles.track}>
      <div ref={barRef} className={styles.bar} />
    </div>
  );
}
