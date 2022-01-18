import React from 'react';
import { SelectField } from '../../components';

export default function SelectFieldContainer({ children }) {
  return (
    <SelectField>
      <SelectField.Label>{children}</SelectField.Label>
      <SelectField.Wrap>
        <SelectField.SelectF>
          <SelectField.Option>a</SelectField.Option>
        </SelectField.SelectF>
      </SelectField.Wrap>
    </SelectField>
  );
}
