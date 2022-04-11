import Layout from '@/components/Layout';
import Heading from '@/components/styles/Heading';
import Head from 'next/head';

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>Page not found</title>
      </Head>

      <Heading as="h1" size="2xl">
        ページが見つかりませんでした
      </Heading>
    </Layout>
  );
}
