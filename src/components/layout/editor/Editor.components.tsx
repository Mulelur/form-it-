import React from 'react';
import { Container } from './styles/Editor.styles';

type Props = {
  children: React.ReactNode;
};

export default function Editor(props: Props) {
  return <Container>{props.children}</Container>;
}
