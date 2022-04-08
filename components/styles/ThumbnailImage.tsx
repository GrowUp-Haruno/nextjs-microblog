import styled from 'styled-components';

const ThumbnailImage = styled.img.attrs(({ ...attr }) => ({ ...attr }))`
  width: 950px;
  height: 400px;
  margin-bottom: 20px;
  box-shadow: 4px 5px 12px black;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: translate(4px, 5px);
    box-shadow: none;
  }
`;

export default ThumbnailImage;
