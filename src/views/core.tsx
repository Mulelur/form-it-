import React, { useReducer } from 'react';
import lodash from 'lodash-es';
import deepdash from 'deepdash-es';
import { useHistory, useParams } from 'react-router-dom';
import { Core } from '../components';
import { FormItContext } from '../context/FormItContext';
import EditorContainer from '../containers/layout/editor';
import HierarchyBarContainer from '../containers/layout/hierarchyBar';
import WorkAreaContainer from '../containers/layout/workArea';
import HeaderContainer from '../containers/layout/header';
import { ICore } from '../Interface/core.interface';
import { useGlobalState } from '../store';
import Window from '../containers/layout/editor/windows';

const Deep = deepdash(lodash);

type Params = {
  projectId: string;
  pageId: string;
};

export default function CoreContainer() {
  const [toggleDrawer, setToggleDrawer] = React.useState<boolean>(true);

  // eslint-disable-next-line no-console
  console.log(toggleDrawer);

  const initialState: ICore = {
    core: true,
    selectedProject: undefined,
    selectedPage: undefined,
    selectedElement: undefined,
    selectedComponent: undefined
  };

  const history = useHistory();

  function reducer(
    state: ICore = initialState,
    action: { type: string; payload: any }
  ) {
    const oldState = state;
    switch (action.type) {
      case 'selectPage':
        oldState.selectedPage = action.payload;
        return { ...oldState };
      case 'selectElement':
        oldState.selectedElement = action.payload;
        return { ...oldState };
      case 'selectProject':
        oldState.selectedProject = action.payload;
        return { ...oldState };
      case 'selectComponent':
        oldState.selectedComponent = action.payload;
        return { ...oldState };
      default:
        throw new Error('new Error');
    }
  }
  const { projects, changes } = useGlobalState((state) => state.Projects);
  const [state, dispatch] = useReducer(reducer, initialState);

  const [group, setGroup] = React.useState<any>();
  const [project, setProject] = React.useState<any>();
  const [page, setPage] = React.useState<any>();
  const [htmlElement, setHtmlElement] = React.useState<any>();
  const { projectId, pageId } = useParams<Params>();

  const params = new URLSearchParams(window.location.search);

  const groupId = params.get('groupId');
  const htmlElementId = params.get('htmlElementId');

  React.useEffect(() => {
    const myElement = Deep.findDeep(projects, (item) => item === groupId);
    if (myElement) {
      setGroup(myElement?.parent);
    }

    const myProject = Deep.findDeep(projects, (item) => item === projectId);

    if (myProject) {
      setProject(myProject.parent);
    }

    const myPage = Deep.findDeep(projects, (item) => item === pageId);

    if (myPage) {
      setPage(myPage.parent);
    }

    const myHtmlElement = Deep.findDeep(
      projects,
      (item) => item === htmlElementId
    );
    if (myHtmlElement) {
      setHtmlElement(myHtmlElement.parent);
    }

    // eslint-disable-next-line no-console
    console.log(htmlElementId, groupId);
  }, [changes]);

  React.useEffect(() => {
    const myPage: any = Deep.findDeep(projects, (item) => item === pageId);

    const group1 = myPage.parent?.children[0];
    setGroup(group1);
    history.push({
      pathname: `/project/${projectId}/${pageId}`,
      search: Object.keys({ groupId: group1?.id })
        .map((value) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return `${value}=${{ groupId: group1?.id }[value]}`;
        })
        .join('&')
    });
    const html = group1?.children[0];
    setHtmlElement(html);
  }, []);

  return (
    <FormItContext.Provider value={{ state, dispatch }}>
      <Core>
        <HeaderContainer setToggleDrawer={setToggleDrawer} toolbar />
        <Core.Row>
          <HierarchyBarContainer
            group={group}
            htmlElement={htmlElement}
            page={page}
            project={project}
          />
          <WorkAreaContainer />
          <EditorContainer
            page={page}
            element={group}
            htmlElement={htmlElement}
          />
          {/* <InsertContainer /> */}
        </Core.Row>
        <Window />
      </Core>
    </FormItContext.Provider>
  );
}
