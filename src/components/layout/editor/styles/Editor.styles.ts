import styled from 'styled-components/macro';

export const Container = styled.div`
  overflow: auto;
  width: 25rem;
  box-shadow: 0 1px 8px 0 rgb(174 188 204 / 10%);
  @media (max-width: 635px) {
    display: none;
  }
`;
