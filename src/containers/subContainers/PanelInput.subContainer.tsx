/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
import * as React from 'react';
import { Panel } from '../../components';
import {
	TickerDownIcon,
	TickerUpIcon,
} from '../../components/editor/edit/icons/icons';

type Props = {
	size?: 'small' | 'medium' | 'large';
	value?: string;
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	label?: string;
};

const PanelInput = (props: Props) => {
	const { size, value, onChange, onSubmit, label } = props;
	return (
		<Panel.InputWrapper>
			<Panel.Form onSubmit={onSubmit}>
				<Panel.Input onChange={onChange} value={value} size={size} />
			</Panel.Form>
			<Panel.NumberTicker>
				<Panel.TickerUp>
					<TickerUpIcon />
				</Panel.TickerUp>
				<Panel.TickerDown>
					<TickerDownIcon />
				</Panel.TickerDown>
			</Panel.NumberTicker>
			<Panel.InputLabel>{label}</Panel.InputLabel>
		</Panel.InputWrapper>
	);
};

export default PanelInput;
