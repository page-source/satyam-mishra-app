import Image from 'next/image';
import { profile, contact } from '../lib/content';
import styles from './Hero.module.css';

// No motion in here on purpose. It's the first thing that paints, and a plain
// css fade keeps it out of the hydration path.
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`shell ${styles.inner}`}>
        <div className={`${styles.meta} ${styles.step1}`}>
          <span className={`tag ${styles.status}`}>
            {profile.available && <i className={styles.dot} aria-hidden="true" />}
            {profile.role}
          </span>
          <span className={`tag ${styles.place}`}>{profile.location}</span>
        </div>

        <div className={`${styles.identity} ${styles.step2}`}>
          {profile.photo && (
            <Image
              className={styles.photo}
              src={profile.photo}
              width={92}
              height={92}
              alt={profile.name}
              priority
            />
          )}
          <h1 className={styles.name}>{profile.name}</h1>
        </div>

        <div className={`${styles.intro} ${styles.step3}`}>
          {profile.intro.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>

        <div className={`${styles.actions} ${styles.step4}`}>
          <a className={`pull ${styles.action}`} href="#work">
            See the work
          </a>
          <a className={`pull ${styles.action}`} href={`mailto:${contact.email}`}>
            Email me
          </a>
          <a
            className={`pull ${styles.action}`}
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <a
            className={`pull ${styles.action}`}
            href={contact.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
