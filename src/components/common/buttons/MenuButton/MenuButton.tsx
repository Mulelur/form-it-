/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import { MenuBtn } from './styles/MenuButton';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const MenuButton = (props: Props) => {
  const { children, style } = props;
  return <MenuBtn style={style}>{children}</MenuBtn>;
};

export default MenuButton;
