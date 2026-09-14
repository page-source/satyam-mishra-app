import { profile, contact } from '../lib/content';
import ProfilePhoto from './ProfilePhoto';
import styles from './Hero.module.css';

// Still a server component. Only the photo needs js, and that lives in
// ProfilePhoto. The first paint stays out of the hydration path.
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
            <ProfilePhoto src={profile.photo} alt={profile.name} />
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
