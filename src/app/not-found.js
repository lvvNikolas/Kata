import Link from 'next/link';
import styles from './styles/NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.glow} />
      <div className={styles.content}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.subtitle}>
          Looks like this page doesn&apos;t exist yet.
          <br />
          Let&apos;s get you back on track.
        </p>
        <Link href="/" className={styles.btn}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
