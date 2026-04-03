'use client';

import Reveal from './Reveal';
import styles from '../styles/Testimonials.module.css';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'FitLife Pro',
    text: 'Kata delivered our fitness app in record time. Attention to detail and code quality exceeded all expectations.',
    rating: 5,
    color: '#6366f1',
  },
  {
    name: 'James Kovalenko',
    role: 'CTO',
    company: 'EduSpark',
    text: 'They transformed our complex educational platform into an intuitive mobile experience users genuinely love.',
    rating: 5,
    color: '#22d3ee',
  },
  {
    name: 'Priya Agarwal',
    role: 'Product Director',
    company: 'HealthBridge',
    text: 'From wireframes to App Store launch in under 4 months. Communication throughout was absolutely top-notch.',
    rating: 5,
    color: '#10b981',
  },
  {
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'WaveUtils',
    text: 'Kata built our entire Android utility suite from scratch. Clean architecture, zero critical bugs on launch day.',
    rating: 5,
    color: '#f59e0b',
  },
  {
    name: 'Elena Russo',
    role: 'VP of Engineering',
    company: 'TrainRight',
    text: 'Their Flutter expertise is unmatched. One codebase, both platforms, and it feels completely native on each.',
    rating: 5,
    color: '#8b5cf6',
  },
  {
    name: 'Tyler Brooks',
    role: 'Co-founder',
    company: 'MindPath',
    text: 'The UX/UI work alone was worth every penny. User retention jumped 40% within two weeks of the redesign.',
    rating: 5,
    color: '#ec4899',
  },
  {
    name: 'Aisha Rahman',
    role: 'Product Manager',
    company: 'CoreFit',
    text: 'Professional, fast, and genuinely passionate about what they build. Our best partnership to date.',
    rating: 5,
    color: '#0ea5e9',
  },
  {
    name: 'David Okafor',
    role: 'CEO',
    company: 'BrightLearn',
    text: "The team went above and beyond on every sprint. Kata isn't just a vendor — they feel like a true engineering partner.",
    rating: 5,
    color: '#6366f1',
  },
];

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.star}>★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className={styles.card}>
      <Stars count={t.rating} />
      <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
      <div className={styles.author}>
        <div
          className={styles.avatar}
          style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
        >
          {t.name.charAt(0)}
        </div>
        <div>
          <p className={styles.name}>{t.name}</p>
          <p className={styles.meta}>{t.role} · {t.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
  const row2 = [...testimonials.slice(4), ...testimonials.slice(4)];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.label}>What Clients Say</span>
            <h2 className={styles.title}>
              Trusted by <span className={styles.accent}>great teams</span>
            </h2>
            <p className={styles.subtitle}>
              Don&apos;t take our word for it — hear from the people we build for.
            </p>
          </div>
        </Reveal>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />

        <div className={styles.row}>
          <div className={styles.track}>
            {row1.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.track} ${styles.trackReverse}`}>
            {row2.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
