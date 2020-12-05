import {
  IS_NAV_PROFILE_OPTIONS_OPEN,
  NAVBAR_HEIGHT,
} from "../constants/navbar_action_types";

const initialUIState = {
  isNavProfileOptionsOpen: false,
};

const navbarState = (state = initialUIState, action) => {
  if (action.type === IS_NAV_PROFILE_OPTIONS_OPEN) {
    return Object.assign({}, state, {
      isNavProfileOptionsOpen: action.isNavProfileOptionsOpen,
    });
  } else if (action.type === NAVBAR_HEIGHT) {
    return Object.assign({}, state, {
      navbarHeight: action.navbarHeight,
    });
  }
  return state;
};

export default navbarState;
