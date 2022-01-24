import { Action, action } from 'easy-peasy';
import moment from 'moment';
import lodash from 'lodash-es';
import deepdash from 'deepdash-es';
import { v4 as uuidv4 } from 'uuid';
import {
  defaultGroup,
  defaultPage,
  defaultPageStyles
} from '../Defaults/project.default';
import { Page, Component, HTMLElement } from '../Interface/project.interface';

const Deep = deepdash(lodash);

type Data = {
  id: string;
  module: string;
  children: Element[] | Component[];
};

type OrderChild = {
  parentId?: string;
  child: any;
  type?: string;
};

type AddChild = {
  parentId?: string;
  child: any;
  type?: string;
};

type EditChild = {
  parentId?: string;
  value: any;
  type?: string;
};

export type MyProject = {
  id?: string;
  projectName: string;
  pages: Page[];
  data?: Data;
  createdAt?: string;
  author: string;
  setting?: string;
  category?: string;
  thumbnail: string;
  published?: boolean;
  viewed: string;
  edited: string;
};

type Select =
  | {
      type: string;
      item: MyProject;
    }
  | {
      type: string;
      item: Element;
    }
  | {
      type: string;
      item: Page;
    }
  | {
      type: string;
      item: Component;
    }
  | {
      type: string;
      item: HTMLElement;
    };

export type RenamePayload = {
  projectId: string;
  pageId: string;
  elementId?: string;
  newName?: string;
};

export interface Project {
  projects: MyProject[];
  selected?: Select;
  project?: MyProject;
  addProject: Action<Project, MyProject>;
  addPage: Action<Project, string>;
  addHtmlElement: Action<
    Project,
    {
      projectId: string;
      htmlElement: HTMLElement;
    }
  >;
  editElement: Action<Project, any>;
  editHTMLElement: Action<Project, any>;
  editChild: Action<Project, EditChild>;
  select: Action<Project, Select>;
  setProject: Action<Project, MyProject>;
  addChild: Action<Project, AddChild>;
  orderChild: Action<Project, OrderChild>;
  changes: number;
}

const Projects: Project = {
  projects: [],
  changes: 0,
  addProject: action((state, payload) => {
    const newProject = {
      id: uuidv4(),
      projectName: payload.projectName || 'new Project',
      pages: [defaultPage],
      createdAt: moment().format('YYYY-MM-DD'),
      author: payload.author || 'form-it',
      setting: '',
      date: {
        id: uuidv4(),
        module: 'root',
        children: []
      },
      category: payload.category || '',
      thumbnail: payload.thumbnail || '',
      published: false,
      viewed: payload.viewed,
      edited: payload.edited
    };
    const oldState = state;
    oldState.projects.push(newProject);
    oldState.changes += 1;
  }),
  addPage: action((state, payload) => {
    const oldState = state;
    const project = oldState.projects.find(
      (item: MyProject) => item.id === payload
    );
    if (project) {
      const newPage = {
        id: uuidv4(),
        module: 'new-page',
        styles: defaultPageStyles,
        children: [defaultGroup],
        type: 'page',
        editebule: false,
      };
      project?.pages?.push(newPage);
      oldState.selected = { type: 'page', item: newPage };
    }
    oldState.changes += 1;
  }),
  addHtmlElement: action((state, payload) => {
    const newHtmlElement = payload.htmlElement;

    const oldState = state;
    const myProject: any = Deep.findDeep(
      oldState.projects,
      (item) => item === payload.projectId
    );

    myProject?.parent?.children.push(newHtmlElement);
    oldState.changes += 1;
  }),
  select: action((state, payload) => {
    const oldState = state;
    switch (payload.type) {
      case 'project':
        oldState.selected = payload;
        break;
      case 'page':
        oldState.selected = payload;
        break;
      case 'element':
        oldState.selected = payload;
        break;
      case 'component':
        oldState.selected = payload;
        break;
      case 'htmlElement':
        oldState.selected = payload;
        break;
      default:
        oldState.selected = undefined;
        break;
    }
    oldState.changes += 1;
  }),
  setProject: action((state, payload) => {
    const oldState = state;
    oldState.project = payload;
  }),
  editElement: action((state, payload) => {
    const oldState = state;

    const myElement = Deep.findDeep(
      oldState.projects,
      (item: any) => item === payload.elementId
    );
    const element: any = myElement?.parent;
    if (element) {
      switch (payload.editType) {
        case 'elementPosition':
          oldState.changes += 1;
          break;
        case 'elementHeight':
          element.styles.height = payload.height;
          break;
        case 'elementWidth':
          element.styles.width = payload.width;
          break;
        case 'elementMargin':
          element.styles.margin = payload.margin;
          break;
        case 'elementPadding':
          element.styles.padding = payload.padding;
          break;
        case 'elementDisabled':
          element.disabled = !payload.disabled;
          break;
        default:
          break;
      }
    }
    oldState.changes += 1;
  }),
  editHTMLElement: action((state, payload) => {
    const oldState = state;

    const myElement = Deep.findDeep(
      oldState.projects,
      (item: any) => item === payload.htmlElementId
    );
    const htmlElement: any = myElement?.parent;
    if (htmlElement) {
      switch (payload.editType) {
        case 'htmlElementColor':
          htmlElement.styles.color = payload.color.hex;
          break;
        case 'htmlElementSize':
          htmlElement.styles.fontSize = payload.size;
          break;
        case 'htmlElementHeight':
          htmlElement.styles.height = payload.height;
          break;
        case 'htmlElementWidth':
          htmlElement.styles.width = payload.width;
          break;
        case 'htmlElementMargin':
          htmlElement.styles.margin = payload.margin;
          break;
        case 'htmlElementPadding':
          htmlElement.styles.padding = payload.padding;
          break;
        case 'htmlElementValue':
          htmlElement.value = payload.value;
          break;
        default:
          break;
      }
    }
    oldState.changes += 1;
  }),
  addChild: action((state, payload) => {
    const oldState = state;

    const parent = Deep.findDeep(
      oldState.projects,
      (item: any) => item === payload.parentId
    );

    const MyParentNode: any = parent?.parent;
    switch (payload.type) {
      case 'htmlElement':
        MyParentNode.children.push(payload.child);
        break;
      case 'group':
        MyParentNode.children.push(payload.child);
        break;
      default:
        break;
    }
  }),
  /**
   * It edit's the child object
   * @types 
   * parentId
   * type
   * value
   */
  editChild: action((state, payload) => {
    const oldState = state;

    const parent = Deep.findDeep(
      oldState.projects,
      (item: any) => item === payload.parentId
    );

    const MyParentNode: any = parent?.parent;

    switch (payload.type) {
      case 'styles':
        MyParentNode.styles.flexDirection = payload.value;
        break;
      case 'editebule':
        MyParentNode.editebule = !payload.value;
        break;
      default:
        break;
    }
  }),
  orderChild: action((state, payload) => {
    const oldState = state;

    const parent = Deep.findDeep(
      oldState.projects,
      (item: any) => item === payload.parentId
    );

    const MyParentNode: any = parent?.parent;

    switch (payload.type) {
      case 'htmlElement':
        MyParentNode.children.push(payload.child);
        break;
      case 'group':
        MyParentNode.children.push(payload.child);
        break;
      default:
        break;
    }
  })
};

export default Projects;
