import React from 'react';
import * as TAF from './styles/TextAreaField.styles';

type Props = {
  children: React.ReactNode;
};

export default function TextAreaField(props: Props) {
  return <TAF.Container>{props.children}</TAF.Container>;
}

TextAreaField.Wrap = function TextAreaFieldWrap(props: Props) {
  return <TAF.Wrap>{props.children}</TAF.Wrap>;
};

TextAreaField.Label = function TextAreaFieldLabel(props: Props) {
  return <TAF.Label>{props.children}</TAF.Label>;
};

TextAreaField.TextArea = function TextAreaFieldTextArea(props: Props) {
  return <TAF.TextArea>{props.children}</TAF.TextArea>;
};
