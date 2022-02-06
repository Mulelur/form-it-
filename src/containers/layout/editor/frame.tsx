import React from 'react';
import { Frame, Panel } from '../../../components';
import Icons from '../../../components/common/general/Icons';
import BackgroundContainer from './sections/background';
// eslint-disable-next-line import/no-named-as-default
import PanelFour from './Containers/PanelFour.subContainer';
import { useActions } from '../../../store';
import PanelJustifyContainer from './Containers/PanelJustifyContainer';

type Props = {
  page: any;
};

export default function FrameContainer(props: Props) {
  const { page } = props;
  const [segmentState, setSegmentState] = React.useState<{
    state: string | undefined,
    type: string
  }>({
    state: '0',
    type: ''
  });

  const { editHTMLElement } = useActions((action) => action.Projects);
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
          <Panel.TitleWrapper>
            <Panel.Title>
              <Panel.TitleSpan>Align</Panel.TitleSpan>
            </Panel.Title>
          </Panel.TitleWrapper>
          <Panel.SegmentedControl>
            <Panel.SegmentsWrapper>
              <Panel.SegmentedControlSegmentBackground
                id="align"
                style={{ left: `${segmentState.type === 'align' && segmentState.state}`, width: '32%' }}
              />
              <Panel.Segment onClick={() => {
                setSegmentState({
                  state: '0',
                  type: 'align'
                });
                editHTMLElement({
                  htmlElementId: page?.id,
                  align: 'flex-start',
                  editType: 'htmlElementAlign'
                });
              }}>
                <Icons name="alignhorizontalleft" />
              </Panel.Segment>
              <Panel.Divider />
              <Panel.Segment onClick={() => setSegmentState({
                state: '4.5rem',
                type: 'align'
              })}>
                <Icons name="alignhorizontalcenter" />
              </Panel.Segment>
              <Panel.Divider />
              <Panel.Segment onClick={() => setSegmentState({
                state: '9rem',
                type: 'align'
              })}>
                <Icons name="alignhorizontalright" />
              </Panel.Segment>
            </Panel.SegmentsWrapper>
          </Panel.SegmentedControl>
        </Panel.Row>
        <PanelFour parent={page} name='Margin' onClick={() => { }} />
        <Panel.Row>
          <BackgroundContainer page={page} />
        </Panel.Row>
        <PanelJustifyContainer parentId={page?.id} />
      </Panel>
    </Frame>
  );
}
