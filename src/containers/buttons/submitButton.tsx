import React from 'react';
import { SubmitButton } from '../../components';

type Props = {
  children: React.ReactNode;
};

export default function SubmitButtonContainer(props: Props) {
  const { children } = props;
  return (
    <SubmitButton>
      <SubmitButton.ButtonWarper>
        <SubmitButton.Button>{children}</SubmitButton.Button>
      </SubmitButton.ButtonWarper>
    </SubmitButton>
  );
}
