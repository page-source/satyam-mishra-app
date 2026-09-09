'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { profile, sections } from '../lib/content';
import ThemeToggle from './ThemeToggle';
import styles from './Nav.module.css';

export default function Nav() {
  const [active, setActive] = useState('top');
  const [condensed, setCondensed] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setCondensed(y > 80));

  // scroll spy. observing a band near the top is steadier than doing the
  // offset maths by hand.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // entrance is css, so the bar and the theme control are never stuck at
    // opacity 0 if the js doesn't run
    <header className={styles.nav} data-condensed={condensed || undefined}>
      <div className={`shell ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandName}>{profile.name}</span>
          <span className={`tag ${styles.brandRole}`}>{profile.role}</span>
        </a>

        <nav className={styles.links} aria-label="Sections">
          {sections.slice(1).map(({ id, index, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={styles.link}
                data-active={isActive || undefined}
              >
                <span className={styles.linkIndex}>{index}</span>
                <span>{label}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className={styles.linkMark}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
