// pages/index.js
import Layout, { siteTitle } from '@/components/Layout';
import Grid from '@/components/styles/Grid';
import Heading from '@/components/styles/Heading';
import Text from '@/components/styles/Text';
import ThumbnailImage from '@/components/styles/ThumbnailImage';
import { getPostsData } from 'lib/post';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import Link from 'next/link';

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section>
        <Heading as="h2" size="md">
          私はフロントエンジニアです/ReactとTypeScriptが好きです
        </Heading>
      </section>
      <section>
        <Heading as="h2" size="md">
          📝エンジニアのブログ
        </Heading>
        <Grid>
          {allPostsData.map(({ id, data }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <ThumbnailImage src={data.thumbnail} />
              </Link>
              <Link href={`/posts/${id}`}>
                <Text type="bold">{data.title}</Text>
              </Link>
              <Text type="light">{data.date}</Text>
            </article>
          ))}
        </Grid>
      </section>
    </Layout>
  );
}
