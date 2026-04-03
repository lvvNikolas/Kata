export const metadata = {
  title: 'Privacy Policy — Kata',
  description: 'Privacy Policy for Kata mobile applications and website.',
};

const EFFECTIVE_DATE = 'April 3, 2026';
const CONTACT_EMAIL = 'lvvkatatech@gmail.com';
const COMPANY_NAME = 'Kata';
const WEBSITE = 'https://kata-es4q.vercel.app';

export default function PrivacyPolicy() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>
      <p style={styles.meta}>Effective Date: {EFFECTIVE_DATE}</p>
      <p style={styles.text}>
        {COMPANY_NAME} operates the {WEBSITE} website and mobile applications
        (collectively, the Service). This Privacy Policy explains how we collect, use, disclose,
        and protect your information when you use our Service.
      </p>

      <Section title="1. Information We Collect">
        <p style={styles.text}>We may collect the following types of information:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Usage Data:</strong> App interactions, pages visited, features used, crash reports, and performance data.</li>
          <li style={styles.listItem}><strong>Device Information:</strong> Device type, operating system, unique device identifiers, and mobile network information.</li>
          <li style={styles.listItem}><strong>Contact Information:</strong> Name and email address if you contact us directly.</li>
          <li style={styles.listItem}><strong>Analytics Data:</strong> Aggregated, anonymized data about how users interact with our Service.</li>
        </ul>
        <p style={styles.text}>We do <strong>not</strong> collect sensitive personal data such as financial information, health data, or government ID numbers.</p>
      </Section>

      <Section title="2. How We Use Your Information">
        <ul style={styles.list}>
          <li style={styles.listItem}>To provide, operate, and maintain our Service.</li>
          <li style={styles.listItem}>To improve, personalize, and expand our Service.</li>
          <li style={styles.listItem}>To understand and analyze how users use our Service.</li>
          <li style={styles.listItem}>To detect, prevent, and address technical issues and security threats.</li>
          <li style={styles.listItem}>To respond to your inquiries and provide customer support.</li>
          <li style={styles.listItem}>To comply with legal obligations.</li>
        </ul>
      </Section>

      <Section title="3. Sharing of Information">
        <p style={styles.text}>
          We do <strong>not</strong> sell, trade, or rent your personal information to third parties.
          We may share information only in the following limited circumstances:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Service Providers:</strong> Trusted third-party vendors who assist us in operating our Service (e.g., analytics, hosting), bound by confidentiality agreements.</li>
          <li style={styles.listItem}><strong>Legal Requirements:</strong> If required by law, court order, or government authority.</li>
          <li style={styles.listItem}><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with prior notice to users.</li>
          <li style={styles.listItem}><strong>With Your Consent:</strong> In any other case, only with your explicit consent.</li>
        </ul>
      </Section>

      <Section title="4. Data Retention">
        <p style={styles.text}>
          We retain your personal data only as long as necessary to provide the Service and fulfill
          the purposes outlined in this policy, unless a longer retention period is required by law.
          You may request deletion of your data at any time by contacting us.
        </p>
      </Section>

      <Section title="5. Data Security">
        <p style={styles.text}>
          We implement industry-standard security measures to protect your information from
          unauthorized access, alteration, disclosure, or destruction. However, no method of
          transmission over the internet or electronic storage is 100% secure, and we cannot
          guarantee absolute security.
        </p>
      </Section>

      <Section title="6. Children Privacy">
        <p style={styles.text}>
          Our Service is not directed to children under the age of 13 (or 16 in the EU/EEA).
          We do not knowingly collect personal information from children. If you believe we have
          inadvertently collected such information, please contact us immediately and we will
          delete it promptly.
        </p>
      </Section>

      <Section title="7. Your Rights">
        <p style={styles.text}>Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li style={styles.listItem}><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
          <li style={styles.listItem}><strong>Deletion:</strong> Request deletion of your personal data (right to be forgotten).</li>
          <li style={styles.listItem}><strong>Opt-Out:</strong> Opt out of any data collection or processing for marketing purposes.</li>
          <li style={styles.listItem}><strong>Portability:</strong> Request a portable copy of your data in a machine-readable format.</li>
        </ul>
        <p style={styles.text}>To exercise any of these rights, contact us at <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>{CONTACT_EMAIL}</a>.</p>
      </Section>

      <Section title="8. Third-Party Services">
        <p style={styles.text}>
          Our Service may contain links to third-party websites or use third-party services
          such as Google Analytics and Apple frameworks. We are not responsible for the privacy
          practices of these third parties. We encourage you to review their privacy policies.
        </p>
      </Section>

      <Section title="9. California Privacy Rights (CCPA)">
        <p style={styles.text}>
          If you are a California resident, you have the right to know what personal data we
          collect, request deletion of your data, and opt out of the sale of personal information.
          We do not sell personal information. To exercise your rights, contact us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>{CONTACT_EMAIL}</a>.
        </p>
      </Section>

      <Section title="10. Changes to This Privacy Policy">
        <p style={styles.text}>
          We may update this Privacy Policy from time to time. We will notify you of significant
          changes by posting the new policy on this page and updating the Effective Date above.
          We encourage you to review this page periodically.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <p style={styles.text}>If you have questions or concerns about this Privacy Policy, please contact us:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>{CONTACT_EMAIL}</a></li>
          <li style={styles.listItem}><strong>Address:</strong> 40 Pacifica, Irvine, CA 92618, United States</li>
          <li style={styles.listItem}><strong>Website:</strong> <a href={WEBSITE} style={styles.link}>{WEBSITE}</a></li>
        </ul>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={styles.section}>
      <h2 style={styles.subtitle}>{title}</h2>
      {children}
    </div>
  );
}

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
