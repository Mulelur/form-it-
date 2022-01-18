// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container, Header, Title, TitleSpan } from './styles/frame';

export default function Frame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Frame.Header = function FrameHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Frame.Title = function FrameTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Frame.TitleSpan = function FrameTitleSpan({ children, ...restProps }) {
  return <TitleSpan {...restProps}>{children}</TitleSpan>;
};
