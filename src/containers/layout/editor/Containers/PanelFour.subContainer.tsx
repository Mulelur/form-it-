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

export const PanelFour = (props: Props) => {
  const { name, onClick, disableFour } = props;
  // const [] = React.useState('');
  return (
    <>
      <Panel.Row>
        <Panel.TitleWrapper>
          <Panel.Title>
            <Panel.TitleSpan>{name}</Panel.TitleSpan>
          </Panel.Title>
        </Panel.TitleWrapper>
        <Panel.Row>
          <PanelInput
            onSubmit={() => {}}
            onChange={() => {}}
            value="1"
            size="small"
          />
          <Panel.SegmentedControl width="6rem">
            <Panel.SegmentsWrapper>
              <Panel.SegmentedControlSegmentBackground />
              <Panel.Segment onClick={onClick}>P</Panel.Segment>
              <Panel.Divider />
              <Panel.Segment onClick={onClick}>O</Panel.Segment>
            </Panel.SegmentsWrapper>
          </Panel.SegmentedControl>
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
