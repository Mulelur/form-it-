import React from 'react';
import {
  Container,
  CheckBoxInput,
  CheckBoxLabel
} from './styles/CheckBox.styles';

type Props = {
  children: React.ReactNode;
};

export default function CheckBox(props: Props) {
  return <Container>{props.children}</Container>;
}

CheckBox.CheckBoxInput = function CheckBoxCheckBoxInput(props: Props) {
  return <CheckBoxInput>{props.children}</CheckBoxInput>;
};

CheckBox.CheckBoxLabel = function CheckBoxCheckBoxLabel(props: Props) {
  return <CheckBoxLabel>{props.children}</CheckBoxLabel>;
};
