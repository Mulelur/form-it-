import React from 'react';
import { Container, Header, Title, TitleSpan } from './styles/Text.styles';

type Props = {
  children: React.ReactNode;
};

export default function Text(props: Props) {
  return <Container>{props.children}</Container>;
}

Text.Header = function TextHeader(props: Props) {
  return <Header>{props.children}</Header>;
};

Text.Title = function TextTitle(props: Props) {
  return <Title>{props.children}</Title>;
};
Text.TitleSpan = function TextTitleSpan(props: Props) {
  return <TitleSpan>{props.children}</TitleSpan>;
};
