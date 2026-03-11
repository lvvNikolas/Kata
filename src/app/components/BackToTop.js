'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/BackToTop.module.css';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <button
      className={`${styles.btn} ${visible ? styles.visible : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        className={styles.icon}
      >
        <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
