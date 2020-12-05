import {
  IS_LOGGED_IN,
  APP_DATA_LOADED,
} from "../constants/session_action_types";

const initialSessionState = {
  isLoggedIn: undefined,
  appDataLoaded: undefined,
};

const sessionState = (state = initialSessionState, action) => {
  if (action.type === IS_LOGGED_IN) {
    return Object.assign({}, state, {
      isLoggedIn: action.isLoggedIn,
    });
  }

  return state;
};

export default sessionState;
