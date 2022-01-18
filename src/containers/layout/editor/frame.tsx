import React from 'react';
import { Frame, Panel } from '../../../components';
import Icons from '../../../components/common/general/Icons';
import BackgroundContainer from './sections/background';
// eslint-disable-next-line import/no-named-as-default
import PanelFour from './Containers/PanelFour.subContainer';

type Props = {
  page: any;
};

export default function FrameContainer(props: Props) {
  const { page } = props;
  const [segmentState, setSegmentState] = React.useState<number | undefined>(1);
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
                segmentState={segmentState}
                width="32%"
              />
              <Panel.Segment onClick={() => setSegmentState(1)}>
                <Icons name="alignhorizontalleft" />
              </Panel.Segment>
              <Panel.Divider />
              <Panel.Segment onClick={() => setSegmentState(1.5)}>
                <Icons name="alignhorizontalcenter" />
              </Panel.Segment>
              <Panel.Divider />
              <Panel.Segment onClick={() => setSegmentState(3)}>
                <Icons name="alignhorizontalright" />
              </Panel.Segment>
            </Panel.SegmentsWrapper>
          </Panel.SegmentedControl>
        </Panel.Row>
        <PanelFour />
        <Panel.Row>
          <BackgroundContainer page={page} />
        </Panel.Row>
      </Panel>
    </Frame>
  );
}
