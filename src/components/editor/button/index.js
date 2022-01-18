// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container, Header, Title, TitleSpan } from './styles/button';

export default function Button({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Button.Header = function ButtonHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Button.Title = function ButtonTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Button.TitleSpan = function ButtonTitleSpan({ children, ...restProps }) {
  return <TitleSpan {...restProps}>{children}</TitleSpan>;
};
