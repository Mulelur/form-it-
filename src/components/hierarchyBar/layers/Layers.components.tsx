/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { justBlackColor } from '../../../utils/colors';
import * as LY from './styles/Layers.styles';

type Props = {
  id?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  value?: string;
  onDoubleClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  selected?: boolean;
  style?: React.CSSProperties;
};

export default function Layers(props: Props) {
  return <LY.Container>{props.children}</LY.Container>;
}
Layers.Header = function LayersHeader(props: Props) {
  const { style, children } = props;
  return <LY.Header style={style}>{children}</LY.Header>;
};

Layers.Title = function LayersTitle(props: Props) {
  return <LY.Title>{props.children}</LY.Title>;
};
Layers.Group = function LayersGroup(props: Props) {
  return <LY.Group>{props.children}</LY.Group>;
};
Layers.Component = function LayersComponent(props: Props) {
  const { children } = props;
  return <LY.Component>{children}</LY.Component>;
};

Layers.Body = function LayersBody(props: Props) {
  const { style, children } = props;
  return <LY.Body style={style}>{children}</LY.Body>;
};

Layers.Selected = function HierarchySelected(props: Props) {
  const { value, disabled, onClick, onChange, defaultValue } = props;
  return (
    <LY.Selected
      onClick={onClick}
      onChange={onChange}
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
    />
  );
};

Layers.IconWrapper = function LayersIconWrapper(props: Props) {
  return <LY.IconWrapper>{props.children}</LY.IconWrapper>;
};

Layers.Row = function LayersRow(props: Props) {
  return <LY.Row>{props.children}</LY.Row>;
};

Layers.SelectedChildItem = function LayersSelectedChildItem(props: Props) {
  const { onClick, value } = props;
  return <LY.SelectedChildItem value={value} onClick={onClick} />;
};

Layers.ParentItem = function LayersParent(props: Props) {
  const { onClick, value, selected } = props;
  let style;
  if (selected) {
    style = { backgroundColor: justBlackColor, color: '#fff' };
  }
  return <LY.Parent value={value} style={style} onClick={onClick} />;
};

Layers.ChildItemInput = function LayersChildItem(props: Props) {
  const { value, onClick, style } = props;
  return <LY.ChildItemInput style={style} onClick={onClick} value={value} />;
};

Layers.ChildItem = function LayersChildItem(props: Props) {
  const { onClick, children, style } = props;
  return (
    <LY.ChildItem style={style} onClick={onClick}>
      {children}
    </LY.ChildItem>
  );
};

Layers.AddIcon = function LayersChildItem(props: Props) {
  const { children, onClick, selected } = props;
  let style;
  if (selected) {
    style = { color: '#fff' };
  }
  return (
    <LY.AddIcon style={style} onClick={onClick}>
      {children}
    </LY.AddIcon>
  );
};
