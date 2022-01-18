/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
import React from 'react';
import { PopoverProps } from '@mui/material';
import { Insert, Panel } from '../../components';
import { TextStyleGroup } from '../../fixtures/TextStylesGroups';
import { InputStyleGroup } from '../../fixtures/InputStylesGroup';

type Props = {
  open?: boolean;
  onClose?: PopoverProps['onClose'];
};

export default function InsertContainer(props: Props) {
  const [segmentState, setSegmentState] = React.useState<number | undefined>(1);
  const { open, onClose } = props;
  const inserts = ['text', 'input', 'button'];

  // eslint-disable-next-line consistent-return
  const renderInserts = (type: string) => {
    switch (type) {
      case 'text':
        return (
          <>
            {TextStyleGroup.map((group) => {
              return (
                <Insert.FieldsItem style={group.styles} key={group.id}>
                  {group.children.map((item) => {
                    return (
                      <>
                        <p style={item.styles}>{item.module}</p>
                      </>
                    );
                  })}
                </Insert.FieldsItem>
              );
            })}
          </>
        );
      case 'input':
        return (
          <>
            {InputStyleGroup.map((group) => {
              return (
                <Insert.FieldsItem style={group.styles} key={group.id}>
                  {group.children.map((item) => {
                    return (
                      <>
                        <p style={item.styles}>{item.module}</p>
                      </>
                    );
                  })}
                </Insert.FieldsItem>
              );
            })}
          </>
        );
      default:
        break;
    }
  };
  return (
    <Insert open={open} onClose={onClose}>
      <Insert.Header>
        <Panel>
          <Panel.Row>
            <Panel.SegmentedControl>
              <Panel.SegmentsWrapper>
                <Panel.SegmentedControlSegmentBackground
                  segmentState={segmentState}
                  width="32%"
                />
                <Panel.Segment onClick={() => setSegmentState(1)}>
                  Text
                </Panel.Segment>
                <Panel.Divider />
                <Panel.Segment onClick={() => setSegmentState(2)}>
                  Input
                </Panel.Segment>
                <Panel.Divider />
                <Panel.Segment onClick={() => setSegmentState(3)}>
                  Button
                </Panel.Segment>
              </Panel.SegmentsWrapper>
            </Panel.SegmentedControl>
          </Panel.Row>
        </Panel>
      </Insert.Header>
      <Insert.Body>
        {/* <Insert.Title>Text</Insert.Title> */}
        {inserts.map((i) => {
          return (
            <>
              <Insert.Fields>{renderInserts(i)}</Insert.Fields>
            </>
          );
        })}
      </Insert.Body>
      {/* <Insert.Footer>
        <InsertButtonContainer selected={selected} />
      </Insert.Footer> */}
    </Insert>
  );
}
