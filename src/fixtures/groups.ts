import { v1 as uuidv1 } from 'uuid';
import {
	defaultButtonStyles,
	// defaultInputStyles,
	// defaultLabelStyles,
} from '../Defaults/project.default';

export const Groups = [
	{
		id: uuidv1(),
		module: 'input',
		styles: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'flex-start',
			padding: '0',
			margin: '0',
			height: '10rem',
			width: '100%',
			position: 'relative',
			background: '',
			borderRadius: '',
		},
		children: [
			// {
			//   id: uuidv1(),
			//   module: 'label-1',
			//   value: 'my label',
			//   styles: defaultLabelStyles,
			//   type: 'label'
			// },
			{
				id: uuidv1(),
				module: 'input',
				value: 'input',
				styles: {},
				styleType: 'mui-input-1',
				type: 'input',
			},
		],
		type: 'group',
	},
	{
		id: uuidv1(),
		module: 'button',
		styles: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'unset',
			alignItems: 'unset',
			padding: '0',
			margin: '0',
			height: '10rem',
			width: '100%',
			position: 'relative',
			background: '',
			borderRadius: '',
		},
		children: [
			{
				id: uuidv1(),
				module: 'button-1',
				value: 'My New Button',
				styles: defaultButtonStyles,
				type: 'button',
			},
		],
		type: 'group',
	},
	{
		id: uuidv1(),
		module: 'image',
		styles: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'unset',
			alignItems: 'unset',
			padding: '0',
			margin: '0',
			height: '10rem',
			width: '100%',
			position: 'relative',
			background: '',
			borderRadius: '',
		},
		children: [
			{
				id: uuidv1(),
				module: 'image',
				value: '',
				styles: {
					background:
						'url(https://images.unsplash.com/photo-1640441368733-c3b28c98136e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)',
					backgroundPosition: 'center',
					height: '10rem',
					width: '10rem',
				},
				type: 'image',
			},
		],
		type: 'group',
	},
];
