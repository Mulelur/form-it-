import { v4 as uuidv4 } from 'uuid';
import {
  defaultButtonStyles,
  defaultInputStyles,
  defaultTextStyles
} from '../Defaults/project.default';

export const Elements = [
  {
    id: uuidv4(),
    module: 'Hello World',
    value: 'hello',
    styles: defaultTextStyles,
    type: 'text'
  },
  {
    id: uuidv4(),
    module: 'input-1',
    value: 'input',
    styles: defaultInputStyles,
    type: 'input'
  },
  {
    id: uuidv4(),
    module: 'button-1',
    value: 'My New Button',
    styles: defaultButtonStyles,
    type: 'button'
  }
];
