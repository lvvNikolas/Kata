'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaTelegramPlane } from 'react-icons/fa';
import Reveal from './Reveal';
import { fireConfetti } from '../utils/confetti';
import styles from '../styles/Contact.module.css';

// To enable real email delivery:
// 1. Sign up at https://formspree.io
// 2. Create a form and copy your form ID
// 3. Replace 'YOUR_FORM_ID' below with your actual ID
const FORMSPREE_ID = 'YOUR_FORM_ID';

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
    href: 'https://t.me/katatech',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | sent | error

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If Formspree is not configured, fall back to mailto
    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
      const mailtoUrl = `mailto:lvvkatatech@gmail.com?subject=Inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoUrl);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      fireConfetti();
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
        fireConfetti();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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
                <a key={label} href={href} className={styles.card} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
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
                    aria-hidden="true"
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
                  Thanks for reaching out. We&apos;ll get back to you shortly.
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
                    disabled={status === 'loading'}
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
                    disabled={status === 'loading'}
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
                    disabled={status === 'loading'}
                  />
                </div>

                {status === 'error' && (
                  <p className={styles.errorMsg}>
                    Something went wrong. Please email us directly at lvvkatatech@gmail.com
                  </p>
                )}

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className={styles.spinner} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className={styles.submitIcon}
                        aria-hidden="true"
                      >
                        <path
                          d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
