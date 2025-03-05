export default function PrivacyPolicy() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>
      <p style={styles.text}>
        At <strong>Kata</strong>, we take your privacy seriously. This document outlines how we collect, use, and protect your personal information.
      </p>

      <Section title="Information We Collect">
        <p style={styles.text}>We collect information to provide better services to our users. This includes:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>📊 <strong>Usage data:</strong> app interactions and preferences.</li>
        </ul>
      </Section>

      <Section title="How We Use Information">
        <p style={styles.text}>
          The information we collect is used to improve our services, provide personalized experiences, and communicate updates.
        </p>
      </Section>

      <Section title="Sharing Information">
        <p style={styles.text}>
          We do not share your personal information with third parties except as required by law or with your explicit consent.
        </p>
      </Section>

      <Section title="Contact Us">
        <p style={styles.text}>
          If you have any questions about our Privacy Policy, please contact us at{" "}
          <a href="mailto:privacy@kata.com" style={styles.link}>privacy@kata.com</a>.
        </p>
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
    padding: "40px",
    maxWidth: "800px",
    margin: "40px auto",
    color: "#333",
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center", // Выравнивание текста по центру
    transition: "all 0.3s ease-in-out",
  },
  title: {
    fontSize: "32px",
    color: "#0070f3",
    textAlign: "center",
    marginBottom: "25px",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "24px",
    color: "#0056b3",
    marginTop: "30px",
    fontWeight: "600",
    borderBottom: "2px solid #0070f3",
    paddingBottom: "5px",
    display: "inline-block",
    textAlign: "center", // Центрирование заголовка
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#444",
    textAlign: "center", // Выравнивание текста по центру
  },
  list: {
    listStyle: "none",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Центрирование списка
  },
  listItem: {
    fontSize: "18px",
    marginBottom: "10px",
    backgroundColor: "#f8f9fa",
    padding: "10px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Центрирование содержимого списка
    width: "80%", // Уменьшаем ширину, чтобы выглядело аккуратнее
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s ease-in-out",
  },
  section: {
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
  },
};
