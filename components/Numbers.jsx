'use client';

import { motion } from 'motion/react';
import { metrics, marquee, profile } from '../lib/content';
import CountUp from './CountUp';
import Marquee from './Marquee';
import SectionHeader from './SectionHeader';
import styles from './Numbers.module.css';

const ease = [0.16, 1, 0.3, 1];

export default function Numbers() {
  return (
    <section className={`section ${styles.section}`} id="numbers">
      <div className="shell">
        <SectionHeader
          index="02"
          label="Numbers"
          title="In numbers"
        />

        <ul className={styles.grid}>
          {metrics.map((metric, i) => (
            <motion.li
              key={metric.label}
              className={styles.cell}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: i * 0.1, ease }}
            >
              <span className={styles.figure}>
                <CountUp
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </span>
              <span className={styles.label}>{metric.label}</span>
              <span className={`tag ${styles.note}`}>{metric.note}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className={styles.marqueeSlot}>
        <Marquee items={marquee} />
      </div>

      <div className="shell">
        <div className={styles.bio}>
          {profile.bio.map((para, i) => (
            <motion.p
              key={i}
              className={styles.para}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.85, delay: i * 0.12, ease }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
