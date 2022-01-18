import { v4 as uuidv4 } from 'uuid';
import { defaultGroupStyles } from '../Defaults/project.default';
import { Chees, NewYear, sparkle, Sweet } from './TextStyles';

export const TextStyleGroup = [
  {
    id: uuidv4(),
    module: 'text',
    styles: defaultGroupStyles,
    children: [
      {
        id: uuidv4(),
        module: 'spaukle',
        value: 'spaukle',
        styles: sparkle,
        type: 'text'
      }
    ],
    type: 'group'
  },
  {
    id: uuidv4(),
    module: 'text',
    styles: defaultGroupStyles,
    children: [
      {
        id: uuidv4(),
        module: 'Chees',
        value: 'Chees',
        styles: Chees,
        type: 'text'
      },
      {
        id: uuidv4(),
        module: 'To The New Year',
        value: 'NewYear',
        styles: NewYear,
        type: 'text'
      }
    ],
    type: 'group'
  },
  {
    id: uuidv4(),
    module: 'text',
    styles: defaultGroupStyles,
    children: [
      {
        id: uuidv4(),
        module: 'sweet',
        value: 'sweet',
        styles: Sweet,
        type: 'text'
      }
    ],
    type: 'group'
  }
];
