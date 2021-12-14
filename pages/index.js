import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I am Priyanka Shukla</p>
        <p>
          I am a UX Designer having 2 years of experience in various UX technologies and tools.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Portfolio</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, dateRange }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.postTitle}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {dateRange}
              </small>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Contact</h2>
        <ul className={utilStyles.list}>
            {`Email: priyanka.impressions@gmail.com`}
            <br/>
            {`Mobile: +91-8604483364`}
            <br/>
            <a className={utilStyles.postTitle} href="https://linkedin.com/in/priyanka-shukla-344282144/" target="_blank" alt="linkedin profile">My LinkedIn Profile</a>
        </ul>
      </section>
      </Layout>
  )
}
