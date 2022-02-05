// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';
import { justBlackColor } from '../../../../utils/colors';

export const Container = styled.div`
  width: 26.5rem;
  height: calc(100vh - 6rem);
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
  font-size: 1.5rem;
  line-height: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const Body = styled.div`
  overflow: auto;
  height: 100%;
  font-size: 1.2rem;
  position: relative;
`;

export const Group = styled.div``;

export const Component = styled.div`
  margin: 1rem 0 1rem 1.5rem;

  text-transform: capitalize;
  font-size: 1.4rem;
  line-height: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const Selected = styled.input`
  padding: 1rem;
  font-size: 1.4rem;
  background-color: ${justBlackColor};
  border-radius: 0.6rem;
  color: #fff;
  border: none;
  outline: none;
`;

export const IconWrapper = styled.div`
  margin-left: 0.9rem;
  display: flex;
  align-items: center;
`;

export const HelpIconWrapper = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
  background: rgb(255, 255, 255);
  border-radius: 8px;
  width: 4rem;
  height: 4rem;
  margin: 0.4rem auto;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  color: #bbbbbb;
  padding: 0.5rem;
  &:hover {
    color: ${justBlackColor};
  }
  &:first-child {
    margin-top: 1rem;
  }
`;

export const Handel = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f4f4;
  border: 1px solid #eee;
  border-top: 0;
`;

export const Flex = styled.div`
  display: flex;
  height: 100%;
`;

// export const
