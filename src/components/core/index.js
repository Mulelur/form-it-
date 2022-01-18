// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container, Row, Col } from './syles/core';

export default function Core({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Core.Row = function CoreRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Core.Col = function CoreCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};
