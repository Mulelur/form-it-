import React from 'react';
import { Container, Header, Title, TitleSpan } from './styles/ElementStyles';

type Props = {
  children: React.ReactNode;
};

export default function Element(props: Props) {
  return <Container>{props.children}</Container>;
}

Element.Header = function FrameHeader(props: Props) {
  return <Header>{props.children}</Header>;
};

Element.Title = function FrameTitle(props: Props) {
  return <Title>{props.children}</Title>;
};
Element.TitleSpan = function FrameTitleSpan(props: Props) {
  return <TitleSpan>{props.children}</TitleSpan>;
};
