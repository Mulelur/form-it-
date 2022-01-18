// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: calc(100vh - 6rem);
  @media (max-width: 635px) {
    height: 100%;
  }
`;

export const Col = styled.div``;
