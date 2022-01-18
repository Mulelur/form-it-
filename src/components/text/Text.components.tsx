/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Container, Text, TextWrapper } from './styles/Text.styles';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export default function LineText(props: Props) {
  return (
    <Container onClick={props.onClick} style={props.style}>
      {props.children}
    </Container>
  );
}

LineText.TextWrapper = function LineTextTextWrapper(props: Props) {
  return (
    <TextWrapper style={props.style || undefined}>{props.children}</TextWrapper>
  );
};

LineText.Text = function LineTextText(props: Props) {
  const { style, children } = props;
  return <Text style={style}>{children}</Text>;
};
