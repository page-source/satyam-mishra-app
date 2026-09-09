'use client';

import styles from './Marquee.module.css';

// track is duplicated and moved -50%, so the loop is seamless. the copy is
// aria-hidden so it isn't read out twice.
export default function Marquee({ items, speed = 42 }) {
  const track = [...items, ...items];

  return (
    <div className={styles.wrap} aria-label="Brands worked on">
      <div
        className={styles.track}
        style={{ '--marquee-duration': `${speed}s` }}
      >
        {track.map((item, i) => (
          <span
            className={styles.item}
            key={`${item}-${i}`}
            aria-hidden={i >= items.length ? 'true' : undefined}
          >
            {item}
            <span className={styles.dot} aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
