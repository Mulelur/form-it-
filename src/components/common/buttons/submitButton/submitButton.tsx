// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container, Button, ButtonWarper } from './styles/submitButtonStyles';

type Props = {
  children: React.ReactNode;
};

export default function SubmitButton(props: Props) {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

SubmitButton.ButtonWarper = function SubmitButtonButtonWarper(props: Props) {
  const { children, ...restProps } = props;
  return <ButtonWarper {...restProps}>{children}</ButtonWarper>;
};

SubmitButton.Button = function SubmitButtonButton(props: Props) {
  const { children, ...restProps } = props;
  return <Button {...restProps}>{children}</Button>;
};
