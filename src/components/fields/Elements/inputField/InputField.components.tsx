/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import * as IF from './styles/InputField.styles';

type Props = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField(props: Props) {
  const { style, children } = props;
  return <IF.Container style={style}>{children}</IF.Container>;
}

InputField.Label = function InputFieldLabel(props: Props) {
  return <IF.Label style={props.style}>{props.children}</IF.Label>;
};

InputField.Input = function InputFieldInput(props: Props) {
  const { style, value, placeholder, type, onChange } = props;
  return (
    <IF.Input
      type={type}
      value={value}
      placeholder={placeholder}
      style={style}
      onChange={onChange}
      autoComplete="off"
    />
  );
};

InputField.Input2 = function InputFieldInput2(props: Props) {
  const { style, value } = props;
  return <IF.Input2 value={value} style={style} />;
};

InputField.InputWebflow = function InputFieldInput2(props: Props) {
  const { style, value } = props;
  return <IF.InputWebflow value={value} style={style} />;
};
