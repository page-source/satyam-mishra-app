import styles from './SectionHeader.module.css';

/*
 * No JS in here, deliberately.
 *
 * This used to slide the title up out of an overflow:hidden box using motion's
 * whileInView. That silently broke: IntersectionObserver clips the target rect
 * against overflow ancestors, so an element translated fully outside its
 * wrapper sits at ratio 0 forever, the callback never runs and the heading
 * never appears. Every section title on the site was invisible.
 *
 * Section headings are the one thing that must always render, so they animate
 * with a css view() timeline instead. Browsers without it get static visible
 * headings, which is the correct fallback either way.
 */
export default function SectionHeader({ index, label, title, aside }) {
  return (
    <header className={styles.head}>
      <div className={styles.meta}>
        <span className={`tag ${styles.index}`}>{index}</span>
        <span className={`tag ${styles.label}`}>{label}</span>
      </div>

      <div className={styles.rule} aria-hidden="true" />

      {(title || aside) && (
        <div className={styles.body}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {aside && <p className={styles.aside}>{aside}</p>}
        </div>
      )}
    </header>
  );
}
