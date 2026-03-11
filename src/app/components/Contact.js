'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaTelegramPlane } from 'react-icons/fa';
import Reveal from './Reveal';
import styles from '../styles/Contact.module.css';

const contacts = [
  {
    Icon: FaEnvelope,
    label: 'Email',
    value: 'lvvkatatech@gmail.com',
    href: 'mailto:lvvkatatech@gmail.com',
  },
  {
    Icon: FaPhone,
    label: 'Phone',
    value: '+1 562 330 9823',
    href: 'tel:+15623309823',
  },
  {
    Icon: FaTelegramPlane,
    label: 'Telegram',
    value: 'Message us on Telegram',
    href: '#',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sent

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    const mailtoUrl = `mailto:lvvkatatech@gmail.com?subject=Inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.label}>Get In Touch</span>
            <h2 className={styles.title}>
              Let&apos;s build something{' '}
              <span className={styles.accent}>great together</span>
            </h2>
            <p className={styles.subtitle}>
              We&apos;re always open to new projects and partnerships.
            </p>
          </div>
        </Reveal>

        <div className={styles.twoCol}>
          {/* Left — contact links */}
          <Reveal delay={0.1}>
            <div className={styles.cards}>
              {contacts.map(({ Icon, label, value, href }) => (
                <a key={label} href={href} className={styles.card}>
                  <div className={styles.iconWrap}>
                    <Icon />
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.cardLabel}>{label}</p>
                    <p className={styles.cardValue}>{value}</p>
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
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.2}>
            {status === 'sent' ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Message sent!</h3>
                <p className={styles.successText}>
                  Your email client opened with a pre-filled message.
                  We&apos;ll get back to you shortly.
                </p>
                <button
                  className={styles.resetBtn}
                  onClick={() => setStatus('idle')}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    className={styles.formInput}
                    value={form.name}
                    onChange={onChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className={styles.formInput}
                    value={form.email}
                    onChange={onChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your project..."
                    className={styles.formTextarea}
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className={styles.submitIcon}
                  >
                    <path
                      d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
