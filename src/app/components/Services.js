'use client';

import { useRef, useCallback } from 'react';
import { FaMobileAlt, FaPaintBrush, FaShieldAlt } from 'react-icons/fa';
import Reveal from './Reveal';
import styles from '../styles/Services.module.css';

const services = [
  {
    Icon: FaMobileAlt,
    title: 'Mobile App Development',
    description:
      'Custom, high-performance applications for iOS and Android. Built with modern frameworks and pixel-perfect attention to detail.',
    tags: ['iOS', 'Android', 'Flutter', 'React Native'],
    color: '#6366f1',
  },
  {
    Icon: FaPaintBrush,
    title: 'UX / UI Design',
    description:
      'Intuitive, user-centered interfaces that engage your audience and drive meaningful interactions from first launch.',
    tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    color: '#22d3ee',
  },
  {
    Icon: FaShieldAlt,
    title: 'Support & Maintenance',
    description:
      'Continuous updates and expert care to keep your apps secure, stable, and performing at their best — always.',
    tags: ['24/7 Support', 'Security', 'Updates', 'Monitoring'],
    color: '#8b5cf6',
  },
];

function ServiceCard({ service, delay }) {
  const cardRef = useRef(null);
  const { Icon, title, description, tags, color } = service;

  const onMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(700px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateY(-6px)`;
    card.style.boxShadow = `${-x * 20}px ${-y * 20}px 40px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.45)`;
  }, []);

  const onMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
    card.style.boxShadow = '';
  }, []);

  return (
    <Reveal delay={delay} style={{ display: 'flex' }}>
      <div
        ref={cardRef}
        className={styles.card}
        style={{ '--card-color': color }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={styles.iconWrap}
          style={{ background: `${color}18`, border: `1px solid ${color}30`, color }}
        >
          <Icon />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.label}>What We Do</span>
            <h2 className={styles.title}>
              Our <span className={styles.accent}>Services</span>
            </h2>
            <p className={styles.subtitle}>
              Delivering excellence across every platform and every stage of your product.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
