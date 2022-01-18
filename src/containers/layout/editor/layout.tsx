import * as React from 'react';

import { Layout, Panel } from '../../../components';
import 'rc-slider/assets/index.css';
import GroupContainer from './sections/group';
import PanelInput from './Containers/PanelInput.subContainer';
import { useActions } from '../../../store';
// eslint-disable-next-line import/no-named-as-default
import PanelFour from './Containers/PanelFour.subContainer';

type Props = {
  element: any;
};

export default function LayoutContainer(props: Props) {
  const [disableFour, setDisableFour] = React.useState<boolean>(false);
  const { element } = props;
  const [inputHeightChange, setInputHeightChange] = React.useState('');
  const [segmentState, setSegmentState] = React.useState<number | undefined>(1);
  const { editElement, editChild } = useActions((action) => action.Projects);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    switch (type) {
      case 'width':
        editElement({
          editType: 'elementWidth',
          elementId: element.id,
          width: event.target.value
        });
        break;
      case 'height':
        setInputHeightChange(event.target.value);
        break;
      default:
        break;
    }
  };

  return element ? (
    <Layout>
      <Layout.Header>
        <Layout.Title>
          <Layout.TitleSpan>Layout</Layout.TitleSpan>
        </Layout.Title>
      </Layout.Header>
      <Panel>
        <Panel.Row>
          <GroupContainer
            display={element?.styles?.display}
            justifyContent={element?.styles?.justifyContent}
            alignItems={element?.styles?.alignItems}
          />
        </Panel.Row>
        <Panel.Row>
          <Panel.TitleWrapper>
            <Panel.Title>
              <Panel.TitleSpan>Width/Heigth</Panel.TitleSpan>
            </Panel.Title>
          </Panel.TitleWrapper>
          <PanelInput
            onChange={(event) => handleInputChange(event, 'width')}
            value={element?.styles?.width}
            size="small"
            label="W"
          />
          <PanelInput
            onSubmit={(event) => handleSubmit(event)}
            onChange={(event) => handleInputChange(event, 'height')}
            value={inputHeightChange}
            size="small"
            label="H"
          />
        </Panel.Row>
        <Panel.Row>
          <Panel.TitleWrapper>
            <Panel.Title>
              <Panel.TitleSpan>flexDirection</Panel.TitleSpan>
            </Panel.Title>
          </Panel.TitleWrapper>
          <Panel.SegmentedControl width="10rem">
            <Panel.SegmentsWrapper>
              <Panel.SegmentedControlSegmentBackground
                segmentState={segmentState}
              />
              <Panel.Segment
                onClick={() => {
                  setSegmentState(1);
                  editChild({
                    parentId: element?.id,
                    value: 'row',
                    type: 'styles'
                  });
                }}
              >
                row
              </Panel.Segment>
              <Panel.Divider />
              <Panel.Segment
                onClick={() => {
                  setSegmentState(1.5);
                  editChild({
                    parentId: element?.id,
                    value: 'column',
                    type: 'styles'
                  });
                }}
              >
                col
              </Panel.Segment>
            </Panel.SegmentsWrapper>
          </Panel.SegmentedControl>
        </Panel.Row>
        <PanelFour
          name="Margin"
          disableFour={disableFour}
          onClick={() => setDisableFour(!disableFour)}
        />
      </Panel>
    </Layout>
  ) : (
    <></>
  );
}
