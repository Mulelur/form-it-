import * as React from 'react';
import * as TA from './styles/text.styles';

type Props = {
  children: React.ReactNode;
};

export default function TextAreaSection(props: Props) {
  const { children } = props;
  return <TA.Container>{children}</TA.Container>;
}

TextAreaSection.Heading = function TextAreaSectionHeading(props: Props) {
  const { children } = props;
  return <TA.Heading>{children}</TA.Heading>;
};

TextAreaSection.TextArea = function TextAreaSectionTextArea() {
  return <TA.TextArea />;
};
