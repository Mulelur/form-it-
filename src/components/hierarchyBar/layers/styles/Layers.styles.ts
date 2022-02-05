// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';
import { justBlackColor, lightGray } from '../../../../utils/colors';

export const Container = styled.div`
  width: 25rem;
  font-size: 1.8rem;
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
  font-size: 1.2rem;
  position: relative;
  overflow-y: scroll;
  max-height: 25rem;
`;

export const Group = styled.div``;

export const Component = styled.div`
  margin: 1rem 0 0.5rem 1.5rem;
  text-transform: capitalize;
  font-size: 1.4rem;
  line-height: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  cursor: pointer;
`;

export const Parent = styled.input`
  position: revert;
  display: inline-block;
  width: 90%;
  height: 36px;
  text-transform: capitalize;
  margin-right: 0.3rem;
  padding: 1rem;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 0.6rem;
  &:hover {
    background-color: ${lightGray};
  }
`;

export const Selected = styled.input`
  padding: 1rem;
  font-size: 1.4rem;
  background-color: ${justBlackColor};
  border-radius: 0.6rem;
  color: #fff;
  border: none;
  outline: none;
  ${({ disabled }) =>
    !disabled &&
    `color: #3c4d62;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dbdfea;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #3c4d62;
    background-color: #fff;
    border-color: ${justBlackColor};
    outline: 0;
    box-shadow: 0 0 0 3px rgb(101 118 255 / 10%);
}`}
`;

export const IconWrapper = styled.div`
  margin-left: 0.9rem;
  display: flex;
  align-items: center;
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

export const SelectedChildItem = styled.input`
  display: inline-block;
  width: 79%;
  margin: 0.6rem 0.6rem 0.8rem 1rem;
  padding: 0.9rem;
  border: none;
  font-size: 1.5rem;
  color: ${justBlackColor};
  &:hover {
    background-color: ${lightGray};
    border-radius: 0.6rem;
  }
`;

export const  ChildItem  = styled.div`
  border: 1px dashed #eeee;
  backgroundColor: #f9f9f9a1;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  width: fit-content;
  max-height: 32px;
  margin-left: 1rem;
  margin-top: 0.6rem;
  padding: 0.9rem;
  border-radius: 0.6rem;
  font-size: 1.5rem;
  color: ${justBlackColor};
  overflow: hidden;
  & focus {
    background: #f3f3f3;
  }
`;

export const ChildItemInput = styled.input`
  display: inline-block;
  text-transform: capitalize;
  width: 85%;
  height: 32px;
  margin-left: 1rem;
  margin-top: 0.6rem;
  padding: 0.9rem;
  border: none;
  border-radius: 0.6rem;
  font-size: 1.5rem;
  color: ${justBlackColor};
  border-style: solid;
  border-color: transparent;
  & focus {
    background: #f3f3f3;
  }
`;

export const AddIcon = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 21px;
  right: 35px;
`;
