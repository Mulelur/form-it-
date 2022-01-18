import { v4 as uuidv4 } from 'uuid';
import { GroupStyle } from '../Interface/project.interface';
import { WebflowStyleInput } from './InputStyles';
// import { defaultGroupStyles } from '../Defaults/project.default';

export const groupStyles: GroupStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  margin: '0',
  borderRadius: '2px',
  padding: '1.4rem 2rem 1.6rem',
  background: 'rgba(57, 63, 84, 0.8)'
};

export const InputStyleGroup = [
  {
    id: uuidv4(),
    module: 'Webflow-style input',
    styles: groupStyles,
    children: [
      {
        id: uuidv4(),
        module: 'input-1',
        value: 'input',
        styles: WebflowStyleInput,
        type: 'input'
      }
      //   {
      //     id: uuidv4(),
      //     module: 'button-1',
      //     value: 'My New Button',
      //     styles: defaultButtonStyles,
      //     type: 'button'
      //   }
    ],
    type: 'group'
  }
];

export {};
