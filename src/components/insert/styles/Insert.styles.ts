// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';

export const Container = styled.div`
  position: absolute;
  width: 39rem;
  // height: 40rem;
  box-shadow: 0 21px 36px -16px rgb(49 99 99 / 10%),
    0 4px 15px -1px rgb(0 0 0 / 14%);
  top: 2rem;
  right: 24rem;
  background-color: #252627;
  border-radius: 0.8rem;
  padding: 1.5rem;
  z-index: 1;
`;

export const Search = styled.div``;

export const Fields = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: center;
  margin: 0.4rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

export const FieldsItem = styled.div`
  display: flex;
  width: 10rem;
  height: 10rem;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
  justify-content: center;

  border-radius: 10px;
  // color: #999;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.2;
  color: #999;
`;

export const SelectedFieldsItem = styled.div`
  background-color: #1596f8;
`;

export const Header = styled.div`
  margin: 0.1rem;
  display: flex;
  color: #1596f8;
  justify-content: center;
`;

export const Body = styled.div`
  // height: 11rem;
`;

export const Footer = styled.div`
  display: block;
`;

export const Title = styled.h3`
  font-size: 1.4rem;
`;
