'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import styles from '../styles/FAQ.module.css';

const faqs = [
  {
    q: 'How long does it take to build a mobile app?',
    a: 'Timeline depends on scope and complexity. A straightforward MVP typically takes 2–4 months, while a full-featured product with custom backend can run 4–8 months. After our discovery session we provide a detailed project roadmap with realistic milestones.',
  },
  {
    q: 'What is your development process?',
    a: 'We follow an agile, sprint-based workflow: Discovery → Design → Development → QA → Launch. Each sprint is 2 weeks with demos and feedback cycles so you stay in the loop at every stage. No surprises.',
  },
  {
    q: 'Do you build for iOS, Android, or both?',
    a: 'Both. We specialize in cross-platform development with Flutter and React Native so you get a single codebase that feels truly native on each platform — without paying twice to build separate apps.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes. We offer flexible support and maintenance packages that include OS updates, security patches, performance monitoring, and feature iterations. Think of us as your long-term engineering partner, not a one-time vendor.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We work on a fixed-price model for well-defined scopes, and time-and-materials for larger or evolving projects. Every engagement starts with a free discovery consultation so we can scope accurately before any commitment.',
  },
  {
    q: 'Can you work with our existing codebase?',
    a: 'Absolutely. We frequently take on legacy app audits, partial rewrites, and feature additions on top of existing code. We start with a technical audit to understand the architecture before recommending the best path forward.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.07}>
      <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
        <button className={styles.question} onClick={() => setOpen(!open)}>
          <span>{faq.q}</span>
          <div className={`${styles.icon} ${open ? styles.iconOpen : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
        <div className={`${styles.answer} ${open ? styles.answerOpen : ''}`}>
          <div className={styles.answerInner}>
            <p>{faq.a}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.label}>FAQ</span>
            <h2 className={styles.title}>
              Common <span className={styles.accent}>questions</span>
            </h2>
            <p className={styles.subtitle}>
              Everything you need to know before we start building together.
            </p>
          </div>
        </Reveal>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
