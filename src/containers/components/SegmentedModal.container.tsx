import * as React from 'react';
import { Panel } from '../../components';
import SegmentedModal from '../../components/common/modals/SegmentedModal';

type Props = {
	children: React.ReactNode;
};

export default function SegmentedModalContainer(props: Props) {
	const [segmentState, setSegmentState] = React.useState<{
		state: string | undefined;
		type: string;
	}>({
		state: '0',
		type: '',
	});
	const { children } = props;
	return (
		<>
			<SegmentedModal>
				<SegmentedModal.Header>
					<Panel>
						<Panel.Row>
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
										Relative
									</Panel.Segment>
									<Panel.Divider />
									<Panel.Segment
										onClick={() =>
											setSegmentState({
												state: '6.6rem',
												type: 'position',
											})
										}
									>
										Absolute
									</Panel.Segment>
								</Panel.SegmentsWrapper>
							</Panel.SegmentedControl>
						</Panel.Row>
					</Panel>
				</SegmentedModal.Header>
				<SegmentedModal.Body>{children}</SegmentedModal.Body>
			</SegmentedModal>
		</>
	);
}
