'use client';

import { motion } from 'motion/react';
import { education } from '../lib/content';
import SectionHeader from './SectionHeader';
import styles from './Education.module.css';

const ease = [0.16, 1, 0.3, 1];

export default function Education() {
  return (
    <section className={`section ${styles.section}`} id="education">
      <div className="shell">
        {/* label only, a title here would just repeat the word above it */}
        <SectionHeader index="04" label="Education" />

        <ul className={styles.list}>
          {education.map((item, i) => (
            <motion.li
              key={`${item.school}-${item.qualification}`}
              className={styles.row}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease }}
            >
              <span className={styles.school}>{item.school}</span>
              <span className={styles.qualification}>{item.qualification}</span>
              <span className={styles.score}>{item.score}</span>
              <span className={`tag ${styles.years}`}>{item.years}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
