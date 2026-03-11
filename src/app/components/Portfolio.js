'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaAndroid, FaApple } from 'react-icons/fa';
import Reveal from './Reveal';
import styles from '../styles/Portfolio.module.css';

const projects = [
  { name: 'Lungs Test Exercise', category: 'Health & Fitness' },
  { name: 'Engineering IQ Test', category: 'Education' },
  { name: 'Math Game', category: 'Education' },
  { name: 'Six Pack in 30 Days', category: 'Health & Fitness' },
  { name: 'Push Ups — Fitness Trainer', category: 'Health & Fitness' },
  { name: 'Legs Workout — 4 Week Program', category: 'Health & Fitness' },
  { name: '10+ Android Utility Apps', category: 'Utilities' },
];

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.label}>Our Work</span>
            <h2 className={styles.title}>
              Featured <span className={styles.accent}>Projects</span>
            </h2>
            <p className={styles.subtitle}>
              Crafting exceptional mobile experiences since 2018
            </p>
          </div>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={0.1}>
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className={styles.list}>
          {filtered.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.07} as="div">
              <div className={styles.item}>
                <div className={styles.itemLeft}>
                  <span className={styles.itemNumber}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemName}>{project.name}</h3>
                    <span className={styles.itemCategory}>{project.category}</span>
                  </div>
                </div>
                <div className={styles.itemRight}>
                  <div className={styles.platforms}>
                    <FaAndroid className={styles.platformIcon} />
                    <FaApple className={styles.platformIcon} />
                  </div>
                  <svg
                    className={styles.arrow}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7v10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/privacy-policy" className={styles.privacyLink}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
}
