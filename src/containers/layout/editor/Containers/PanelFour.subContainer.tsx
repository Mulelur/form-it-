/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import { Panel } from '../../../../components';
import PanelInput from './PanelInput.subContainer';

type Props = {
  name?: string;
  disableFour?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const PanelFour = (props: Props) => {
  const { name, disableFour, onClick } = props;
  const [segmentState, setSegmentState] = React.useState<{
    state: string | undefined,
    type: string
  }>({
    state: '0',
    type: ''
  });

  // const [] = React.useState('');
  return (
    <>
      <Panel.Row>
        <Panel.TitleWrapper style={{ display: 'flex', alignItems: 'center' }}>
          <Panel.Title>
            <Panel.TitleSpan>{name}</Panel.TitleSpan>
          </Panel.Title>
        </Panel.TitleWrapper>
        <Panel.Row style={{ justifyContent: 'flex-end', marginLeft: '0', paddingLeft: '0' }}>
          <PanelInput
            onSubmit={() => { }}
            onChange={() => { }}
            value="1"
            size="small"
          />
          {name && onClick && <Panel.SegmentedControl style={{ width: '6rem' }}>
            <Panel.SegmentsWrapper>
              <Panel.SegmentedControlSegmentBackground style={{ left: `${segmentState.type === name && segmentState.state}` }} />
              <Panel.Segment onClick={(event) => {
                setSegmentState({
                  state: "0rem",
                  type: name
                });
                onClick(event);
              }}>P</Panel.Segment>
              <Panel.Divider />
              <Panel.Segment onClick={(event) => {
                setSegmentState({
                  state: "3rem",
                  type: name
                });
                onClick(event);
              }}>O</Panel.Segment>
            </Panel.SegmentsWrapper>
          </Panel.SegmentedControl>}
        </Panel.Row>
      </Panel.Row>
      {disableFour && (
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

export default PanelFour;
