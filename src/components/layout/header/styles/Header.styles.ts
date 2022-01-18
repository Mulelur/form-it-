// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  border-bottom: 1px solid #eee;
  color: #bbbbbb;
`;

export const Tool = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  width: 5rem;
  padding: 0.9rem;
  border-radius: 0.6rem;
  flex-direction: column;
  height: 5rem;
  color: #bbbbbb;
`;

export const NavMenu = styled.div`
  margin: 1rem;
  display: flex;
`;

export const NavMenuTitle = styled(ReachRouterLink)`
  font-size: 1.7rem;
  color: currentColor;
  text-decoration: none;
`;

export const ToolBar = styled.div`
  display: flex;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const ToolDivider = styled.div``;

export const ToolIcon = styled.div``;

export const PnP = styled.div`
  margin: 1rem;
  display: flex;
`;

export const PnPIconWapper = styled.div``;

export const PnPIcon = styled(ReachRouterLink)`
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 3.2rem;
  height: 3.2rem;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  &:hover {
    background-color: rgb(227, 227, 227);
    transition: all 0.2s ease 0s;
  }
`;

export const PnPDivider = styled.div`
  margin: 0.5rem;
`;

export const ToolTitle = styled.div``;

export const PnPButton = styled(ReachRouterLink)`
  margin: 0.5rem;

  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgb(38, 38, 39);
  color: rgb(255, 255, 255);
  position: relative;
  outline: none;
  font-family: inherit;
  border: 0px;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  border-radius: 0.4rem;
  padding: 0.6rem 1.2rem;
  min-height: 3.2rem;
  font-size: 1.4rem;
  line-height: 2rem;
`;

export const MenuButton = styled.button`
  min-width: 30px;
  flex: 0 0 auto;
  align-items: center;
  margin-left: 10px;
  margin-right: 12px;
  justify-content: center;
  border-radius: 15px;
  font-size: 13px;
  font-weight: 600;
  height: 30px;
  border: none;
  user-select: none;
  transition: border-color ease 0.15s, background-color ease 0.15s;
  display: none;

  @media (max-width: 900px) {
    display: flex;
  }
`;
