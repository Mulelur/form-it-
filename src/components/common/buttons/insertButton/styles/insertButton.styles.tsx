// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  padding: 1.5rem;
`;

export const Insert = styled.button`
  display: block;
  border: none;
  height: 3rem;
  outline: none;
  width: 7rem;
  border-radius: 0.4rem;
  background-color: #1596f8;
  color: white;
  &: active {
    border: 2px solid #a2c0d6;
  }
`;
