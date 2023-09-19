import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Introduction from '../components/Introduction';

export default function Home() {
  return (
    <Layout>
      <Introduction />
    </Layout>
  );
}
