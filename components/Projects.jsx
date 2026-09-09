'use client';

import { motion } from 'motion/react';
import { projects } from '../lib/content';
import SectionHeader from './SectionHeader';
import styles from './Projects.module.css';

const ease = [0.16, 1, 0.3, 1];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="shell">
        <SectionHeader
          index="03"
          label="Projects"
          title="Projects"
          aside="One from work, two I built on my own."
        />

        <ul className={styles.list}>
          {projects.map((project, i) => (
            <motion.li
              key={project.title}
              className={styles.item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
            >
              <div className={styles.aside}>
                <span className={`tag ${styles.num}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`tag ${styles.year}`}>{project.year}</span>
              </div>

              <div className={styles.main}>
                <h3 className={styles.title}>
                  {project.title}
                  <span className={styles.kind}>{project.kind}</span>
                </h3>

                <p className={styles.body}>{project.body}</p>

                <div className={styles.meta}>
                  <div className={styles.stack}>
                    {project.stack.map((tech) => (
                      <span className={styles.chip} key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className={styles.links}>
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          className={`pull ${styles.link}`}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
