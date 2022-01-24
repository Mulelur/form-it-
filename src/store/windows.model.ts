import { Action, action } from 'easy-peasy';

interface IWindows {
  isOpen: boolean;
  currentStack: {
    stack: string;
    anchorEl: HTMLElement | null
    extraData?: any;
  };
  toggleWindows: Action<IWindows, boolean>;
  setCurrentStack: Action<
    IWindows,
    {
      stack: string;
      extraData?: any;
      anchorEl: HTMLElement | null;
    }
  >;
}

const Windows: IWindows = {
  isOpen: false,
  currentStack: {
    stack: '',
    // eslint-disable-next-line unicorn/no-null
    anchorEl: null,
  },
  toggleWindows: action((state, payload) => {
    const oldState = state;
    oldState.isOpen = !payload;
  }),
  setCurrentStack: action((state, payload) => {
    const oldState = state;
    oldState.currentStack.stack = payload.stack;
    oldState.currentStack.anchorEl = payload.anchorEl;
    oldState.isOpen = !payload.extraData;
  })
};

export default Windows;
