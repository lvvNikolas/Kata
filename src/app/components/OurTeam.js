import styles from '../page.module.css';

const teamMembers = [
  { name: 'Alice Johnson', role: 'CEO', img: '/images/Nikolas.PNG' },
  { name: 'Bob Smith', role: 'CTO', img: '/images/Nikolas.PNG' },
  { name: 'Charlie Brown', role: 'Lead Developer', img: '/images/Nikolas.PNG' },
  { name: 'Diana Lee', role: 'Designer', img: '/images/Nikolas.PNG' },
  { name: 'Nikolas Orlovsky', role: 'Software Engineer', img: '/images/Nikolas.PNG' },
];

export default function OurTeam() {
  return (
    <section id="team" className={styles.teamSection}>
      <div className={styles.teamWrapper}>
        <h2>Meet Our Team</h2>
        <p>We’re always open to communication!</p>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`${styles.teamMember} ${member.role === 'CEO' ? styles.ceo : ''}`}
            >
              <img
                src={member.img}
                alt={member.name}
                className={`${styles.teamPhoto} ${member.role === 'CEO' ? styles.ceoPhoto : ''}`}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
