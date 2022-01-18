import React from 'react';
import { TextAreaField } from '../../components';

export default function TextAreaContainer({ children, display }) {
  return (
    <TextAreaField display={display}>
      <TextAreaField.Label>{children}</TextAreaField.Label>
      <TextAreaField.Wrap>
        <TextAreaField.TextArea />
      </TextAreaField.Wrap>
    </TextAreaField>
  );
}
