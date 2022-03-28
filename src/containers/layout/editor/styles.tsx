import React from 'react';
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import Slider from 'rc-slider/lib/Slider';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SketchPicker } from 'react-color';
import { Panel, Styles } from '../../../components';
import Icons from '../../../components/common/general/Icons';
import {
	TickerDownIcon,
	TickerUpIcon,
} from '../../../components/editor/edit/icons/icons';
import { useActions, useGlobalState } from '../../../store';
import PanelInput from '../../subContainers/PanelInput.subContainer';
import PanelFour from '../../subContainers/PanelFour.subContainer';

type Props = {
	htmlElement: any;
};

export default function StylesContainer(props: Props) {
	const { htmlElement } = props;
	const { editHTMLElement } = useActions((action) => action.Projects);
	const { setCurrentStack } = useActions((action) => action.Windows);
	const { isOpen } = useGlobalState((state) => state.Windows);
	const [segmentState, setSegmentState] = React.useState<{
		state: string | undefined;
		type: string;
	}>({
		state: '0',
		type: '',
	});

	// eslint-disable-next-line unicorn/no-null
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		// eslint-disable-next-line unicorn/no-null
		setAnchorEl(null);
	};

	// eslint-disable-next-line no-console
	console.log(htmlElement);

	const StyledMenu = styled((menuProps: MenuProps) => (
		<Menu
			elevation={3}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...menuProps}
		/>
	))(() => ({
		'& .MuiMenu-list': {
			padding: '0',
		},
	}));

	return (
		<>
			{htmlElement ? (
				<Styles>
					<Styles.Header>
						<Styles.Title>
							<Styles.TitleSpan>Styles</Styles.TitleSpan>
						</Styles.Title>
					</Styles.Header>
					<Panel>
						<Panel.Row>
							<Panel.TitleWrapper>
								<Panel.Title>
									<Panel.TitleSpan>Display</Panel.TitleSpan>
								</Panel.Title>
							</Panel.TitleWrapper>
							<Panel.SegmentedControl>
								<Panel.SegmentsWrapper>
									<Panel.SegmentedControlSegmentBackground
										style={{
											left: `${
												segmentState.type === 'display' && segmentState.state
											}`,
										}}
									/>
									<Panel.Segment
										onClick={() =>
											setSegmentState({
												state: '0',
												type: 'display',
											})
										}
									>
										<Panel.TitleWrapper>True </Panel.TitleWrapper>
									</Panel.Segment>
									<Panel.Divider />
									<Panel.Segment
										onClick={() =>
											setSegmentState({
												state: '6.8rem',
												type: 'display',
											})
										}
									>
										<Panel.TitleWrapper>False</Panel.TitleWrapper>
									</Panel.Segment>
								</Panel.SegmentsWrapper>
							</Panel.SegmentedControl>
						</Panel.Row>
						{htmlElement?.style?.width && (
							<Panel.Row>
								<Panel.TitleWrapper>
									<Panel.Title>
										<Panel.TitleSpan>Width</Panel.TitleSpan>
									</Panel.Title>
								</Panel.TitleWrapper>
								<Panel.InputWrapper>
									<Panel.Form>
										<Panel.Input />
									</Panel.Form>
									<Panel.NumberTicker>
										<Panel.TickerUp>
											<TickerUpIcon />
										</Panel.TickerUp>
										<Panel.TickerDown>
											<TickerDownIcon />
										</Panel.TickerDown>
									</Panel.NumberTicker>
									<Panel.InputLabel>PX</Panel.InputLabel>
								</Panel.InputWrapper>
							</Panel.Row>
						)}
						{htmlElement?.style?.height && (
							<Panel.Row>
								<Panel.TitleWrapper>
									<Panel.Title>
										<Panel.TitleSpan>Height</Panel.TitleSpan>
									</Panel.Title>
								</Panel.TitleWrapper>
								<Panel.InputWrapper>
									<Panel.Form>
										<Panel.Input />
									</Panel.Form>
									<Panel.NumberTicker>
										<Panel.TickerUp>
											<TickerUpIcon />
										</Panel.TickerUp>
										<Panel.TickerDown>
											<TickerDownIcon />
										</Panel.TickerDown>
									</Panel.NumberTicker>
									<Panel.InputLabel>PX</Panel.InputLabel>
								</Panel.InputWrapper>
							</Panel.Row>
						)}
						<Panel.Row>
							<Panel.TitleWrapper>
								<Panel.Title>
									<Panel.TitleSpan>Color</Panel.TitleSpan>
								</Panel.Title>
							</Panel.TitleWrapper>
							<Panel.Button
								onClick={(event: React.MouseEvent<HTMLElement>) => {
									handleClick(event);
								}}
							>
								<Panel.IconWrapper>
									<Panel.BoxColor>
										<Panel.Color color={htmlElement?.styles?.color} />
									</Panel.BoxColor>
								</Panel.IconWrapper>
								<Panel.TitleWrapper>
									{htmlElement?.styles?.color}
								</Panel.TitleWrapper>
								<Panel.CloseWrapper>
									<Icons name="clear" style={{ width: '14' }} />
								</Panel.CloseWrapper>
							</Panel.Button>
						</Panel.Row>
						{htmlElement?.styles?.filter && (
							<Panel.Row>
								<Panel.TitleWrapper>
									<Panel.Title>
										<Panel.TitleSpan>Filter</Panel.TitleSpan>
									</Panel.Title>
								</Panel.TitleWrapper>
								<Panel.Button
									onClick={(event: React.MouseEvent<HTMLElement>) => {
										handleClick(event);
									}}
								>
									<Panel.IconWrapper>
										<Panel.BoxColor>
											<Panel.Filter filter={htmlElement?.styles?.filter} />
										</Panel.BoxColor>
									</Panel.IconWrapper>
									<Panel.TitleWrapper>
										{htmlElement?.styles?.color}
									</Panel.TitleWrapper>
									<Panel.CloseWrapper>
										<Icons name="clear" style={{ width: '14' }} />
									</Panel.CloseWrapper>
								</Panel.Button>
							</Panel.Row>
						)}
						{htmlElement?.style?.backgroundColor && (
							<Panel.Row>
								<Panel.TitleWrapper>
									<Panel.Title>
										<Panel.TitleSpan>Bg Color</Panel.TitleSpan>
									</Panel.Title>
								</Panel.TitleWrapper>
								<Panel.Button>
									<Panel.IconWrapper>
										<Panel.BoxColor>
											<Panel.Color />
										</Panel.BoxColor>
									</Panel.IconWrapper>
									<Panel.TitleWrapper>
										{htmlElement?.styles?.bgColor ||
											htmlElement?.styles?.backgroundColor}
									</Panel.TitleWrapper>
									<Panel.CloseWrapper>
										<Icons name="clear" style={{ width: '14' }} />
									</Panel.CloseWrapper>
								</Panel.Button>
							</Panel.Row>
						)}
						<Panel.Row>
							<Panel.TitleWrapper>
								<Panel.Title>
									<Panel.TitleSpan>Text Shadow</Panel.TitleSpan>
								</Panel.Title>
							</Panel.TitleWrapper>
							<Panel.Button>
								<Panel.IconWrapper>
									<Panel.BoxColor>
										<Panel.Color />
									</Panel.BoxColor>
								</Panel.IconWrapper>
								<Panel.TitleWrapper>
									{htmlElement?.styles?.bgColor ||
										htmlElement?.styles?.backgroundColor}
								</Panel.TitleWrapper>
								<Panel.CloseWrapper>
									<Icons name="clear" style={{ width: '14' }} />
								</Panel.CloseWrapper>
							</Panel.Button>
							<Panel.Spacer />
							<Panel.Button>
								<Panel.IconWrapper>
									<Panel.BoxColor>
										<Panel.Color />
									</Panel.BoxColor>
								</Panel.IconWrapper>
								<Panel.TitleWrapper>
									{htmlElement?.styles?.bgColor ||
										htmlElement?.styles?.backgroundColor}
								</Panel.TitleWrapper>
								<Panel.CloseWrapper>
									<Icons name="clear" style={{ width: '14' }} />
								</Panel.CloseWrapper>
							</Panel.Button>
						</Panel.Row>
						<Panel.Row>
							<Panel.TitleWrapper>
								<Panel.Title>
									<Panel.TitleSpan>Font</Panel.TitleSpan>
								</Panel.Title>
							</Panel.TitleWrapper>
							<Panel.Button
								onClick={(event) => {
									setCurrentStack({
										stack: 'fonts',
										extraData: isOpen,
										anchorEl: event.currentTarget,
									});
								}}
							>
								<Panel.TitleWrapper>
									{htmlElement?.styles?.fontFamily ||
										htmlElement?.styles?.fontFamily}
								</Panel.TitleWrapper>
								<Panel.CloseWrapper>
									<Icons name="clear" style={{ width: '14' }} />
								</Panel.CloseWrapper>
							</Panel.Button>
						</Panel.Row>
						{htmlElement?.styles?.borderRadius && (
							<Panel.Row>
								<Panel.TitleWrapper>
									<Panel.Title>
										<Panel.TitleSpan>B-Radius</Panel.TitleSpan>
									</Panel.Title>
								</Panel.TitleWrapper>
								<PanelInput size="small" />
								<Panel.SegmentedControl>
									<Panel.SegmentsWrapper>
										<Panel.SegmentedControlSegmentBackground />
										<Panel.Segment>
											<svg width="10" height="10" fill="none">
												<path
													fill="currentColor"
													fillRule="evenodd"
													clipRule="evenodd"
													d="M2.5 1.5a1 1 0 00-1 1v5c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1h-5zm0-1.5A2.5 2.5 0 000 2.5v5C0 8.9 1.1 10 2.5 10h5C8.9 10 10 8.9 10 7.5v-5C10 1.1 8.9 0 7.5 0h-5z"
												/>
											</svg>
										</Panel.Segment>
										<Panel.Divider />
										<Panel.Segment>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="10"
												height="10"
											>
												<path
													d="M 2.5 0 C 1.119 0 0 1.119 0 2.5 L 0 4 L 1.5 4 L 1.5 2.5 C 1.5 1.948 1.948 1.5 2.5 1.5 L 4 1.5 L 4 0 Z"
													fill="currentcolor"
													opacity="1"
												/>
												<path
													d="M 10 2.5 C 10 1.119 8.881 0 7.5 0 L 6 0 L 6 1.5 L 7.5 1.5 C 8.052 1.5 8.5 1.948 8.5 2.5 L 8.5 4 L 10 4 Z"
													fill="currentcolor"
													opacity="1"
												/>
												<path
													d="M 7.5 10 C 8.881 10 10 8.881 10 7.5 L 10 6 L 8.5 6 L 8.5 7.5 C 8.5 8.052 8.052 8.5 7.5 8.5 L 6 8.5 L 6 10 Z"
													fill="currentcolor"
													opacity="1"
												/>
												<path
													d="M 0 7.5 C 0 8.881 1.119 10 2.5 10 L 4 10 L 4 8.5 L 2.5 8.5 C 1.948 8.5 1.5 8.052 1.5 7.5 L 1.5 6 L 0 6 Z"
													fill="currentcolor"
													opacity="1"
												/>
											</svg>
										</Panel.Segment>
									</Panel.SegmentsWrapper>
								</Panel.SegmentedControl>
							</Panel.Row>
						)}
						<Panel.Row>
							<Panel.TitleWrapper>
								<Panel.Title>
									<Panel.TitleSpan>Content</Panel.TitleSpan>
								</Panel.Title>
							</Panel.TitleWrapper>
							<Panel.InputWrapper>
								<Panel.TextInput
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
										editHTMLElement({
											htmlElementId: htmlElement?.id,
											editType: 'htmlElementValue',
											value: event.target.value,
										});
									}}
									value={htmlElement?.value}
								/>
							</Panel.InputWrapper>
						</Panel.Row>
						<Panel.Row>
							<Panel.TitleWrapper>
								<Panel.Title>
									<Panel.TitleSpan>Size</Panel.TitleSpan>
								</Panel.Title>
							</Panel.TitleWrapper>
							<Panel.Row style={{ justifyContent: 'center' }}>
								<PanelInput
									onChange={(event) => {
										editHTMLElement({
											htmlElementId: htmlElement?.id,
											size: event.target.value,
											editType: 'htmlElementSize',
										});
									}}
									value={htmlElement?.styles?.fontSize}
									size="small"
								/>
								<Panel.SliderWarper>
									<Slider
										value={htmlElement?.styles?.size}
										onChange={(value) => {
											editHTMLElement({
												htmlElementId: htmlElement?.id,
												size: value,
												editType: 'htmlElementSize',
											});
										}}
										// onAfterChange={this.onAfterChange}
									/>
								</Panel.SliderWarper>
							</Panel.Row>
						</Panel.Row>
						<Panel.Row>
							<Panel.TitleWrapper>
								<Panel.Title>
									<Panel.TitleSpan>Align</Panel.TitleSpan>
								</Panel.Title>
							</Panel.TitleWrapper>
							<Panel.SegmentedControl>
								<Panel.SegmentsWrapper>
									<Panel.SegmentedControlSegmentBackground
										id="align"
										style={{
											left: `${
												segmentState.type === 'align' && segmentState.state
											}`,
											width: '32%',
										}}
									/>
									<Panel.Segment
										onClick={() =>
											setSegmentState({
												state: '0',
												type: 'align',
											})
										}
									>
										<Icons name="alignhorizontalleft" />
									</Panel.Segment>
									<Panel.Divider />
									<Panel.Segment
										onClick={() =>
											setSegmentState({
												state: '4.5rem',
												type: 'align',
											})
										}
									>
										<Icons name="alignhorizontalcenter" />
									</Panel.Segment>
									<Panel.Divider />
									<Panel.Segment
										onClick={() =>
											setSegmentState({
												state: '9rem',
												type: 'align',
											})
										}
									>
										<Icons name="alignhorizontalright" />
									</Panel.Segment>
								</Panel.SegmentsWrapper>
							</Panel.SegmentedControl>
						</Panel.Row>
						<Panel.Row>
							<Panel.TitleWrapper>
								<Panel.Title>
									<Panel.TitleSpan>Position</Panel.TitleSpan>
								</Panel.Title>
							</Panel.TitleWrapper>
							<Panel.SegmentedControl>
								<Panel.SegmentsWrapper>
									<Panel.SegmentedControlSegmentBackground
										style={{
											left: `${
												segmentState.type === 'position' && segmentState.state
											}`,
											width: '50%',
										}}
									/>
									<Panel.Segment
										onClick={() =>
											setSegmentState({
												state: '0rem',
												type: 'position',
											})
										}
									>
										Absolute
									</Panel.Segment>
									<Panel.Divider />
									<Panel.Segment
										onClick={() =>
											setSegmentState({
												state: '6.8rem',
												type: 'position',
											})
										}
									>
										Relative
									</Panel.Segment>
								</Panel.SegmentsWrapper>
							</Panel.SegmentedControl>
						</Panel.Row>
						<PanelFour parent={htmlElement} name="Padding" onClick={() => {}} />
					</Panel>
					<StyledMenu
						id="demo-customized-menu"
						MenuListProps={{
							'aria-labelledby': 'demo-customized-button',
						}}
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
					>
						<div
							onKeyDown={() => {}}
							role="button"
							tabIndex={0}
							onClick={() => {
								handleClose();
							}}
						>
							<SketchPicker
								color={htmlElement?.styles?.color}
								onChangeComplete={(color) =>
									editHTMLElement({
										htmlElementId: htmlElement?.id,
										color,
										editType: 'htmlElementColor',
									})
								}
								className="override"
							/>
						</div>
					</StyledMenu>
				</Styles>
			) : (
				<div />
			)}
			;
		</>
	);
}
