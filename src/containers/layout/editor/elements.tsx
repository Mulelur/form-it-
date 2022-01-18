import React from 'react';
import { useParams } from 'react-router-dom';
import { Element, Panel } from '../../../components';
import { Groups } from '../../../fixtures/groups';
import { useActions } from '../../../store';

type Params = {
  projectId: string;
  pageId: string;
};

export default function ElementContainer() {
  const { addChild } = useActions((action) => action.Projects);

  const { pageId } = useParams<Params>();

  return (
    <Element>
      <Element.Header>
        <Element.Title>
          <Element.TitleSpan>Elements</Element.TitleSpan>
        </Element.Title>
      </Element.Header>
      <Panel>
        <Panel.Grid>
          {Groups.map((item) => {
            return (
              <>
                <Panel.ElementButtons
                  onClick={() =>
                    addChild({
                      parentId: pageId,
                      child: item,
                      type: 'group'
                    })
                  }
                >
                  {item.module}
                </Panel.ElementButtons>
              </>
            );
          })}
        </Panel.Grid>
      </Panel>
    </Element>
  );
}
