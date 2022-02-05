/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import * as BG from './styles/Background.styles';

type Props = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  background?: string;
};

const Background = (props: Props) => {
  return <BG.Container>{props.children}</BG.Container>;
};

Background.Heading = (props: Props) => {
  return <BG.Heading>{props.children}</BG.Heading>;
};

Background.ImageWarper = (props: Props) => {
  const { children, background } = props;

  return <BG.ImageWarper style={{ background }}>{children}</BG.ImageWarper>;
};

Background.IconWarper = (props: Props) => {
  const { children } = props;

  return <BG.IconWarper>{children}</BG.IconWarper>;
};

Background.Color = (props: Props) => {
  const { style } = props;
  return <BG.Color style={style} />;
};


Background.ImageButton = (props: Props) => {
  return <BG.ImageButton>{props.children}</BG.ImageButton>;
};

Background.Icon = (props: Props) => {
  const { children } = props;
  return <BG.Icon>{children}</BG.Icon>;
};

Background.defaultProps = {
  children: undefined
};

export default Background;
