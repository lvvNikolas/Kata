'use client';
import React from 'react';
import styles from '../styles/OurTeam.module.css'; // Importing styles for the team section



const teamMembers = [
  { name: 'Nikolas Orlovsky', role: 'CEO', img: '/images/Nikolas.PNG' },
  { name: 'Bob Smith', role: 'Product Manager', img: '/images/face1.jpg' },
  { name: 'Charlie Brown', role: 'Team Lead', img: '/images/face2.jpg' },
  { name: 'Diana Lee', role: 'UI/UX Designer', img: '/images/face3.jpg' },
  { name: 'Aarav Sharma', role: 'QA Engineer', img: '/images/face4.jpg' },
  { name: 'Vihaan Patel', role: 'Front-End Engineer', img: '/images/face5.jpg' },
  { name: 'Xavier Thompson', role: 'Front-End Engineer ', img: '/images/face6.jpg' },
  { name: 'Michael Zhang', role: 'Back-End Engineer', img: '/images/face7.jpg' },
  { name: 'Farhan Siddiqui', role: 'Back-End Engineer', img: '/images/face8.jpg' },
];

export default function OurTeam() {
  return (
    <section
      id="team"
      className={styles.teamSection}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className={styles.teamWrapper}>
        <h2>Meet Our Team</h2>
        <p>We’re always open to communication!</p>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`${styles.teamMember} ${member.role === 'CEO' ? styles.ceo : ''}`}
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src={member.img}
                alt={member.name}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
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
