// pages/index.js
import Layout from '@/components/Layout';
import Grid from '@/components/styles/Grid';
import Heading from '@/components/styles/Heading';
import Text from '@/components/styles/Text';
import ThumbnailImage from '@/components/styles/ThumbnailImage';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
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
          <article>
            <Link href="/">
              <ThumbnailImage src="/images/thumbnail01.jpg" />
            </Link>
            <Link href="/">
              <Text type="bold">SSGとSSRの使い分けの場面はいつなのか？</Text>
            </Link>
            <Text type="light">February 23, 2000</Text>
          </article>
          <article>
            <Link href="/">
              <ThumbnailImage src="/images/thumbnail01.jpg" />
            </Link>
            <Link href="/">
              <Text type="bold">SSGとSSRの使い分けの場面はいつなのか？</Text>
            </Link>
            <Text type="light">February 23, 2000</Text>
          </article>
          <article>
            <Link href="/">
              <ThumbnailImage src="/images/thumbnail01.jpg" />
            </Link>
            <Link href="/">
              <Text type="bold">SSGとSSRの使い分けの場面はいつなのか？</Text>
            </Link>
            <Text type="light">February 23, 2000</Text>
          </article>
          <article>
            <Link href="/">
              <ThumbnailImage src="/images/thumbnail01.jpg" />
            </Link>
            <Link href="/">
              <Text type="bold">SSGとSSRの使い分けの場面はいつなのか？</Text>
            </Link>
            <Text type="light">February 23, 2000</Text>
          </article>
        </Grid>
      </section>
    </Layout>
  );
}
