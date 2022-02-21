// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/require-default-props */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import * as QB from './styles/quickBuild';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export default function QuickBuild(props: Props) {
  const { children, style } = props;
  return (
    <>
      <QB.Container style={style}>{children}</QB.Container>
    </>
  );
}

QuickBuild.Title = function QuickBuildTitle(props: Props) {
  const { children, style } = props;
  return (
    <>
      <QB.Title style={style}>{children}</QB.Title>
    </>
  );
};

QuickBuild.Row = function QuickBuildRow(props: Props) {
  const { children, style } = props;
  return (
    <>
      <QB.Row style={style}>{children}</QB.Row>
    </>
  );
};

QuickBuild.Border = function QuickBuildBorder(props: Props) {
  const { children, style } = props;
  return (
    <>
      <QB.Border style={style}>{children}</QB.Border>
    </>
  );
};

QuickBuild.Button = function QuickBuildButton(props: Props) {
  const { children, style } = props;
  return (
    <>
      <QB.Button style={style}>{children}</QB.Button>
    </>
  );
};

QuickBuild.SelectWapper = function QuickBuildSelectWapper(props: Props) {
  const { children, style } = props;
  return (
    <>
      <QB.SelectWapper style={style}>{children}</QB.SelectWapper>
    </>
  );
};

QuickBuild.Preview = function QuickBuildPreview(props: Props) {
  const { children, style } = props;
  return (
    <>
      <QB.Preview style={style}>{children}</QB.Preview>
    </>
  );
};

QuickBuild.Col = function QuickBuildCol(props: Props) {
  const { children, style } = props;
  return (
    <>
      <QB.Col style={style}>{children}</QB.Col>
    </>
  );
};

QuickBuild.Controller = function QuickBuildController(props: Props) {
  const { children, style } = props;
  return (
    <>
      <QB.Controller style={style}>{children}</QB.Controller>
    </>
  );
};

QuickBuild.Controlled = function QuickBuildControlled(props: Props) {
  const { children, style } = props;
  return (
    <>
      <QB.Controlled style={style}>{children}</QB.Controlled>
    </>
  );
};

QuickBuild.ControllerText = function QuickBuildControllerText(props: Props) {
  const { children, style } = props;
  return (
    <>
      <QB.ControllerText style={style}>{children}</QB.ControllerText>
    </>
  );
};

QuickBuild.ControllerButtons = function QuickBuildControllerButtons(
  props: Props
) {
  const { children, style } = props;
  return (
    <>
      <QB.ControllerButtons style={style}>{children}</QB.ControllerButtons>
    </>
  );
};

QuickBuild.ControllerButton = function QuickBuildControllerButton(
  props: Props
) {
  const { children, onClick, style } = props;
  return (
    <>
      <QB.ControllerButton style={style} onClick={onClick}>
        {children}
      </QB.ControllerButton>
    </>
  );
};
