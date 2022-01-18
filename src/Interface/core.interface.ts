import { MyProject } from '../store/projects.model';
import { Component, HTMLElement, Page } from './project.interface';

export interface ICore {
  core: boolean;
  selectedProject?: MyProject;
  selectedPage?: Page;
  selectedElement?: any;
  selectHtmlElement?: HTMLElement;
  selectedComponent?: Component;
}
