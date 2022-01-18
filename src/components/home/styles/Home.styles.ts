// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
`;

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0.6;
  width: 100%;
  background-color: #1d1d1f;
  position: absolute;
  color: #bbbbbb;
  top: 0;
  z-index: 1;
  left: 0;
`;
