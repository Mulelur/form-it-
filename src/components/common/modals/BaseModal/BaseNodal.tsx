import * as React from 'react';
import * as BM from './styles/BaseModalStyle';

type Props = {
  children: React.ReactNode;
};

export function BaseModal(props: Props) {
  const { children } = props;
  return <BM.Container>{children}</BM.Container>;
}
