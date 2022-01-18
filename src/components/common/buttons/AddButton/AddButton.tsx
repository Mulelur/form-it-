import * as React from 'react';
import { Button } from './styles/AddButton';

type Props = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const AddButton = (props: Props) => {
  const { children, onClick } = props;
  return <Button onClick={onClick}>{children}</Button>;
};

AddButton.defaultProps = {
  onClick: undefined
};

export default AddButton;
