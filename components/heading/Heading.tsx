import { FC } from 'react';
import styled from 'styled-components';

type propsType = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: 'md' | 'lg' | 'xl' | '2xl';
};

const Heading: FC<propsType> = ({ as, size, children }) => {
  const SDiv =
    size === 'md'
      ? styled.div`
          font-size: 1.2rem;
          line-height: 1.5;
          text-align: center;
        `
      : size === 'lg'
      ? styled.div`
          font-size: 2rem;
          line-height: 1.4;
          margin-top: 0;
          font-weight: 500;
        `
      : size === 'xl'
      ? styled.div`
          font-size: 2rem;
          line-height: 1.3;
          font-weight: 800;
          letter-spacing: -0.05rem;
          margin: 1rem 0;
        `
      : // size === '2xl'
        styled.div`
          font-size: 2.5rem;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.05rem;
          margin-top: 1rem;
          margin-bottom: 0;
        `;

  return (
    <SDiv role="heading" aria-level={Number(as.replace('h', ''))}>
      {children}
    </SDiv>
  );
};

export default Heading;
