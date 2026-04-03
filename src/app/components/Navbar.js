'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const navItems = [
  ['about', 'About'],
  ['services', 'Services'],
  ['process', 'Process'],
  ['portfolio', 'Portfolio'],
  ['tech-stack', 'Tech Stack'],
  ['team', 'Team'],
  ['faq', 'FAQ'],
  ['contact', 'Contact'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35, rootMargin: '-60px 0px -35% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <Link href="/" className={styles.logo}>
          Kata<span className={styles.dot}>.</span>
        </Link>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={styles.navLinks}>
          {navItems.map(([id, label]) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`${styles.navLink} ${activeSection === id ? styles.active : ''}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          {navItems.map(([id, label]) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`${styles.drawerLink} ${activeSection === id ? styles.drawerActive : ''}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
