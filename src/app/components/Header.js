'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';

const phrases = [
  'Change is happening now',
  'Progress is shaping the future',
  'Innovation starts with action',
];

export default function Header() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index % phrases.length];
    const typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentPhrase.substring(0, charIndex - 1)
          : currentPhrase.substring(0, charIndex + 1)
      );
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            Kata<span className={styles.logoHighlight}>.</span>
          </Link>
        </div>

        <div className={styles.headerContent}>
          <h1 className={styles.typewriter}>
            {text}
            <span className={styles.cursor}>|</span>
          </h1>

          <p className={styles.subheadline}>
            We build next-generation software products that shape the world.
          </p>

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <p>Active users in the applications that we&apos;ve created</p>
              <h2>1M</h2>
            </div>
            <div className={styles.statItem}>
              <p>Apple Store and Google Play downloads every day</p>
              <h2>20K</h2>
            </div>
          </div>

          <button
            className={styles.ctaButton}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Work with us
          </button>
        </div>

        <div className={styles.headerGraphic}></div>
      </div>
    </header>
  );
}