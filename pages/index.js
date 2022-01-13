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
        <p>Hi I am Satyam Mishra</p>
        <p>
          I am a Front End Developer with 7 years of experience working as a Senior Front End Engineer at  
          <a href="https://newfold.com" className={utilStyles.postTitle} target="_blank"> Newfold Digital</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Experience</h2>
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
            {`Email: satyam.mishra333@gmail.com`}
            <br/>
            {`Mobile: +91-9711757809`}
            <br/>
            <a 
            className={utilStyles.postTitle} 
            href="https://www.linkedin.com/in/satyam-mishra-front-end/" 
            target="_blank" 
            alt="linkedin profile">
              My LinkedIn Profile
              </a>
        </ul>
      </section>
      </Layout>
  )
}
