/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { justBlackColor } from '../../../utils/colors';
import {
  Container,
  Header,
  Title,
  Group,
  Component,
  Body,
  Selected,
  Row,
  IconWrapper,
  HelpIconWrapper,
  Handel,
  Flex
} from './styles/HierarchyBar.styles';

type Props = {
  children: React.ReactNode;
  flexDirection?: string;
  width?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  selected?: boolean;
  style?: React.CSSProperties;
};

export default function HierarchyBar(props: Props) {
  const { children, style } = props;

  return <Container style={style}>{children}</Container>;
}

HierarchyBar.Header = function HierarchyBarHeader(props: Props) {
  return <Header>{props.children}</Header>;
};

HierarchyBar.Title = function HierarchyBarTitle(props: Props) {
  return <Title>{props.children}</Title>;
};
HierarchyBar.Group = function HierarchyBarGroup(props: Props) {
  return <Group>{props.children}</Group>;
};
HierarchyBar.Component = function HierarchyBarComponent(props: Props) {
  return <Component>{props.children}</Component>;
};

HierarchyBar.Body = function HierarchyBarBody(props: Props) {
  return <Body>{props.children}</Body>;
};

HierarchyBar.Selected = function HierarchySelected() {
  return <Selected />;
};

HierarchyBar.IconWrapper = function HierarchyBarIconWrapper(props: Props) {
  return <IconWrapper>{props.children}</IconWrapper>;
};

HierarchyBar.HelpIconWrapper = function HierarchyBarHealpIconWrapper(
  props: Props
) {
  return <HelpIconWrapper>{props.children}</HelpIconWrapper>;
};

HierarchyBar.Row = function HierarchyBarRow(props: Props) {
  const { onClick, children, selected } = props;
  const color = selected ? `${justBlackColor}` : '';
  return (
    <Row onClick={onClick} style={{ color: `${color}` }}>
      {children}
    </Row>
  );
};

HierarchyBar.Handel = function HierarchyBarRow(props: Props) {
  const { children } = props;
  return <Handel>{children}</Handel>;
};

HierarchyBar.Flex = function HierarchyFlex(props: Props) {
  const { children } = props;
  return <Flex>{children}</Flex>;
};
