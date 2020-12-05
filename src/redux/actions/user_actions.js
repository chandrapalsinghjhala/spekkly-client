import {
  USER_DATA,
  PROFILE_IMAGE_CHANGED,
} from "../constants/user_action_types";

export const userDataDispatch = (userData) => ({
  type: USER_DATA,
  userData,
});

export const profileImageChanged = (profileImageChanged) => ({
  type: PROFILE_IMAGE_CHANGED,
  profileImageChanged,
});
