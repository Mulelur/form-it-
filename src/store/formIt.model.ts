import {Action, action } from "easy-peasy";

interface IFormIt {
  anchor: string;
  state: boolean;
  setToggleDrawer: Action<IFormIt ,boolean>
}

const FormIt: IFormIt = {
  anchor: 'left',
  state: false,
  setToggleDrawer: action((state, payload) => {
    const oldState = state;
    oldState.state = payload;
  }),
};
export default FormIt;
