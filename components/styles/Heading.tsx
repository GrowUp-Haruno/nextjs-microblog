import { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';

export type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: 'md' | 'lg' | 'xl' | '2xl';
};

export const SDiv: {
  [key in HeadingProps['size']]: StyledComponent<'div', any, {}, never>;
} = {
  md: styled.div`
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: center;
  `,
  lg: styled.div`
    font-size: 2rem;
    line-height: 1.4;
    margin-top: 0;
    font-weight: 500;
  `,
  xl: styled.div`
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  `,
  '2xl': styled.div`
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin-top: 1rem;
    margin-bottom: 0;
  `,
};

const Heading: FC<HeadingProps> = ({ as, size, children }) => {
  const SHeader = SDiv[size];

  return (
    <SHeader role="heading" aria-level={Number(as.replace('h', ''))}>
      {children}
    </SHeader>
  );
};

export default Heading;
