// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 25rem;
  @media (max-width: 635px) {
    display: none;
  }
  @media (max-width: 900px) {
    width: 22rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
`;

export const Title = styled.h4`
  padding: 1rem;
  margin-right: auto;
  font-size: 1.5rem;
  line-height: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const Body = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow-y: hidden;
  max-height: 13rem;
`;

export const Item = styled.div`
  margin: 1rem 4rem 0 1rem;
  max-width: 85%;
  position: relative;
  font-size: 1.4rem;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 32px;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  padding: 16px 4px 16px 15px;
  border-radius: 6px;
  cursor: default;
  ///
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 32px;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  padding: 14px 4px 14px 15px;
  border-radius: 6px;
  cursor: default;
  user-select: none;

  //// selected
  background-color: #eeeeee;
  color: #000;
`;

export const selected = styled.div`
  background-color: #eeeeee;
  color: #000;
`;
