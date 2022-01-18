import React from 'react';
import { HierarchyBar } from '../../components';
import LayersContainer from './hierarchyBar/layers';
import PagesContainer from './hierarchyBar/pages';

type Props = {
  project: any;
  page: any;
  htmlElement: any;
  group: any;
};

export default function HierarchyBarContainer(props: Props) {
  const { project, page, htmlElement, group } = props;
  return (
    <HierarchyBar>
      <HierarchyBar.Flex>
        <HierarchyBar.Body>
          <PagesContainer project={project} />
          <LayersContainer
            group={group}
            htmlElement={htmlElement}
            page={page}
          />
        </HierarchyBar.Body>
        <HierarchyBar.Handel>==</HierarchyBar.Handel>
      </HierarchyBar.Flex>
    </HierarchyBar>
  );
}
