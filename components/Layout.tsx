import Heading from '@/components/styles/Heading';
import BorderCircle from '@/components/styles/BorderCircle';
import Head from 'next/head';
import { FC } from 'react';
import styled from 'styled-components';

const name = 'HaL Code';
export const siteTitle = 'Next.js blog';

// .headerHomeImage {
//   width: 8rem;
//   height: 8rem;
// }

// .backToHome {
//   margin: 3rem 0 0;
// }

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

const Layout: FC = ({ children }) => {
  return (
    <SContainer>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SHeader>
        {/* <img src="/images/profile.png" alt="プロフィール画像" /> */}
        <SBorderCircle src="/images/profile.png" alt="プロフィール画像" />
        <Heading as='h1' size='lg'>{name}</Heading>
      </SHeader>
      <main>{children}</main>
    </SContainer>
  );
};

export default Layout;
