'use client';

import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
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
            Change is happening now
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
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Work with us
          </button>
        </div>

        <div className={styles.headerGraphic}></div>
      </div>
    </header>
  );
}
