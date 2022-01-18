/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import {
  Container,
  Tool,
  ToolBar,
  ToolDivider,
  ToolIcon,
  ToolTitle,
  NavMenu,
  NavMenuTitle,
  PnP,
  PnPButton,
  PnPDivider,
  PnPIconWapper,
  PnPIcon,
  MenuButton
} from './styles/Header.styles';

type Props = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export default function Header(props: Props) {
  return <Container>{props.children}</Container>;
}

Header.NavMenu = function HeaderNavMenu(props: Props) {
  const { children, onClick } = props;
  return <NavMenu onClick={onClick}>{children}</NavMenu>;
};

Header.NavMenuTitle = function HeaderNavMenuTitle(props: Props) {
  return <NavMenuTitle to="/">{props.children}</NavMenuTitle>;
};

Header.ToolBar = function HeaderToolBar(props: Props) {
  return <ToolBar>{props.children}</ToolBar>;
};

Header.ToolIcon = function HeaderToolIcon(props: Props) {
  return <ToolIcon>{props.children}</ToolIcon>;
};

Header.Tool = function HeaderTool(props: Props) {
  const { onClick, children } = props;
  return <Tool onClick={onClick}>{children}</Tool>;
};

Header.ToolDivider = function HeaderToolDivider(props: Props) {
  return <ToolDivider>{props.children}</ToolDivider>;
};

Header.PnP = function HeaderPnP(props: Props) {
  return <PnP>{props.children}</PnP>;
};

Header.ToolTitle = function HeaderToolTitle(props: Props) {
  return <ToolTitle>{props.children}</ToolTitle>;
};

Header.PnP = function HeaderPnP(props: Props) {
  return <PnP>{props.children}</PnP>;
};

Header.PnPIconWapper = function HeaderPnPIconWapper(props: Props) {
  const { onClick, children } = props;
  return <PnPIconWapper onClick={onClick}>{children}</PnPIconWapper>;
};

Header.PnPIcon = function HeaderPnPIcon(props: Props) {
  return <PnPIcon to="/">{props.children}</PnPIcon>;
};

Header.PnPDivider = function HeaderPnPDivider(props: Props) {
  return <PnPDivider>{props.children}</PnPDivider>;
};

Header.PnPButton = function HeaderPnPButton(props: Props) {
  return <PnPButton to="/">{props.children}</PnPButton>;
};

Header.MenuButton = function HeaderMenuButton(props: Props) {
  return <MenuButton>{props.children}</MenuButton>;
};
