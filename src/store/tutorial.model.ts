import {Action, action } from "easy-peasy";

type TutorialState = 'sckiped' | 'completaed' | 'inProgress';

interface ITutorial {
  showTutorial: boolean;
  tutorial: {
    state: TutorialState;
    step: number;

  }
  toggleShowTutorial: Action<ITutorial ,boolean>
}

const Tutorial: ITutorial = {
  showTutorial: true,
  tutorial: {
    state: 'inProgress',
    step: 1
  },
  toggleShowTutorial: action((state, payload) => {
    const oldState = state;
    oldState.showTutorial = !payload;
  }),
};
export default Tutorial;
