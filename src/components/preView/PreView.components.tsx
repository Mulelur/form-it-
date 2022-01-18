import React from 'react';
import { Container, Row } from './styles/PreView.styles';

type Props = {
  children: React.ReactNode;
};

export default function Preview(props: Props) {
  return <Container>{props.children}</Container>;
}

Preview.Row = function PreviewRow(props: Props) {
  return <Row>{props.children}</Row>;
};
