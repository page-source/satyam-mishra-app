'use client';

import { motion } from 'motion/react';
import { toolkit, education } from '../lib/content';
import SectionHeader from './SectionHeader';
import styles from './Toolkit.module.css';

const ease = [0.16, 1, 0.3, 1];

export default function Toolkit() {
  return (
    <section className={`section ${styles.section}`} id="toolkit">
      <div className="shell">
        <SectionHeader
          index="04"
          label="Toolkit"
          title="Skills"
          aside="Things I have actually shipped with."
        />

        <div className={styles.groups}>
          {toolkit.map((group, gi) => (
            <div className={styles.group} key={group.group}>
              <h3 className={`tag ${styles.groupLabel}`}>{group.group}</h3>
              <ul className={styles.items}>
                {group.items.map((item, i) => (
                  <motion.li
                    key={item}
                    className={styles.item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 0.55,
                      delay: gi * 0.08 + i * 0.035,
                      ease,
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          className={styles.education}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease }}
        >
          <span className={`tag ${styles.eduLabel}`}>Education</span>
          <p className={styles.eduBody}>
            <span className={styles.eduSchool}>{education.school}</span>
            <span className={styles.eduSep} aria-hidden="true">/</span>
            {education.degree}
            <span className={styles.eduSep} aria-hidden="true">/</span>
            <span className={styles.eduYears}>{education.years}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
