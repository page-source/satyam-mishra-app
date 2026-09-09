'use client';

import { useEffect, useState } from 'react';
import styles from './Nav.module.css';

const THEMES = ['warm', 'light', 'dark'];

// Has to match --paper in globals.css for each theme.
const PAPER = {
  warm: '#f3ead8',
  light: '#faf8f5',
  dark: '#131209',
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState('warm');

  // the layout script already picked one, so just read it back
  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(THEMES.includes(current) ? current : 'warm');
  }, []);

  const next = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];

  const cycle = () => {
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', PAPER[next]);

    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      /* private mode, so it just won't persist */
    }
  };

  return (
    <button
      type="button"
      className={styles.theme}
      onClick={cycle}
      aria-label={`Theme: ${theme}. Switch to ${next}.`}
    >
      <span className={styles.themeDots} aria-hidden="true">
        {THEMES.map((t) => (
          <span
            key={t}
            className={styles.themeDot}
            data-on={t === theme || undefined}
          />
        ))}
      </span>
      <span className={styles.themeName} aria-hidden="true">
        {theme}
      </span>
    </button>
  );
}
