import * as React from 'react';
import { Button } from './styles/button.styles';

type Props = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style: React.CSSProperties;
};

export default function MyButton(props: Props) {
  const { children, style, onClick } = props;
  return (
    <Button onClick={onClick} style={style}>
      {children}
    </Button>
  );
}
