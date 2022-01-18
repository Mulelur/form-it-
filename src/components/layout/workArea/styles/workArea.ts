// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';

export const Container = styled.div`
  width: calc(100% - 50rem);
  background-color: #f4f5fc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  @media (max-width: 900px) {
    width: calc(100% - 40rem);
  }
  @media (max-width: 635px) {
    justify-content: space-between;
    width: 100vw;
  }
`;

export const Bord = styled.div`
  margin-top: 3rem;
  width: 86%;
  height: 80%;
  background-color: #ffffff;
  border-radius: 0.4rem;
  overflow: auto;
  box-shadow: 0 2px 4px -1px rgba(6, 24, 44, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ;
  background-size: cover;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
`;

export const MobileNav = styled.div`
  display: none;
  @media (max-width: 635px) {
    display: block;
  }
`;

export const Group = styled.div``;
