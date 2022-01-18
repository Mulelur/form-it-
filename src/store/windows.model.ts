import { Action, action } from 'easy-peasy';

interface IWindows {
  isOpen: boolean;
  currentStack: {
    stack: string;
    extraData?: any;
  };
  toggleWindows: Action<IWindows, boolean>;
  setCurrentStack: Action<
    IWindows,
    {
      stack: string;
      extraData?: any;
    }
  >;
}

const Windows: IWindows = {
  isOpen: false,
  currentStack: {
    stack: ''
  },
  toggleWindows: action((state, payload) => {
    const oldState = state;
    oldState.isOpen = !payload;
  }),
  setCurrentStack: action((state, payload) => {
    const oldState = state;
    oldState.currentStack = payload;
  })
};

export default Windows;
