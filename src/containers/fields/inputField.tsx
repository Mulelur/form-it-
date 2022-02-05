/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { InputField } from '../../components';
import { defaultLabel } from '../../Defaults/project.default';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  type: string;
  defualtValue?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputFieldContainer(props: Props) {
  const { children, type, defualtValue, placeholder, style, onChange } = props;
  return (
    <InputField style={style}>
      <InputField.Label style={defaultLabel}>{children}</InputField.Label>
      <InputField.Input
        type={type}
        value={defualtValue}
        placeholder={placeholder}
        onChange={onChange}

      />
    </InputField>
  );
}
