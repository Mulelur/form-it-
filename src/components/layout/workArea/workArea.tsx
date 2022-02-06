/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Container, Bord, Item, Group, MobileNav, Editor } from './styles/workArea';

type Props = {
  children: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
};

export default function WorkArea(props: Props) {
  return <Container>{props.children}</Container>;
}

WorkArea.Bord = function WorkAreaBord(props: Props) {
  const { children } = props;
  return <Bord>{children}</Bord>;
};

WorkArea.MobileNav = function WorkAreaMobileNav(props: Props) {
  const { children } = props;
  return <MobileNav>{children}</MobileNav>;
};

WorkArea.Item = function WorkAreaItem(props: Props) {
  const { children, onClick, style } = props;
  return (
    <Item onClick={onClick} style={style}>
      {children}
    </Item>
  );
};

WorkArea.Editor = function WorkAreaEditor(props: Props) {
  const { children, onClick, style } = props;
  return (
    <Editor onClick={onClick} style={style}>
      {children}
    </Editor>
  );
};

WorkArea.Group = function WorkAreaItem() {
  return <Group />;
};

WorkArea.defaultProps = {
  onClick: undefined
};
