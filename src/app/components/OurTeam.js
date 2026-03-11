'use client';

import Reveal from './Reveal';
import styles from '../styles/OurTeam.module.css';

const teamMembers = [
  { name: 'Nikolas Orlovsky', role: 'CEO & Founder', img: '/images/Nikolas.PNG', ceo: true },
  { name: 'Bob Smith', role: 'Product Manager', img: '/images/face1.jpg' },
  { name: 'Charlie Brown', role: 'Team Lead', img: '/images/face2.jpg' },
  { name: 'Diana Lee', role: 'UI/UX Designer', img: '/images/face3.jpg' },
  { name: 'Aarav Sharma', role: 'QA Engineer', img: '/images/face4.jpg' },
  { name: 'Vihaan Patel', role: 'Front-End Engineer', img: '/images/face5.jpg' },
  { name: 'Xavier Thompson', role: 'Front-End Engineer', img: '/images/face6.jpg' },
  { name: 'Michael Zhang', role: 'Back-End Engineer', img: '/images/face7.jpg' },
  { name: 'Farhan Siddiqui', role: 'Back-End Engineer', img: '/images/face8.jpg' },
];

export default function OurTeam() {
  return (
    <section
      id="team"
      className={styles.section}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.label}>The Team</span>
            <h2 className={styles.title}>
              Meet Our <span className={styles.accent}>Team</span>
            </h2>
            <p className={styles.subtitle}>
              The brilliant minds behind every product we ship
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {teamMembers.map((member, i) => (
            <Reveal
              key={i}
              delay={i * 0.07}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div
                className={`${styles.member} ${member.ceo ? styles.ceo : ''}`}
                onContextMenu={(e) => e.preventDefault()}
              >
                <div className={`${styles.photoWrap} ${member.ceo ? styles.ceoPhotoWrap : ''}`}>
                  <img
                    src={member.img}
                    alt={member.name}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className={styles.photo}
                  />
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={`${styles.memberRole} ${member.ceo ? styles.ceoRole : ''}`}>
                  {member.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
