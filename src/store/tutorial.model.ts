import {Action, action } from "easy-peasy";

interface ITutorial {
  showTutorial: boolean;
  toggleShowTutorial: Action<ITutorial ,boolean>
}

const Tutorial: ITutorial = {
  showTutorial: true,
  toggleShowTutorial: action((state, payload) => {
    const oldState = state;
    oldState.showTutorial = !payload;
  }),
};
export default Tutorial;
