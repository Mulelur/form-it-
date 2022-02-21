import { Action, action } from 'easy-peasy';

interface IFormIt {
  anchor: string;
  state: boolean;
  videoPaying: boolean;
  setToggleDrawer: Action<IFormIt, boolean>;
  playVedio: Action<IFormIt, boolean>;
}

const FormIt: IFormIt = {
  anchor: 'left',
  state: false,
  videoPaying: false,
  setToggleDrawer: action((state, payload) => {
    const oldState = state;
    oldState.state = payload;
  }),
  playVedio: action((state, payload) => {
    const oldState = state;
    oldState.videoPaying = payload;
  })
};
export default FormIt;
