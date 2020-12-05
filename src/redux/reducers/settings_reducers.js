import {
  ACTIVE_NAV_INDEX,
  SETTINGS_EDIT_ACTIVE,
  SETTINGS_EDIT_COMPLETE,
  SETTINGS_LOADING,
} from "../constants/settings_action_types";

const initialSettingsState = {
  activeNavIndex: 0,
  settingsEditActive: true,
  settingsEditComplete: false,
};

const settingsState = (state = initialSettingsState, action) => {
  if (action.type === ACTIVE_NAV_INDEX) {
    return Object.assign({}, state, {
      activeNavIndex: action.activeNavIndex,
    });
  } else if (action.type === SETTINGS_EDIT_ACTIVE) {
    return Object.assign({}, state, {
      settingsEditActive: action.settingsEditActive,
    });
  } else if (action.type === SETTINGS_EDIT_COMPLETE) {
    return Object.assign({}, state, {
      settingsEditComplete: action.settingsEditComplete,
    });
  } else if (action.type === SETTINGS_LOADING) {
    return Object.assign({}, state, {
      settingsLoading: action.settingsLoading,
    });
  }
  return state;
};

export default settingsState;
