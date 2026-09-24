'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { work } from '../lib/content';
import SectionHeader from './SectionHeader';
import styles from './Work.module.css';

const ease = [0.16, 1, 0.3, 1];

/* A bullet is either plain text or a list of parts, where a part is a string or
   a { label, href } link. Keeps the linking out of the copy itself. */
function Point({ parts }) {
  if (typeof parts === 'string') return parts;

  return parts.map((part, i) =>
    typeof part === 'string' ? (
      <span key={i}>{part}</span>
    ) : (
      <a
        key={i}
        className={`pull ${styles.pointLink}`}
        href={part.href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {part.label}
      </a>
    ),
  );
}

export default function Work() {
  // everything collapsed on load, the reader opens what they want
  const [open, setOpen] = useState(-1);

  return (
    <section className="section" id="work">
      <div className="shell">
        <SectionHeader
          index="01"
          label="Work"
          title="Where I have worked"
        />

        <ul className={styles.list}>
          {work.map((job, i) => {
            const isOpen = open === i;
            const sameAsPrev = i > 0 && work[i - 1].company === job.company;

            return (
              <motion.li
                key={`${job.company}-${job.role}`}
                className={styles.row}
                data-open={isOpen || undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.07, ease }}
              >
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`job-${i}`}
                >
                  <span className={styles.company}>
                    <span data-continued={sameAsPrev || undefined}>
                      {job.company}
                    </span>
                  </span>

                  <span className={styles.role}>{job.role}</span>

                  <span className={`tag ${styles.dates}`}>
                    {job.start} – {job.end}
                  </span>

                  <span className={styles.plus} aria-hidden="true">
                    <span className={styles.plusBar} />
                    <span className={`${styles.plusBar} ${styles.plusBarV}`} />
                  </span>
                </button>

                {/* Always mounted and opened by css.
                    Unmounting closed panels kept every achievement out of the
                    page source, and animating the height in js meant a stalled
                    frame loop could leave a row stuck shut. The grid 0fr -> 1fr
                    trick expands to content height with no measuring. */}
                <div id={`job-${i}`} className={styles.panel} inert={!isOpen}>
                  {/* the clip has to be padding free, or box-sizing keeps the
                      inner padding on screen when the track collapses to 0 */}
                  <div className={styles.panelClip}>
                    <div className={styles.panelInner}>
                      <p className={styles.summary}>{job.summary}</p>

                      <ul className={styles.points}>
                        {job.points.map((point, pi) => (
                          <motion.li
                            key={pi}
                            className={styles.point}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.12 + pi * 0.06,
                              ease,
                            }}
                          >
                            <Point parts={point} />
                          </motion.li>
                        ))}
                      </ul>

                      <div className={styles.stack}>
                        {job.stack.map((tech) => (
                          <span className={styles.chip} key={tech}>
                            {tech}
                          </span>
                        ))}
                    </div>

                    <div className={styles.footNote}>
                      <span className="tag">{job.place}</span>
                      {job.href && (
                        <a
                          className={`pull ${styles.jobLink}`}
                          href={job.href}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {job.company} ↗
                        </a>
                      )}
                    </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
