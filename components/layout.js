import { useState } from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navigation from './Navigation';
import Introduction from './Introduction';
import Experience from './Experience';
import Contact from './Contact';
import Projects from './Projects';

const name = 'Satyam Mishra';
export const siteTitle = 'Satyam Mishra | Front End Developer';

export default function Layout({ children, home }) {
  const [itemToShow, setItem] = useState(1);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Satyam Mishra Website" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div class={styles.col1}>
        <header className={styles.header}>
          <img
            width="150px"
            height="200px"
            src="/images/profile.jpg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
      </div>
      <div className={styles.col2}>
        <Navigation onClick={setItem} />
        {itemToShow === 1 && <Introduction />}
        {itemToShow === 2 && <Experience />}
        {itemToShow === 3 && <Projects />}
        {itemToShow === 4 && <Contact />}
      </div>
    </div>
  );
}
