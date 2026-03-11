'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/Loader.module.css';

export default function Loader() {
  const [phase, setPhase] = useState('visible'); // visible → fadeOut → gone

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fadeOut'), 1500);
    const t2 = setTimeout(() => setPhase('gone'), 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={`${styles.loader} ${phase === 'fadeOut' ? styles.fadeOut : ''}`}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          Kata<span className={styles.dot}>.</span>
        </div>
        <div className={styles.track}>
          <div className={styles.fill} />
        </div>
      </div>
    </div>
  );
}
