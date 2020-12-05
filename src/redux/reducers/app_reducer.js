import { BLUR_BACKGROUND } from "../constants/app_action_types";

const initialAppState = {
  // blurBackground: true
};

const appState = (state = initialAppState, action) => {
  if (action.type === BLUR_BACKGROUND) {
    return Object.assign({}, state, {
      blurBackground: action.blurBackground,
    });
  }
  return state;
};

export default appState;
