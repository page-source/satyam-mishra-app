'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

/*
 * Counts up to value the first time it scrolls into view.
 *
 * These are real numbers off my CV, so a wrong one is worse than no animation.
 * I hit this in testing: a throttled tab froze the count and left "39 to 11"
 * on screen. So the real value is what renders on the server, and it's what we
 * fall back to any time the count can't finish (reduced motion, hidden tab at
 * mount, tab backgrounded mid count). It only starts from zero once we know
 * rAF is actually running.
 */
export default function CountUp({ value, prefix = '', suffix = '', duration = 1500 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  const [shown, setShown] = useState(value);
  const [armed, setArmed] = useState(false);

  // arm on mount. these are below the fold so dropping to zero isn't visible,
  // it just gives the count a starting point.
  useEffect(() => {
    if (reduce || document.hidden) return;
    setShown(0);
    setArmed(true);
  }, [reduce]);

  useEffect(() => {
    if (!armed || !inView) return;

    let raf;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setShown(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setShown(value);
    };

    // backgrounding the tab pauses rAF and leaves a half counted number on
    // screen, so snap to the real one
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        setShown(value);
      }
    };

    document.addEventListener('visibilitychange', onVisibility);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [armed, inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
