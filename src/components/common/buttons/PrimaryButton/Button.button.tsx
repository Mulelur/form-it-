import * as React from 'react';
import Icons from '../../general/Icons';
import { Btn } from './styles/Button.Styles';

type Props = {
  children: React.ReactNode;
  type: 'submit' | 'button' | 'reset';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'tertiary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  iconName?: string;
  width?: string;
};

const renderStyle = (
  color: string,
  width: string | undefined,
  size: string | undefined
) => {
  let styles;
  switch (color) {
    case 'tertiary':
      styles = {
        backgroundColor: 'transparent',
        border: '1px dashed #bbbb',
        borderRadius: '8px',
        color: '#bbbbbb'
      };
      break;
    case 'secondary':
      styles = {
        backgroundColor: '#717173',
        color: '#fff'
      };
      break;
    default:
      break;
  }
  switch (size) {
    case 'small':
      styles = { ...styles, width: '13rem', height: '3.1rem' };
      break;
    case 'medium':
      styles = { ...styles, width: '18rem', height: '4rem' };
      break;
    case 'large':
      styles = { ...styles, width: '22rem', height: '6rem' };
      break;
    default:
      break;
  }
  return { ...styles, width, size };
};

const Button = (props: Props) => {
  const { children, type, color, iconName, onClick, width, size } = props;
  return (
    <Btn
      onClick={onClick}
      type={type}
      style={renderStyle(color || 'primary', width, size)}
    >
      {iconName && <Icons name={iconName} style={{ marginLeft: '.5rem' }} />}
      <span style={{ padding: '.5rem' }}>{children}</span>
    </Btn>
  );
};

Button.defaultProps = {
  color: 'primary',
  iconName: undefined,
  onClick: undefined,
  size: 'medium',
  width: ''
};

export default Button;
