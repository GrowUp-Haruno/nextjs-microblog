import Heading from '@/components/styles/Heading';
import BorderCircle from '@/components/styles/BorderCircle';
import Head from 'next/head';
import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const name = 'HaL Code';
export const siteTitle = 'Next.js blog';

const SContainer = styled.div`
  max-width: 1244px;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const SHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SBorderCircle = styled(BorderCircle)`
  width: 6rem;
  height: 6rem;
`;

const SBorderCircleHome = styled(BorderCircle)`
  width: 8rem;
  height: 8rem;
`;

const SDivBackToHome = styled.div`
  margin: 3rem 0 0;
`;

const SMain = styled.main`
  min-height: 100vh;
  padding: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout: FC<{ home?: boolean }> = ({ children, home }) => {
  return (
    <SContainer>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SHeader>
        {home ? (
          <>
            <SBorderCircleHome src="/images/profile.png" alt="プロフィール画像" />
            <Heading as="h1" size="2xl">
              {name}
            </Heading>
          </>
        ) : (
          <>
            <SBorderCircle src="/images/profile.png" alt="プロフィール画像" />
            <Heading as="h1" size="xl">
              {name}
            </Heading>
          </>
        )}
      </SHeader>
      <SMain>
        {children}
        {!home && (
          <SDivBackToHome>
            <Link href="/">👈ホームに戻る</Link>
          </SDivBackToHome>
        )}
      </SMain>
    </SContainer>
  );
};

export default Layout;
