// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/require-default-props */
import * as React from 'react';
import * as HT from './styles/html.styles';

type Props = {
  children?: React.ReactNode;
};

export default function Html(props: Props) {
  const { children } = props;
  return <HT.Container>{children}</HT.Container>;
}

Html.Header = function HtmlHeader(props: Props) {
  const { children } = props;
  return <HT.Header>{children}</HT.Header>;
};

Html.Body = function HtmlBody(props: Props) {
  const { children } = props;
  return <HT.Body>{children}</HT.Body>;
};

Html.Head = function HtmlBody(props: Props) {
  const { children } = props;
  return <HT.Head>{children}</HT.Head>;
};

Html.Scripts = function HtmlBody(props: Props) {
  const { children } = props;
  return <HT.Scripts>{children}</HT.Scripts>;
};

Html.Styles = function HtmlBody(props: Props) {
  const { children } = props;
  return <HT.Styles>{children}</HT.Styles>;
};
