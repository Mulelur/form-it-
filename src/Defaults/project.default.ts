import { v4 as uuidv4 } from 'uuid';
import {
	PageStyle,
	Group,
	GroupStyle,
	TextStyle,
} from '../Interface/project.interface';

export const defaultTextStyles: TextStyle = {
	display: 'block',
	fontFamily: "'Shizuru', cursive",
	fontStyle: '',
	textAlign: 'center',
	padding: '0',
	margin: '0',
	top: 0,
	left: 0,
	transform: '',
	fontSize: 35,
	color: 'rgb(255, 251, 230)',
	fontWeight: '700',
	textShadow: '',
	filter:
		'drop-shadow(rgba(255, 217, 5, 0.95) 0px 0px 5.49059px) drop-shadow(rgba(255, 222, 34, 0.75) 0px 0px 27.453px) drop-shadow(rgba(255, 222, 34, 0.44) 0px 0px 82.3589px)',
};

export const defaultLabelStyles = {
	fontSize: '1.8rem',
	fontWeight: '500',
	color: '#344357',
	marginBottom: '0.5rem',
};

export const defaultButtonStyles = {
	fontFamily: 'inherit',
	fontWeight: '700',
	cursor: 'pointer',
	outline: 'none',
	border: '1px solid transparent',
	margin: '',
	boxShadow: 'rgb(0 0 0 / 10%) 0px 3px 12px 0px',
	padding: '8px 18px',
	height: '35px',
	with: '',
	backgroundColor: 'rgb(14, 112, 237)',
	color: 'rgb(255, 255, 255)',
	borderRadius: '4px',
};

export const defaultGroupStyles: GroupStyle = {
	display: ' block',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '0',
	margin: '0 0 0 0',
	height: '0',
	width: '100%',
	position: 'relative',
	background: '',
	borderRadius: '',
};

export const defaultTextAttributes = {
	type: '',
};

export const defaultInputAttributes = {
	plaseholder: '',
};

export const defaultStyles = {
	display: 'block',
	textColor: '#fff',
	backgroundColor: '#ffffff',
	borderColor: '',
	outLineColor: '',
	padding: 0,
	borderRadius: 0.4,
	top: 0,
	left: 0,
	transform: '',
	fontSize: 17,
	color: '#fff',
	width: 350,
	height: 35,
};

export const defaultPageStyles: PageStyle = {
	overflow: 'auto',
	position: 'relative',
	display: 'flex',
	width: '100%',
	height: '100vh',
	justifyContent: 'flex-start',
	alignItems: 'center',
	flexDirection: 'column',
	padding: '2rem',
	margin: '0',
	background: '',
	backgroundSize: 'cover',
};

export const defaultInputStyles = {
	display: 'block',
	textColor: '#fff',
	textAlign: '',
	borderColor: '',
	outLineColor: '',
	padding: '4px',
	borderRadius: '4px',
	fontSize: '17px',
	width: 350,
	height: 35,
	top: 0,
	left: 0,
	transform: '',
	lineHeight: '1.25rem',
	color: '#3c4d62',
	outline: 'none',
	backgroundColor: '#ffffff',
	backgroundClip: 'padding-box',
	border: '1px solid #dbdfea',
	boxShadow: '2px 4px -1px rgba(6, 24, 44, 0.2)',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
};

export const defaultHTMLElement = {
	id: uuidv4(),
	module: 'Hello World',
	value: 'Welcome to my form 😀',
	styles: defaultTextStyles,
	type: 'text',
	editebule: false,
};

export const defaultGroup: Group = {
	id: uuidv4(),
	module: 'Hello World',
	styles: defaultGroupStyles,
	children: [defaultHTMLElement],
	type: 'group',
	editebule: false,
};

export const defaultPage = {
	id: uuidv4(),
	module: 'new-page',
	styles: defaultPageStyles,
	children: [defaultGroup],
	type: 'page',
	editebule: false,
};

export const defaultLabel = {
	fontSize: '15px',
	fontWeight: '500',
	color: '#344357',
	marginBottom: '10px',
};
