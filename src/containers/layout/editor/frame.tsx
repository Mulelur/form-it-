import React from 'react';
import { Frame, Panel } from '../../../components';
// import Icons from '../../../components/common/general/Icons';
import BackgroundContainer from './sections/background';
// eslint-disable-next-line import/no-named-as-default
import PanelFour from './Containers/PanelFour.subContainer';
import { useActions } from '../../../store';
import PanelJustifyContainer from './Containers/PanelJustifyContainer';
import PanelInput from './Containers/PanelInput.subContainer';
import PanelAlignContainer from './Containers/PanelAlignContainer';
import PanelPosotionContainer from './Containers/PlanelPosotionContainer';

type Props = {
  page: any;
};

export default function FrameContainer(props: Props) {
  const { page } = props;
  // const { editHTMLElement } = useActions((action) => action.Projects);

  const [disableFour, setDisableFour] = React.useState<boolean>(false);
  const [inputHeightChange, setInputHeightChange] = React.useState('');
  const [segmentState, setSegmentState] = React.useState<{
    state: string | undefined;
    type: string;
  }>({
    state: '0',
    type: ''
  });
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
          elementId: page.id,
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
  // const [inputPaddingChange, setInputPaddingChange] = React.useState('');

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   // eslint-disable-next-line no-console
  //   console.log(event);
  // };

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputPaddingChange(event.target.value);
  // };

  return (
    <Frame>
      <Frame.Header>
        <Frame.Title>
          <Frame.TitleSpan>Page</Frame.TitleSpan>
        </Frame.Title>
      </Frame.Header>
      <Panel>
        <Panel.Row>
          <BackgroundContainer page={page} />
        </Panel.Row>
        <Panel.Row>
          <Panel.TitleWrapper>
            <Panel.Title>
              <Panel.TitleSpan>Width</Panel.TitleSpan>
            </Panel.Title>
          </Panel.TitleWrapper>
          <PanelInput
            onChange={(event) => handleInputChange(event, 'width')}
            value={page?.styles?.width}
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
              <Panel.TitleSpan>Heigth</Panel.TitleSpan>
            </Panel.Title>
          </Panel.TitleWrapper>
          <PanelInput
            onChange={(event) => handleInputChange(event, 'width')}
            value={page?.styles?.width}
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
                style={{
                  left: `${segmentState.type === 'flex' && segmentState.state}`
                }}
              />
              <Panel.Segment
                onClick={() => {
                  setSegmentState({
                    state: '0',
                    type: 'flex'
                  });
                  editChild({
                    parentId: page?.id,
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
                  setSegmentState({
                    state: '5.5rem',
                    type: 'flex'
                  });
                  editChild({
                    parentId: page?.id,
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
          parent={page}
          disableFour={disableFour}
          onClick={() => setDisableFour(!disableFour)}
        />
        <PanelAlignContainer elementId={page?.id} />
        <PanelJustifyContainer parentId={page?.id} />
        <PanelPosotionContainer />
      </Panel>
    </Frame>
  );
}
