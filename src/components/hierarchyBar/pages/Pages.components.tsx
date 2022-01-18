/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Container, Body, Header, Title, Item } from './styles/pages.styles';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const Pages = (props: Props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

Pages.Body = function PagesBody(props: Props) {
  return <Body>{props.children}</Body>;
};

Pages.Header = function PagesHeader(props: Props) {
  return <Header>{props.children}</Header>;
};

Pages.Title = function PagesTitle(props: Props) {
  return <Title>{props.children}</Title>;
};

Pages.Item = function PagesItem(props: Props) {
  const { children, onClick, onContextMenu, style } = props;
  return (
    <Item onClick={onClick} onContextMenu={onContextMenu} style={style}>
      {children}
    </Item>
  );
};

Pages.defaultProps = {
  onClick: undefined
};

export default Pages;
