import React from 'react';
import { Container, Header, Title, TitleSpan } from './styles/Style.styles';

type Props = {
  children: React.ReactNode;
};
export default function Styles(props: Props) {
  return <Container>{props.children}</Container>;
}

Styles.Header = function StylesHeader(props: Props) {
  return <Header>{props.children}</Header>;
};

Styles.Title = function StylesTitle(props: Props) {
  return <Title>{props.children}</Title>;
};
Styles.TitleSpan = function StylesTitleSpan(props: Props) {
  return <TitleSpan>{props.children}</TitleSpan>;
};
