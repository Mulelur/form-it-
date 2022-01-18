import * as React from 'react';
import { Frame, Panel } from '../../../components';
import TextAreaSectionContainer from './sections/text';

export default function ContentContainer() {
  return (
    <>
      <Frame>
        <Frame.Header>
          <Frame.Title>
            <Frame.TitleSpan>Content</Frame.TitleSpan>
          </Frame.Title>
        </Frame.Header>
        <Panel>
          <Panel.Row>
            <TextAreaSectionContainer />
          </Panel.Row>
        </Panel>
      </Frame>
    </>
  );
}
