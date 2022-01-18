import * as React from 'react';
import TextAreaSection from '../../../../components/editor/sections/text';

export default function TextAreaSectionContainer() {
  return (
    <>
      <TextAreaSection>
        <TextAreaSection.Heading>Text</TextAreaSection.Heading>
        <TextAreaSection.TextArea />
      </TextAreaSection>
    </>
  );
}
