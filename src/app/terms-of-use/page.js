// ============================================================
// terms-of-use/page.js — Страница условий использования
// ============================================================
// Эта страница ОБЯЗАТЕЛЬНА для публикации приложений в:
//   - Google Play Store
//   - Apple App Store
//
// Страница доступна по адресу: /terms-of-use
// Ссылка на неё уже есть в футере (layout.js)
//
// Что охватывают условия:
//   1. Принятие условий
//   2. Правила использования сервиса
//   3. Интеллектуальная собственность
//   4. Контент пользователей
//   5. Отказ от гарантий
//   6. Ограничение ответственности
//   7. Сторонние ссылки
//   8. Прекращение доступа
//   9. Применимое право (Калифорния)
//   10. Изменения условий
//   11. Контакты
//
// ВАЖНО: Когда купишь домен — обнови WEBSITE на реальный адрес
// ============================================================

// Метаданные страницы для SEO
export const metadata = {
  title: 'Terms of Use — Kata',
  description: 'Terms of Use for Kata mobile applications and website.',
};

// Константы — чтобы легко обновить в одном месте
const EFFECTIVE_DATE = 'April 3, 2026'; // Дата вступления в силу
const CONTACT_EMAIL = 'lvvkatatech@gmail.com';
const COMPANY_NAME = 'Kata';
const WEBSITE = 'https://kata-es4q.vercel.app'; // TODO: заменить на реальный домен

export default function TermsOfUse() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Terms of Use</h1>

      {/* Дата вступления в силу */}
      <p style={styles.meta}>Effective Date: {EFFECTIVE_DATE}</p>

      {/* Вводный параграф */}
      <p style={styles.text}>
        Please read these Terms of Use carefully before using the {WEBSITE} website
        and mobile applications operated by {COMPANY_NAME}. By accessing or using our Service,
        you agree to be bound by these Terms.
      </p>

      {/* Раздел 1: Принятие условий */}
      <Section title="1. Acceptance of Terms">
        <p style={styles.text}>
          By accessing or using our Service, you confirm that you are at least 13 years of age,
          have read and understood these Terms, and agree to be bound by them. If you do not
          agree to these Terms, please do not use the Service.
        </p>
      </Section>

      {/* Раздел 2: Правила использования */}
      <Section title="2. Use of the Service">
        <p style={styles.text}>You agree to use the Service only for lawful purposes. You must not:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Use the Service in any way that violates applicable laws or regulations.</li>
          <li style={styles.listItem}>Attempt to gain unauthorized access to any part of the Service or its infrastructure.</li>
          <li style={styles.listItem}>Transmit any unsolicited or unauthorized advertising or promotional material.</li>
          <li style={styles.listItem}>Reproduce, duplicate, copy, sell, or exploit any portion of the Service without our express written permission.</li>
          <li style={styles.listItem}>Engage in any conduct that restricts or inhibits anyone else from using or enjoying the Service.</li>
        </ul>
      </Section>

      {/* Раздел 3: Интеллектуальная собственность */}
      <Section title="3. Intellectual Property">
        <p style={styles.text}>
          All content, features, and functionality of the Service — including but not limited to
          text, graphics, logos, icons, images, and software — are owned by {COMPANY_NAME} and
          protected by copyright, trademark, and other intellectual property laws. You may not
          use our intellectual property without prior written consent.
        </p>
      </Section>

      {/* Раздел 4: Контент пользователей */}
      <Section title="4. User-Generated Content">
        <p style={styles.text}>
          If you submit any content through the Service (e.g., contact form messages), you grant
          us a non-exclusive, royalty-free license to use, reproduce, and process that content
          solely for the purpose of providing the Service. You are responsible for ensuring your
          content does not violate any third-party rights.
        </p>
      </Section>

      {/* Раздел 5: Отказ от гарантий */}
      <Section title="5. Disclaimer of Warranties">
        <p style={styles.text}>
          The Service is provided on an as-is and as-available basis without warranties of
          any kind, either express or implied, including but not limited to implied warranties
          of merchantability, fitness for a particular purpose, or non-infringement. We do not
          warrant that the Service will be uninterrupted, error-free, or free of viruses or
          other harmful components.
        </p>
      </Section>

      {/* Раздел 6: Ограничение ответственности */}
      <Section title="6. Limitation of Liability">
        <p style={styles.text}>
          To the fullest extent permitted by applicable law, {COMPANY_NAME} shall not be liable
          for any indirect, incidental, special, consequential, or punitive damages, including
          loss of profits, data, or goodwill, arising out of or in connection with your use of
          or inability to use the Service.
        </p>
      </Section>

      {/* Раздел 7: Сторонние ссылки */}
      <Section title="7. Third-Party Links">
        <p style={styles.text}>
          The Service may contain links to third-party websites or services. We are not responsible
          for the content, privacy policies, or practices of any third-party sites. We encourage
          you to review the terms and privacy policies of any third-party services you visit.
        </p>
      </Section>

      {/* Раздел 8: Прекращение доступа */}
      <Section title="8. Termination">
        <p style={styles.text}>
          We reserve the right to suspend or terminate your access to the Service at any time,
          without notice, for conduct that we believe violates these Terms or is harmful to other
          users, us, or third parties, or for any other reason at our sole discretion.
        </p>
      </Section>

      {/* Раздел 9: Применимое право — указываем Калифорнию т.к. адрес в Irvine, CA */}
      <Section title="9. Governing Law">
        <p style={styles.text}>
          These Terms shall be governed by and construed in accordance with the laws of the State
          of California, United States, without regard to its conflict of law provisions. Any
          disputes arising under these Terms shall be subject to the exclusive jurisdiction of
          the courts located in Orange County, California.
        </p>
      </Section>

      {/* Раздел 10: Изменения условий */}
      <Section title="10. Changes to Terms">
        <p style={styles.text}>
          We reserve the right to modify these Terms at any time. We will notify users of
          significant changes by posting the updated Terms on this page and updating the
          Effective Date above. Your continued use of the Service after any changes constitutes
          your acceptance of the new Terms.
        </p>
      </Section>

      {/* Раздел 11: Контакты — обязательны для обоих сторов */}
      <Section title="11. Contact Us">
        <p style={styles.text}>If you have any questions about these Terms, please contact us:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>{CONTACT_EMAIL}</a></li>
          <li style={styles.listItem}><strong>Address:</strong> 40 Pacifica, Irvine, CA 92618, United States</li>
          <li style={styles.listItem}><strong>Website:</strong> <a href={WEBSITE} style={styles.link}>{WEBSITE}</a></li>
        </ul>
      </Section>
    </div>
  );
}

// Переиспользуемый компонент секции с заголовком и контентом
function Section({ title, children }) {
  return (
    <div style={styles.section}>
      <h2 style={styles.subtitle}>{title}</h2>
      {children}
    </div>
  );
}

// Стили компонентов (inline styles)
const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '40px auto',
    color: '#333',
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '32px',
    color: '#0070f3',
    textAlign: 'center',
    marginBottom: '8px',
    fontWeight: '700',
  },
  meta: {
    textAlign: 'center',
    color: '#888',
    fontSize: '14px',
    marginBottom: '24px',
  },
  subtitle: {
    fontSize: '20px',
    color: '#0056b3',
    marginTop: '0',
    marginBottom: '12px',
    fontWeight: '600',
    borderBottom: '2px solid #0070f3',
    paddingBottom: '5px',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#444',
    marginBottom: '12px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0 0 12px 0',
  },
  listItem: {
    fontSize: '16px',
    marginBottom: '8px',
    backgroundColor: '#f8f9fa',
    padding: '10px 14px',
    borderRadius: '8px',
    lineHeight: '1.6',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: '24px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
  },
};
