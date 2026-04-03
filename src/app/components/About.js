'use client';

import Reveal from './Reveal';
import Counter from './Counter';
import styles from '../styles/About.module.css';

const metrics = [
  { end: 50, suffix: '+', label: 'Projects Shipped' },
  { end: 1, suffix: 'M+', label: 'Users Reached' },
  { end: 4.9, suffix: '★', label: 'App Store Rating', decimals: 1 },
  { end: 7, suffix: '+', label: 'Years of Craft' },
];

const values = [
  {
    icon: '🎯',
    title: 'Quality First',
    text: 'We deliver only the best solutions that exceed expectations every time.',
  },
  {
    icon: '⚡',
    title: 'Innovation',
    text: 'We embrace cutting-edge technologies to stay ahead of the curve.',
  },
  {
    icon: '🤝',
    title: 'Transparency',
    text: 'Honesty and openness are the foundation of every relationship we build.',
  },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.topGrid}>
            <div className={styles.textBlock}>
              <span className={styles.label}>Who We Are</span>
              <h2 className={styles.title}>
                Crafting the future,<br />
                <span className={styles.accent}>one line at a time</span>
              </h2>
              <p className={styles.body}>
                We strive to push the boundaries of innovation, crafting solutions
                that inspire and empower. Our mission is to create a world where
                possibilities are limitless, and challenges are just opportunities
                in disguise. Together, we redefine excellence.
              </p>
            </div>

            <div className={styles.quoteBlock}>
              <div className={styles.quoteInner}>
                <div className={styles.quoteIcon}>&ldquo;</div>
                <p className={styles.quoteText}>
                  Mediocrity does not stand a chance with us.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Animated metrics row */}
        <Reveal delay={0.1}>
          <div className={styles.metricsRow}>
            {metrics.map((m) => (
              <div key={m.label} className={styles.metricItem}>
                <span className={styles.metricNum}>
                  <Counter end={m.end} suffix={m.suffix} decimals={m.decimals ?? 0} />
                </span>
                <span className={styles.metricLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.15} style={{ display: 'flex' }}>
              <div className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
