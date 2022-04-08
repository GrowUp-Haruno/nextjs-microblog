import styled from 'styled-components';

const Grid = styled.div.attrs(({ ...attr }) => ({ ...attr }))`
  display: grid;
  flex-wrap: wrap;
  max-width: 1200px;
  gap: 40px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

export default Grid;
