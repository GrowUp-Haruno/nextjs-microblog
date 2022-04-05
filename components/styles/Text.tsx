import { FC } from 'react';
import styled from 'styled-components';

export type TextProps = {
  type?: 'light' | 'bold';
};

const Text: FC<TextProps> = ({ type,children }) => {
  const SParagraphs =
    type === 'bold'
      ? styled.p`
          color: black;
          font-weight: 550;
        `
      : type === 'light'
      ? styled.p`
          color: #999;
        `
      : // type === undefined
        styled.p``;

  return <SParagraphs>{children}</SParagraphs>;
};

export default Text;
