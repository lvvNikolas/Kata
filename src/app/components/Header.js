'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Counter from './Counter';
import styles from '../styles/Header.module.css';

const PHRASES = ['happening now', 'redefining apps', 'built for you', 'changing lives'];

function PhoneMockup() {
  const bars = [40, 65, 55, 80, 45, 90, 70];
  return (
    <div className={styles.phoneSide}>
      <div className={styles.phoneGlow} />
      <div className={styles.phoneGlow2} />
      <div className={styles.phoneDevice}>
        <div className={styles.phoneNotch} />
        <div className={styles.phoneScreen}>
          {/* Status bar */}
          <div className={styles.pStatusBar}>
            <span>9:41</span>
            <div className={styles.pStatusIcons}>
              <span className={styles.pSignal}>▌▌▌</span>
              <span>●</span>
            </div>
          </div>

          {/* App header */}
          <div className={styles.pAppHeader}>
            <div>
              <div className={styles.pGreeting}>Good morning</div>
              <div className={styles.pUsername}>Alex 👋</div>
            </div>
            <div className={styles.pAvatar}>A</div>
          </div>

          {/* Progress card */}
          <div className={styles.pProgressCard}>
            <div className={styles.pProgressLabel}>Today&apos;s Goal</div>
            <div className={styles.pRingWrap}>
              <svg viewBox="0 0 80 80" className={styles.pRingSvg}>
                <defs>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
                <circle cx="40" cy="40" r="30" className={styles.pRingBg} />
                <circle cx="40" cy="40" r="30" className={styles.pRingFill} />
              </svg>
              <div className={styles.pRingPct}>75%</div>
            </div>
          </div>

          {/* Mini stats */}
          <div className={styles.pMiniStats}>
            <div className={styles.pMiniStat}>
              <span className={styles.pMiniVal}>8,240</span>
              <span className={styles.pMiniKey}>Steps</span>
            </div>
            <div className={styles.pDivider} />
            <div className={styles.pMiniStat}>
              <span className={styles.pMiniVal}>420</span>
              <span className={styles.pMiniKey}>Cal</span>
            </div>
            <div className={styles.pDivider} />
            <div className={styles.pMiniStat}>
              <span className={styles.pMiniVal}>5.2</span>
              <span className={styles.pMiniKey}>km</span>
            </div>
          </div>

          {/* Bar chart */}
          <div className={styles.pBarChart}>
            {bars.map((h, i) => (
              <div
                key={i}
                className={styles.pBar}
                style={{ '--bh': `${h}%`, animationDelay: `${i * 0.08 + 0.6}s` }}
              />
            ))}
          </div>

          {/* Bottom nav */}
          <div className={styles.pBottomNav}>
            {['⊞', '♡', '🏃', '👤'].map((icon, i) => (
              <div
                key={i}
                className={`${styles.pNavItem} ${i === 2 ? styles.pNavActive : ''}`}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const ctaPrimaryRef = useRef(null);
  const ctaSecondaryRef = useRef(null);

  const LINE1 = 'Change is';
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [cursorDone, setCursorDone] = useState(false);

  // Morphing phrase state
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [phraseFade, setPhraseFade] = useState(true);

  // Mouse parallax on orbs
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX / width - 0.5) * 40;
    const y = (clientY / height - 0.5) * 40;
    if (orb1Ref.current)
      orb1Ref.current.style.transform = `translate(${x * 0.7}px, ${y * 0.7}px)`;
    if (orb2Ref.current)
      orb2Ref.current.style.transform = `translate(${-x * 0.5}px, ${-y * 0.5}px)`;
    if (orb3Ref.current)
      orb3Ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.9}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (orb1Ref.current) orb1Ref.current.style.transform = '';
    if (orb2Ref.current) orb2Ref.current.style.transform = '';
    if (orb3Ref.current) orb3Ref.current.style.transform = '';
  }, []);

  // Magnetic button handlers
  const magnetMove = useCallback((ref) => (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 22;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 14;
    el.style.transform = `translate(${x}px, ${y}px) translateY(-2px)`;
  }, []);

  const magnetLeave = useCallback((ref) => () => {
    const el = ref.current;
    if (el) el.style.transform = '';
  }, []);

  // Typewriter effect
  useEffect(() => {
    const LINE2 = PHRASES[0];
    let i = 0;
    let t2;
    const t1 = setInterval(() => {
      if (i <= LINE1.length) {
        setLine1(LINE1.slice(0, i));
        i++;
      } else {
        clearInterval(t1);
        let j = 0;
        t2 = setInterval(() => {
          if (j <= LINE2.length) {
            setLine2(LINE2.slice(0, j));
            j++;
          } else {
            clearInterval(t2);
            setTimeout(() => setCursorDone(true), 800);
          }
        }, 60);
      }
    }, 60);
    return () => {
      clearInterval(t1);
      clearInterval(t2);
    };
  }, []);

  // Phrase cycling after typewriter done
  useEffect(() => {
    if (!cursorDone) return;
    const interval = setInterval(() => {
      setPhraseFade(false);
      setTimeout(() => {
        setPhraseIdx((i) => (i + 1) % PHRASES.length);
        setPhraseFade(true);
      }, 420);
    }, 3200);
    return () => clearInterval(interval);
  }, [cursorDone]);

  const displayLine2 = cursorDone ? PHRASES[phraseIdx] : line2;

  return (
    <header
      className={styles.header}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={orb1Ref} className={styles.orb1} />
      <div ref={orb2Ref} className={styles.orb2} />
      <div ref={orb3Ref} className={styles.orb3} />
      <div className={styles.grid} />

      <div className={styles.innerRow}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Mobile App Development Studio
          </div>

          <h1 className={styles.title}>
            <span className={styles.line1}>{line1 || '\u00A0'}</span>
            <br />
            <span
              className={styles.gradient}
              style={{
                opacity: phraseFade ? 1 : 0,
                transition: 'opacity 0.42s ease',
                display: 'inline-block',
                minWidth: '260px',
              }}
            >
              {displayLine2}
            </span>
            <span className={`${styles.cursor} ${cursorDone ? styles.cursorHide : ''}`}>
              |
            </span>
          </h1>

          <p className={styles.subtitle}>
            We build next-generation software products that shape the world.
            Crafting digital experiences that matter.
          </p>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <Counter end={1} suffix="M+" />
                <span className={styles.liveDot} aria-hidden="true" />
              </span>
              <span className={styles.statLabel}>Active Users</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <Counter end={20} suffix="K" />
              </span>
              <span className={styles.statLabel}>Daily Downloads</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <Counter end={7} suffix="+" />
              </span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
          </div>

          <div className={styles.actions}>
            <button
              ref={ctaPrimaryRef}
              className={styles.ctaPrimary}
              onMouseMove={magnetMove(ctaPrimaryRef)}
              onMouseLeave={magnetLeave(ctaPrimaryRef)}
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Work with us
            </button>
            <button
              ref={ctaSecondaryRef}
              className={styles.ctaSecondary}
              onMouseMove={magnetMove(ctaSecondaryRef)}
              onMouseLeave={magnetLeave(ctaSecondaryRef)}
              onClick={() =>
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
            </button>
          </div>
        </div>

        <PhoneMockup />
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </header>
  );
}
