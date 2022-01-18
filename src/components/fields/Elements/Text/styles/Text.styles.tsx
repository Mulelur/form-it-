// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  &:hover {
    background-color: blue;
  }
`;

export const TextWrapper = styled.div`
  text-align: ${({ style }) => style?.textAlign};
`;

export const Text = styled.span`
  font-size: ${({ style }) => style?.fontSize}px;
  font-weight: 500;
`;
