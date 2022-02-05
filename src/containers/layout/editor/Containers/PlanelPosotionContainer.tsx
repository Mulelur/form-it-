/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import { Panel } from '../../../../components';

const PanelPosotionContainer = () => {
    const [segmentState, setSegmentState] = React.useState<{
        state: string | undefined,
        type: string
    }>({
        state: '0',
        type: ''
    });

    return (
        <>
            <Panel.Row>
                <Panel.TitleWrapper>
                    <Panel.Title>
                        <Panel.TitleSpan>Position</Panel.TitleSpan>
                    </Panel.Title>
                </Panel.TitleWrapper>
                <Panel.SegmentedControl>
                    <Panel.SegmentsWrapper>
                        <Panel.SegmentedControlSegmentBackground style={{ left: `${segmentState.type === 'position' && segmentState.state}`, width: '50%' }} />
                        <Panel.Segment onClick={() => setSegmentState({
                            state: '0rem',
                            type: 'position'
                        })}>Relative</Panel.Segment>
                        <Panel.Divider />
                        <Panel.Segment onClick={() => setSegmentState({
                            state: '6.6rem',
                            type: 'position'
                        })}>Absolute</Panel.Segment>
                    </Panel.SegmentsWrapper>
                </Panel.SegmentedControl>
            </Panel.Row>
            {segmentState.state === '6.6rem' && (
                <Panel.StackRow flexDirection="column">
                    <Panel.Spacer />
                    <Panel.Col>
                        <Panel.InputWrapper>
                            <Panel.Input size="x-small" />
                            <Panel.InputLabel>T</Panel.InputLabel>
                            <Panel.InputDivider />
                            <Panel.Input size="x-small" />
                            <Panel.InputLabel>R</Panel.InputLabel>
                            <Panel.InputDivider />
                            <Panel.Input size="x-small" />
                            <Panel.InputLabel>B</Panel.InputLabel>
                            <Panel.InputDivider />
                            <Panel.Input size="x-small" />
                            <Panel.InputLabel>L</Panel.InputLabel>
                        </Panel.InputWrapper>
                    </Panel.Col>
                </Panel.StackRow>
            )}
        </>
    );
};

export default PanelPosotionContainer;







