/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import { Panel } from '../../../../components';
import Icons from '../../../../components/common/general/Icons';
import { useActions } from '../../../../store';
import PanelInput from './PanelInput.subContainer';

type Props = {
    elementId: string;
};


const PanelAlignContainer = (props: Props) => {
    const { elementId } = props;
    const [segmentState, setSegmentState] = React.useState<{
        state: string | undefined,
        type: string
    }>({
        state: '0',
        type: ''
    });

    const { editHTMLElement } = useActions((action) => action.Projects);

    return (
        <>
            <Panel.Row>
                <Panel.TitleWrapper style={{ display: 'flex', alignItems: 'center' }}>
                    <Panel.Title>
                        <Panel.TitleSpan>Align Items</Panel.TitleSpan>
                    </Panel.Title>
                </Panel.TitleWrapper>
                <Panel.Row style={{ justifyContent: 'flex-end', marginLeft: '0', paddingLeft: '0' }}>
                    <PanelInput
                        onSubmit={() => { }}
                        onChange={() => { }}
                        value=""
                        size='medium'
                    />
                </Panel.Row>
            </Panel.Row>
            <Panel.Row flexDirection="column">
                <Panel.SegmentedControl style={{ width: '100%' }} >
                    <Panel.SegmentsWrapper style={{ width: '100%' }}>
                        <Panel.SegmentedControlSegmentBackground
                            id="align"
                            style={{ left: `${segmentState.type === 'align' && segmentState.state}`, width: '19%' }}
                        />
                        <Panel.Segment onClick={() => {
                            setSegmentState({
                                state: '0',
                                type: 'align'
                            });
                            editHTMLElement({
                                htmlElementId: elementId,
                                align: 'flex-start',
                                editType: 'htmlElementAlign'
                            });
                        }}>
                            <Icons name="alignhorizontalleft" />
                        </Panel.Segment>
                        <Panel.Divider />
                        <Panel.Segment onClick={() => {
                            setSegmentState({
                                state: '3.7rem',
                                type: 'align'
                            });
                            editHTMLElement({
                                htmlElementId: elementId,
                                align: 'center',
                                editType: 'htmlElementAlign'
                            });
                        }}>
                            <Icons name="alignhorizontalcenter" />
                        </Panel.Segment>
                        <Panel.Divider />
                        <Panel.Segment onClick={() => {
                            setSegmentState({
                                state: '7.5rem',
                                type: 'align'
                            });
                            editHTMLElement({
                                htmlElementId: elementId,
                                align: 'flex-end',
                                editType: 'htmlElementAlign'
                            });
                        }}>
                            <Icons name="alignhorizontalright" />
                        </Panel.Segment>
                        <Panel.Divider />
                        <Panel.Segment onClick={() => setSegmentState({
                            state: '11.3rem',
                            type: 'align'
                        })}>
                            <Icons name="block" />
                        </Panel.Segment>
                        <Panel.Divider />
                        <Panel.Segment onClick={() => setSegmentState({
                            state: '15.3rem',
                            type: 'align'
                        })}>
                            <Icons name="stretch" />
                        </Panel.Segment>

                    </Panel.SegmentsWrapper>
                </Panel.SegmentedControl>
            </Panel.Row>
        </>
    );
};

export default PanelAlignContainer;
