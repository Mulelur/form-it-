/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import { Panel } from '../../../../components';
import { Page, HTMLElement, Group } from '../../../../Interface/project.interface';
import { useActions } from '../../../../store';
import PanelInput from './PanelInput.subContainer';

type Props = {
  name?: string;
  parent: Page | HTMLElement | Group;
  disableFour?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const PanelFour = (props: Props) => {
  const { name, disableFour, onClick, parent } = props;
  const [segmentState, setSegmentState] = React.useState<{
    state: string | undefined,
    type: string
  }>({
    state: '0',
    type: ''
  });

  const { editHTMLElement } = useActions((action) => action.Projects);


  let fourType;

  switch (name?.toLowerCase()) {
    case 'margin':
      fourType = parent?.styles?.margin?.split(' ');
      break;
    case 'padding':
      fourType = parent?.styles?.padding?.split(' ');
      break;
    default:
      break;
  }

  const Top = fourType ? fourType[0] : 0;
  const Rigth = fourType ? fourType[1] : 0;
  const Bottom = fourType ? fourType[2] : 0;
  const left = fourType ? fourType[3] : 0;

  const topHandelChange = (event: React.ChangeEvent<HTMLInputElement>, type: string | undefined) => {
    if (type) {
      switch (type.toLowerCase()) {
        case 'margin':
          editHTMLElement({
            htmlElementId: parent.id,
            margin: `${event.target.value} ${Rigth} ${Bottom} ${left}`,
            editType: 'htmlElementMargin'
          });
          break;
        case 'padding':
          editHTMLElement({
            htmlElementId: parent.id,
            pagging: `${event.target.value} ${Rigth} ${Bottom} ${left}`,
            editType: 'htmlElementPadding'
          });
          break;
        default:
          break;
      }
    };
  };

  const rgithHandelChange = (event: React.ChangeEvent<HTMLInputElement>, type: string | undefined) => {
    if (type) {
      switch (type.toLowerCase()) {
        case 'margin':
          editHTMLElement({
            htmlElementId: parent.id,
            margin: `${Top} ${event.target.value} ${Bottom} ${left}`,
            editType: 'htmlElementMargin'
          });
          break;
        default:
          break;
      }
    };
  };

  const bottomHandelChange = (event: React.ChangeEvent<HTMLInputElement>, type: string | undefined) => {
    if (type) {
      switch (type.toLowerCase()) {
        case 'margin':
          editHTMLElement({
            htmlElementId: parent.id,
            margin: `${Top} ${Rigth} ${event.target.value} ${left}`,
            editType: 'htmlElementMargin'
          });
          break;
        default:
          break;
      }
    };
  };

  const leftHandelChange = (event: React.ChangeEvent<HTMLInputElement>, type: string | undefined) => {
    if (type) {
      switch (type.toLowerCase()) {
        case 'margin':
          editHTMLElement({
            htmlElementId: parent.id,
            margin: `${Top} ${Rigth} ${Bottom} ${event.target.value}`,
            editType: 'htmlElementMargin'
          });
          break;
        default:
          break;
      }
    };
  };


  return (
    <>
      <Panel.Row>
        <Panel.TitleWrapper style={{ display: 'flex', alignItems: 'center' }}>
          <Panel.Title>
            <Panel.TitleSpan>{name}</Panel.TitleSpan>
          </Panel.Title>
        </Panel.TitleWrapper>
        <Panel.Row style={{ justifyContent: 'flex-end', left: '0', paddingLeft: '0' }}>
          <PanelInput
            onSubmit={() => { }}
            onChange={() => { }}
            value="1"
            size="small"
          />
          {name && onClick && <Panel.SegmentedControl style={{ width: '6rem' }}>
            <Panel.SegmentsWrapper>
              <Panel.SegmentedControlSegmentBackground style={{ left: `${segmentState.type === name && segmentState.state}` }} />
              <Panel.Segment onClick={() => {
                setSegmentState({
                  state: "0rem",
                  type: name
                });
                // onClick(event);
              }}>P</Panel.Segment>
              <Panel.Divider />
              <Panel.Segment onClick={() => {
                setSegmentState({
                  state: "3rem",
                  type: name
                });
                // onClick(event);
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
              <Panel.Input onChange={(event) => topHandelChange(event, name)} size="x-small" value={Top} />
              <Panel.InputLabel>T</Panel.InputLabel>
              <Panel.InputDivider />
              <Panel.Input onChange={(event) => rgithHandelChange(event, name)} size="x-small" value={Rigth} />
              <Panel.InputLabel>R</Panel.InputLabel>
              <Panel.InputDivider />
              <Panel.Input onChange={(event) => bottomHandelChange(event, name)} size="x-small" value={Bottom} />
              <Panel.InputLabel>B</Panel.InputLabel>
              <Panel.InputDivider />
              <Panel.Input onChange={(event) => leftHandelChange(event, name)} size="x-small" value={left} />
              <Panel.InputLabel>L</Panel.InputLabel>
            </Panel.InputWrapper>
          </Panel.Col>
        </Panel.StackRow>
      )}
    </>
  );
};

export default PanelFour;
