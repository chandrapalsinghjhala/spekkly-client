import { IS_LOGGED_IN } from "../constants/session_action_types";

export const isLoggedIn = (isLoggedIn) => ({
  type: IS_LOGGED_IN,
  isLoggedIn,
});
