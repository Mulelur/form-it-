import React from 'react';
import { Container, Row, Overlay } from './styles/Home.styles';

type Props = {
  children: React.ReactNode;
};

export default function Home(props: Props) {
  return <Container>{props.children}</Container>;
}

Home.Row = function HomeRow(props: Props) {
  return <Row>{props.children}</Row>;
};

Home.Overlay = function HomeOverlay() {
  return <Overlay />;
};
