import React from 'react';
import { Container, Title, Header, TitleSpan } from './styles/Layout.stayles';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return <Container>{props.children}</Container>;
}

Layout.Header = function LayoutHeader(props: Props) {
  return <Header>{props.children}</Header>;
};

Layout.Title = function LayoutTitle(props: Props) {
  return <Title>{props.children}</Title>;
};

Layout.TitleSpan = function LayoutTitleSpan(props: Props) {
  return <TitleSpan>{props.children}</TitleSpan>;
};
