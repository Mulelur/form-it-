/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import * as ATH from './styles/auth.styles';

type Props = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function Auth(props: Props) {
  const { children } = props;
  return <ATH.Container>{children}</ATH.Container>;
}

Auth.Header = function AuthHeader(props: Props) {
  const { children } = props;
  return <ATH.Header>{children}</ATH.Header>;
};

Auth.HeaderLogo = function AuthHeaderLogo(props: Props) {
  const { children } = props;
  return <ATH.HeaderLogo>{children}</ATH.HeaderLogo>;
};

Auth.HeaderLink = function AuthHeaderLink(props: Props) {
  const { children } = props;
  return <ATH.HeaderLink>{children}</ATH.HeaderLink>;
};

Auth.HeaderButton = function AuthHeaderButton(props: Props) {
  const { children, onClick } = props;
  return <ATH.HeaderButton onClick={onClick}>{children}</ATH.HeaderButton>;
};

Auth.Body = function AuthHeaderBody(props: Props) {
  const { children } = props;
  return <ATH.Body>{children}</ATH.Body>;
};

Auth.Heading = function AuthHeaderHeading(props: Props) {
  const { children } = props;
  return <ATH.Heading>{children}</ATH.Heading>;
};

Auth.Divider = function AuthHeaderDivider(props: Props) {
  const { children } = props;
  return <ATH.Divider>{children}</ATH.Divider>;
};

Auth.Footer = function AuthHeaderFooter(props: Props) {
  const { children } = props;
  return <ATH.Footer>{children}</ATH.Footer>;
};

Auth.FooterLink = function AuthHeaderFooterLink(props: Props) {
  const { children } = props;
  return <ATH.FooterLink>{children}</ATH.FooterLink>;
};

Auth.CopyRight = function AuthHeaderCopyRight(props: Props) {
  const { children } = props;
  return <ATH.CopyRight>{children}</ATH.CopyRight>;
};

Auth.Form = function AuthHeaderCopyRight(props: Props) {
  const { children, onSubmit } = props;
  return <ATH.Form onSubmit={onSubmit} >{children}</ATH.Form>;
};

Auth.Spacer = function AuthHeaderCopyRight() {
  return <ATH.Spacer />;
};
