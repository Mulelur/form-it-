/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import { Container, Item } from './styles/Group.styles';

type Props = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

function Group(props: Props) {
  return <Container style={props.style}>{props.children}</Container>;
}

Group.Item = function GroupItem() {
  return <Item />;
};

export default Group;
