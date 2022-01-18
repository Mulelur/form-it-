/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Container, Text, TextWrapper } from './styles/Text.styles';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  // restProps: React.AllHTMLAttributes
};

export default function LineText(props: Props) {
  return <Container>{props.children}</Container>;
}

LineText.TextWrapper = function LineTextTextWrapper(props: Props) {
  return <TextWrapper>{props.children}</TextWrapper>;
};

LineText.Text = function LineTextText(props: Props) {
  const { children, style } = props;
  return <Text style={style}>{children}</Text>;
};
