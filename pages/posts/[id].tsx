import Layout from '@/components/Layout';
import Heading from '@/components/styles/Heading';
import Text from '@/components/styles/Text';
import { getAllPostIds, getPostData } from 'lib/post';
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { Props } from 'next/script';

// SSGでプリレンダリングするパス一覧を取得する
// この一覧を基にビルドが行われる
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
// SSGの場合
export async function getStaticProps({ params }: GetStaticPropsContext<{ id: string }>) {
  const postData = params && (await getPostData(params.id));

  return {
    props: {
      postData,
    },
  };
}
export default function Post({ postData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>{postData ? postData.data.title : '記事が見つかりません'}</title>
      </Head>

      {postData ? (
        <article>
          <Heading as="h1" size="xl">
            {postData.data.title}
          </Heading>
          <Text type="light">{postData.data.date}</Text>
          <div dangerouslySetInnerHTML={{ __html: postData.blogcontentHTML }} />
        </article>
      ) : (
        <p>記事が見つかりませんでした</p>
      )}
    </Layout>
  );
}
