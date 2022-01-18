import React from 'react';
import * as SL from './styles/Select.styles';

type Props = {
  children: React.ReactNode;
};

export default function Select(props: Props) {
  return <SL.Container>{props.children}</SL.Container>;
}

Select.Label = function SelectLabel(props: Props) {
  return <SL.Label>{props.children}</SL.Label>;
};

Select.Wrap = function SelectWrap(props: Props) {
  return <SL.Wrap>{props.children}</SL.Wrap>;
};

Select.Control = function SelectControl(props: Props) {
  return <SL.Control>{props.children}</SL.Control>;
};

Select.SelectF = function SelectSelectF(props: Props) {
  return <SL.SelectF>{props.children}</SL.SelectF>;
};

Select.Option = function SelectOption(props: Props) {
  return <SL.Option>{props.children}</SL.Option>;
};
