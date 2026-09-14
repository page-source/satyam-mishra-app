'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './ProfilePhoto.module.css';

/*
 * Native <dialog> rather than a hand rolled overlay. showModal() puts it in the
 * top layer, handles Escape, renders the backdrop and makes the rest of the
 * page inert, so there is no focus trap of mine to get wrong.
 */
export default function ProfilePhoto({ src, alt }) {
  const ref = useRef(null);
  // The full size image is only fetched once someone looks like they want it.
  // Eager on every load meant shipping the 1200w variant to every visitor for
  // a modal most of them never open.
  const [warm, setWarm] = useState(false);

  const open = () => {
    setWarm(true);
    ref.current?.showModal();
  };
  const close = () => ref.current?.close();

  // a click that lands on the dialog box itself is a click on the backdrop
  const onBackdrop = (e) => {
    if (e.target === ref.current) close();
  };

  // the page scroll lock is css, see body:has(dialog[open]) in globals. doing
  // it here with an inline style meant a missed close event left the whole
  // page unscrollable.

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={open}
        onMouseEnter={() => setWarm(true)}
        onFocus={() => setWarm(true)}
        aria-label={`See a larger photo of ${alt}`}
      >
        <Image
          className={styles.thumb}
          src={src}
          width={92}
          height={92}
          alt={alt}
          priority
        />
      </button>

      <dialog
        ref={ref}
        className={styles.dialog}
        onClick={onBackdrop}
        aria-label={`Photo of ${alt}`}
      >
        <button
          type="button"
          className={styles.close}
          onClick={close}
          aria-label="Close"
        >
          Close
        </button>
        {/* eager once rendered, because lazy waits on an intersection observer
            that only fires after the dialog is already open, which showed an
            empty frame on the first click. */}
        {warm && (
          <Image
            className={styles.full}
            src={src}
            width={560}
            height={580}
            alt={alt}
            loading="eager"
          />
        )}
      </dialog>
    </>
  );
}
