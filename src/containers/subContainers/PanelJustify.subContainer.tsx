/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import { Panel } from '../../components';
import Icons from '../../components/common/general/Icons';
import { useActions } from '../../store';
import PanelInput from './PanelInput.subContainer';

type Props = {
	parentId: string;
};

const PanelJustifyContainer = (props: Props) => {
	const { parentId } = props;
	const [segmentState, setSegmentState] = React.useState<{
		state: string | undefined;
		type: string;
	}>({
		state: '0',
		type: '',
	});

	const { editHTMLElement } = useActions((action) => action.Projects);

	return (
		<>
			<Panel.Row>
				<Panel.TitleWrapper style={{ display: 'flex', alignItems: 'center' }}>
					<Panel.Title>
						<Panel.TitleSpan>Justify Content</Panel.TitleSpan>
					</Panel.Title>
				</Panel.TitleWrapper>
				<Panel.Row
					style={{
						justifyContent: 'flex-end',
						marginLeft: '0',
						paddingLeft: '0',
					}}
				>
					<PanelInput
						onSubmit={() => {}}
						onChange={() => {}}
						value=""
						size="medium"
					/>
				</Panel.Row>
			</Panel.Row>
			<Panel.Row flexDirection="column">
				<Panel.SegmentedControl style={{ width: '100%' }}>
					<Panel.SegmentsWrapper style={{ width: '100%' }}>
						<Panel.SegmentedControlSegmentBackground
							id="justify"
							style={{
								left: `${
									segmentState.type === 'justify' && segmentState.state
								}`,
								width: '19%',
							}}
						/>
						<Panel.Segment
							onClick={() => {
								setSegmentState({
									state: '0',
									type: 'justify',
								});
								editHTMLElement({
									htmlElementId: parentId,
									justify: 'flex-start',
									editType: 'htmlElementJustify',
								});
							}}
						>
							<Icons name="alignhorizontalleft" />
						</Panel.Segment>
						<Panel.Divider />
						<Panel.Segment
							onClick={() => {
								setSegmentState({
									state: '3.7rem',
									type: 'justify',
								});
								editHTMLElement({
									htmlElementId: parentId,
									justify: 'center',
									editType: 'htmlElementJustify',
								});
							}}
						>
							<Icons name="alignhorizontalcenter" />
						</Panel.Segment>
						<Panel.Divider />
						<Panel.Segment
							onClick={() => {
								setSegmentState({
									state: '7.5rem',
									type: 'justify',
								});
								editHTMLElement({
									htmlElementId: parentId,
									justify: 'flex-end',
									editType: 'htmlElementJustify',
								});
							}}
						>
							<Icons name="alignhorizontalright" />
						</Panel.Segment>
						<Panel.Divider />
						<Panel.Segment
							onClick={() =>
								setSegmentState({
									state: '11.3rem',
									type: 'justify',
								})
							}
						>
							<Icons name="block" />
						</Panel.Segment>
						<Panel.Divider />
						<Panel.Segment
							onClick={() =>
								setSegmentState({
									state: '15.3rem',
									type: 'justify',
								})
							}
						>
							<Icons name="stretch" />
						</Panel.Segment>
					</Panel.SegmentsWrapper>
				</Panel.SegmentedControl>
			</Panel.Row>
		</>
	);
};

export default PanelJustifyContainer;
