'use client';

import { motion } from 'motion/react';
import { contact, profile } from '../lib/content';
import SectionHeader from './SectionHeader';
import styles from './Contact.module.css';

const ease = [0.16, 1, 0.3, 1];

const channels = [
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
  { label: 'LinkedIn', value: 'satyam-mishra-front-end', href: contact.linkedin },
  { label: 'GitHub', value: 'page-source', href: contact.github },
];

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section className="section" id="contact">
      <div className="shell">
        <SectionHeader index="05" label="Contact" />

        {/* plain heading, animated in css like the section titles */}
        <h2 className={styles.pitch}>Want to work together?</h2>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
        >
          Happy to talk about engineering leadership, AI product work or web
          performance.
        </motion.p>

        <ul className={styles.channels}>
          {channels.map((channel, i) => (
            <motion.li
              key={channel.label}
              className={styles.channel}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65, delay: 0.3 + i * 0.07, ease }}
            >
              <span className={`tag ${styles.channelLabel}`}>{channel.label}</span>
              <a
                className={`pull ${styles.channelValue}`}
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noreferrer noopener' : undefined}
              >
                {channel.value}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      <footer className={styles.footer}>
        <div className={`shell ${styles.footerInner}`}>
          <span className="tag">
            © {year} {profile.name}
          </span>
          <span className="tag">Built with Next.js</span>
          <a className={`pull ${styles.top}`} href="#top">
            <span className="tag">Back to top ↑</span>
          </a>
        </div>
      </footer>
    </section>
  );
}
