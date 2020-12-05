import { SETTINGS_EDIT_COMPLETE } from "../constants/settings_action_types";

export const settingsEditComplete = (settingsEditComplete) => ({
  type: SETTINGS_EDIT_COMPLETE,
  settingsEditComplete,
});
