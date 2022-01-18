import React from 'react';
import { Container, Insert } from './styles/insertButton.styles';

type Props = {
  children: React.ReactNode;
};

export default function InsertButton(props: Props) {
  return <Container>{props.children}</Container>;
}

InsertButton.Insert = function InsertButtonInsert(props: Props) {
  return <Insert>{props.children}</Insert>;
};
