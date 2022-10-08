// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/button-has-type */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/require-default-props */
import React from 'react';
import styles from './IconButton.module.css';

type Props = {
	onClick: () => void;
	children: React.ReactNode;
	isActive?: boolean;
	disabled?: boolean;
};

export default function IconButton({
	onClick,
	children,
	isActive,
	disabled,
}: Props) {
	return (
		<button
			className={`${styles.button} ${isActive ? styles.button_active : ''}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
