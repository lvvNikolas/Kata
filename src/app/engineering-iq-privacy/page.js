// ============================================================
// engineering-iq-privacy/page.js — Privacy Policy for Engineering IQ Test
// ============================================================
// Эта страница — политика конфиденциальности для приложения
// "Engineering IQ Test", опубликованного в Google Play Store.
//
// URL страницы: /engineering-iq-privacy
// Вставь в Google Play Console → Policy and Programs → App content
// → Privacy Policy URL: https://kata-es4q.vercel.app/engineering-iq-privacy
// ============================================================

// SEO метаданные специально для этой страницы
export const metadata = {
  title: 'Privacy Policy — Engineering IQ Test',
  description: 'Privacy Policy for the Engineering IQ Test application.',
};

// Константы — обновляй в одном месте
const EFFECTIVE_DATE = 'April 28, 2026';
const CONTACT_EMAIL = 'lvniki26@gmail.com';
const APP_NAME = 'Engineering IQ Test';
const COMPANY_NAME = 'Kata';
const WEBSITE = 'https://kata-es4q.vercel.app';

export default function EngineeringIQPrivacy() {
  return (
    <div style={styles.container}>
      {/* Заголовок */}
      <h1 style={styles.title}>Privacy Policy</h1>
      <p style={styles.appName}>{APP_NAME}</p>
      <p style={styles.meta}>Effective Date: {EFFECTIVE_DATE}</p>

      {/* Вводный параграф */}
      <p style={styles.text}>
        {COMPANY_NAME} built the {APP_NAME} app as a free application. This page informs visitors
        regarding our policies with the collection, use, and disclosure of personal information for
        anyone who decides to use our Service. By using {APP_NAME}, you agree to the collection and
        use of information as described in this policy.
      </p>

      {/* Раздел 1: Сбор и использование данных */}
      <Section title="1. Information Collection and Use">
        <p style={styles.text}>
          For a better experience while using our Service, we may collect certain information.
          The information we request will be retained on your device and is not collected by us in
          any way. The app may use third-party services that collect information to identify you.
        </p>
        <ul style={styles.list}>
          {/* Данные которые приложение собирает */}
          <li style={styles.listItem}><strong>Usage Data:</strong> Information about how you interact with the app (questions answered, scores, time spent).</li>
          <li style={styles.listItem}><strong>Device Information:</strong> Device type, operating system version, and unique device identifiers.</li>
          <li style={styles.listItem}><strong>Analytics Data:</strong> Aggregated, anonymized data to improve app performance and user experience.</li>
        </ul>
        <p style={styles.text}>
          We do <strong>not</strong> collect personally identifiable information such as your name,
          email address, or payment data unless you contact us directly.
        </p>
      </Section>

      {/* Раздел 2: Третьи стороны — важно для Google Play */}
      <Section title="2. Third-Party Services">
        <p style={styles.text}>
          The app may use third-party services that may collect information used to identify you.
          These services have their own privacy policies:
        </p>
        <ul style={styles.list}>
          {/* Google сервисы — стандартные для Android */}
          <li style={styles.listItem}><strong>Google Play Services</strong> — used for app distribution and updates.</li>
          <li style={styles.listItem}><strong>Google Analytics for Firebase</strong> — used for anonymous usage analytics.</li>
          <li style={styles.listItem}><strong>Firebase Crashlytics</strong> — used for crash reporting and stability improvements.</li>
        </ul>
      </Section>

      {/* Раздел 3: Логи и данные */}
      <Section title="3. Log Data">
        <p style={styles.text}>
          In the event of an error in the app, we may collect data and information (through
          third-party products) on your device called Log Data. This Log Data may include
          information such as your device Internet Protocol (IP) address, device name, operating
          system version, app configuration, time and date of use, and other statistics.
        </p>
      </Section>

      {/* Раздел 4: Cookies */}
      <Section title="4. Cookies">
        <p style={styles.text}>
          The app does not explicitly use cookies. However, third-party libraries integrated into
          the app may use cookies to collect information and improve their services. You have the
          option to accept or refuse these cookies through your device settings.
        </p>
      </Section>

      {/* Раздел 5: Безопасность */}
      <Section title="5. Security">
        <p style={styles.text}>
          We value your trust and strive to use commercially acceptable means of protecting your
          information. However, no method of transmission over the internet or electronic storage
          is 100% secure and reliable, and we cannot guarantee absolute security.
        </p>
      </Section>

      {/* Раздел 6: Ссылки на другие сайты */}
      <Section title="6. Links to Other Sites">
        <p style={styles.text}>
          This app may contain links to other sites. If you click on a third-party link, you will
          be directed to that site. Note that these external sites are not operated by us.
          Therefore, we strongly advise you to review the Privacy Policy of those websites.
          We have no control over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>
      </Section>

      {/* Раздел 7: Защита детей — ОБЯЗАТЕЛЬНО для Google Play */}
      <Section title="7. Children's Privacy">
        <p style={styles.text}>
          The {APP_NAME} app is not directed to children under the age of 13. We do not knowingly
          collect personally identifiable information from children under 13. If you are a parent
          or guardian and you believe your child has provided us with personal information, please
          contact us immediately at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>{CONTACT_EMAIL}</a> and we will
          promptly delete such information.
        </p>
      </Section>

      {/* Раздел 8: Изменения политики */}
      <Section title="8. Changes to This Privacy Policy">
        <p style={styles.text}>
          We may update our Privacy Policy from time to time. We advise you to review this page
          periodically for any changes. We will notify you of any changes by posting the new
          Privacy Policy on this page. These changes are effective immediately after they are posted.
        </p>
      </Section>

      {/* Раздел 9: Контакты — ОБЯЗАТЕЛЬНО для Google Play */}
      <Section title="9. Contact Us">
        <p style={styles.text}>
          If you have any questions or suggestions about our Privacy Policy, please contact us:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>{CONTACT_EMAIL}</a>
          </li>
          <li style={styles.listItem}>
            <strong>Company:</strong> {COMPANY_NAME}
          </li>
          <li style={styles.listItem}>
            <strong>Address:</strong> 40 Pacifica, Irvine, CA 92618, United States
          </li>
          <li style={styles.listItem}>
            <strong>Website:</strong>{' '}
            <a href={WEBSITE} style={styles.link}>{WEBSITE}</a>
          </li>
        </ul>
      </Section>
    </div>
  );
}

// Переиспользуемый компонент секции
function Section({ title, children }) {
  return (
    <div style={styles.section}>
      <h2 style={styles.subtitle}>{title}</h2>
      {children}
    </div>
  );
}

// Inline стили
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
    marginBottom: '4px',
    fontWeight: '700',
  },
  // Название приложения под заголовком
  appName: {
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '600',
    color: '#555',
    marginBottom: '4px',
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
