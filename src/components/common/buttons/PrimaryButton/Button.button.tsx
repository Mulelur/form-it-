import * as React from 'react';
import { justBlackColor } from '../../../../utils/colors';
import { Btn } from './styles/Button.Styles';

type Props = {
	children: React.ReactNode;
	type: 'submit' | 'button' | 'reset';
	size?: 'small' | 'medium' | 'large';
	color?: 'primary' | 'secondary' | 'tertiary';
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	// iconName?: string;
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
				color: '#bbbbbb',
			};
			break;
		case 'secondary':
			styles = {
				color: '#3c4257',
				backgroundColor: 'rgb(255, 255, 255)',
				boxShadow:
					'rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px',
			};
			break;
		default:
			styles = {
				backgroundColor: justBlackColor,
				color: '#fff',
			};
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
	const { children, type, color, onClick, width, size } = props;
	return (
		<Btn
			onClick={onClick}
			type={type}
			style={renderStyle(color || 'primary', width, size)}
		>
			<span
				style={{
					padding: '.5rem 1.1rem',
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
				}}
			>
				{children}
			</span>
		</Btn>
	);
};

Button.defaultProps = {
	color: 'primary',
	// iconName: undefined,
	onClick: undefined,
	size: 'medium',
	width: '',
};

export default Button;
