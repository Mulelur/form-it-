import React from 'react';
import { Editor } from '../../components';
import FrameContainer from './editor/frame';
import StylesContainer from './editor/styles';
import { useGlobalState } from '../../store';
import ElementContainer from './editor/elements';
import LayOutContainer from './editor/layout';
import ContentContainer from './editor/content';

type Props = {
  element: any;
  htmlElement: any;
  page: any;
};

export default function EditorContainer(props: Props) {
  const { selected } = useGlobalState((state) => state.Projects);
  const { element, htmlElement, page } = props;

  // eslint-disable-next-line consistent-return
  const renderEditorType = () => {
    switch (selected?.type) {
      case 'page':
        return (
          <>
            <FrameContainer page={page} />
            <ElementContainer />
          </>
        );
      case 'project':
        break;
      case 'group':
        return (
          <LayOutContainer element={element} />
        );
      case 'htmlElement':
        return (
          <>
            {/* <LayOutContainer element={element} /> */}
            <StylesContainer htmlElement={htmlElement} />
            <ContentContainer />
          </>
        );
      default:
        break;
    }
  };
  return (
    <Editor>
      {renderEditorType()}
    </Editor>
  );
}
