import { v1 as uuidv1 } from 'uuid';
import {
  defaultButtonStyles,
  defaultGroupStyles,
  defaultInputStyles,
  defaultLabelStyles
} from '../Defaults/project.default';

export const Groups = [
  {
    id: uuidv1(),
    module: 'input',
    styles: defaultGroupStyles,
    children: [
      {
        id: uuidv1(),
        module: 'label-1',
        value: 'my label',
        styles: defaultLabelStyles,
        type: 'label'
      },
      {
        id: uuidv1(),
        module: 'input-1',
        value: 'input',
        styles: defaultInputStyles,
        type: 'input'
      }
    ],
    type: 'group'
  },
  {
    id: uuidv1(),
    module: 'button',
    styles: defaultGroupStyles,
    children: [
      {
        id: uuidv1(),
        module: 'button-1',
        value: 'My New Button',
        styles: defaultButtonStyles,
        type: 'button'
      }
    ],
    type: 'group'
  }
];
