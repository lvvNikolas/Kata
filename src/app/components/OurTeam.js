'use client';

import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';
import Reveal from './Reveal';
import styles from '../styles/OurTeam.module.css';

const teamMembers = [
  { name: 'Nikolas Orlovsky', role: 'CEO & Founder', img: '/images/Nikolas.PNG', ceo: true, linkedin: 'https://linkedin.com/in/nikolasorlovsky' },
  { name: 'Bob Smith', role: 'Product Manager', img: '/images/face1.jpg', linkedin: '#' },
  { name: 'Charlie Brown', role: 'Team Lead', img: '/images/face2.jpg', linkedin: '#' },
  { name: 'Diana Lee', role: 'UI/UX Designer', img: '/images/face3.jpg', linkedin: '#' },
  { name: 'Aarav Sharma', role: 'QA Engineer', img: '/images/face4.jpg', linkedin: '#' },
  { name: 'Vihaan Patel', role: 'Front-End Engineer', img: '/images/face5.jpg', linkedin: '#' },
  { name: 'Xavier Thompson', role: 'Front-End Engineer', img: '/images/face6.jpg', linkedin: '#' },
  { name: 'Michael Zhang', role: 'Back-End Engineer', img: '/images/face7.jpg', linkedin: '#' },
  { name: 'Farhan Siddiqui', role: 'Back-End Engineer', img: '/images/face8.jpg', linkedin: '#' },
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
              key={member.name}
              delay={i * 0.07}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div
                className={`${styles.member} ${member.ceo ? styles.ceo : ''}`}
                onContextMenu={(e) => e.preventDefault()}
              >
                <div className={`${styles.photoWrap} ${member.ceo ? styles.ceoPhotoWrap : ''}`}>
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={member.ceo ? 140 : 86}
                    height={member.ceo ? 140 : 86}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className={styles.photo}
                  />
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={`${styles.memberRole} ${member.ceo ? styles.ceoRole : ''}`}>
                  {member.role}
                </p>
                <a
                  href={member.linkedin}
                  className={styles.linkedinBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  onClick={(e) => member.linkedin === '#' && e.preventDefault()}
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
