'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaAndroid, FaApple } from 'react-icons/fa';
import Reveal from './Reveal';
import styles from '../styles/Portfolio.module.css';

const projects = [
  {
    name: 'Lungs Test Exercise',
    category: 'Health & Fitness',
    description: 'Breathing exercises with advanced lung capacity tracking and guided training programs.',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    icon: '🫁',
    platforms: ['ios', 'android'],
    appStore: 'https://apps.apple.com/us/search?term=lungs+test+exercise',
    playStore: 'https://play.google.com/store/search?q=lungs+test+exercise&c=apps',
  },
  {
    name: 'Engineering IQ Test',
    category: 'Education',
    description: 'Adaptive IQ assessment designed specifically for engineering disciplines and professionals.',
    gradient: 'linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%)',
    icon: '🧠',
    platforms: ['ios', 'android'],
    appStore: 'https://apps.apple.com/us/search?term=engineering+iq+test',
    playStore: 'https://play.google.com/store/search?q=engineering+iq+test&c=apps',
    // Ссылка на внутреннюю страницу приложения (используется для перехода при клике на карточку)
    pageLink: '/engineering-iq-privacy',
  },
  {
    name: 'Math Game',
    category: 'Education',
    description: 'Gamified mathematics learning platform making math fun for all ages and skill levels.',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    icon: '🔢',
    platforms: ['ios', 'android'],
    appStore: 'https://apps.apple.com/us/search?term=math+game+kata',
    playStore: 'https://play.google.com/store/search?q=math+game+kata&c=apps',
  },
  {
    name: 'Six Pack in 30 Days',
    category: 'Health & Fitness',
    description: 'Structured 30-day core workout program with daily progress tracking and expert tips.',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    icon: '💪',
    platforms: ['ios', 'android'],
    appStore: 'https://apps.apple.com/us/search?term=six+pack+30+days',
    playStore: 'https://play.google.com/store/search?q=six+pack+30+days&c=apps',
  },
  {
    name: 'Push Ups — Fitness Trainer',
    category: 'Health & Fitness',
    description: 'Personalized push-up training with form guidance and performance analytics.',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
    icon: '🏋️',
    platforms: ['ios', 'android'],
    appStore: 'https://apps.apple.com/us/search?term=push+ups+fitness+trainer',
    playStore: 'https://play.google.com/store/search?q=push+ups+fitness+trainer&c=apps',
  },
  {
    name: 'Legs Workout — 4 Week',
    category: 'Health & Fitness',
    description: '4-week progressive leg training with video instructions and smart scheduling.',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    icon: '🦵',
    platforms: ['ios', 'android'],
    appStore: 'https://apps.apple.com/us/search?term=legs+workout+4+week',
    playStore: 'https://play.google.com/store/search?q=legs+workout+4+week&c=apps',
  },
  {
    name: '10+ Android Utility Apps',
    category: 'Utilities',
    description: 'Suite of productivity tools and utilities optimized for the Android ecosystem.',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    icon: '⚙️',
    platforms: ['android'],
    playStore: 'https://play.google.com/store/search?q=kata+utility+apps&c=apps',
  },
];

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  // useRouter нужен для программной навигации без вложенных <a> тегов
  const router = useRouter();

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

        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.07}>
              {/*
                Карточка — всегда <div>, чтобы не создавать вложенные <a>.
                Если есть pageLink — добавляем onClick для навигации.
                Клики на кнопки магазинов блокируют всплытие (stopPropagation),
                чтобы они не триггерили переход карточки.
              */}
              <div
                className={`${styles.card} ${project.pageLink ? styles.cardClickable : ''}`}
                onClick={() => project.pageLink && router.push(project.pageLink)}
              >
                <div className={styles.cardTop} style={{ background: project.gradient }}>
                  <span className={styles.cardIcon}>{project.icon}</span>
                  <span className={styles.categoryBadge}>{project.category}</span>
                  {/* Бейдж "Explore" только у карточек с pageLink */}
                  {project.pageLink && (
                    <span className={styles.exploreBtn}>↗ Explore</span>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardName}>{project.name}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.cardFooter}>
                    <div className={styles.platforms}>
                      {project.platforms.includes('android') && (
                        <FaAndroid className={styles.platformIcon} />
                      )}
                      {project.platforms.includes('ios') && (
                        <FaApple className={styles.platformIcon} />
                      )}
                    </div>
                    <div className={styles.storeLinks}>
                      {project.appStore && (
                        // stopPropagation — чтобы клик на кнопку не перешёл на pageLink
                        <a
                          href={project.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.storeBtn}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaApple /> App Store
                        </a>
                      )}
                      {project.playStore && (
                        <a
                          href={project.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.storeBtn}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaAndroid /> Play
                        </a>
                      )}
                    </div>
                  </div>
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
