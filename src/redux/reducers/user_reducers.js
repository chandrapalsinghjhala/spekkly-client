import {
  USER_DATA,
  PROFILE_IMAGE_CHANGED,
} from "../constants/user_action_types";

const initialState = {
  profileImageChanged: 0,
};

const userState = (state = initialState, action) => {
  if (action.type === USER_DATA) {
    // console.log(action.userData);
    return { ...state, ...action.userData };
  } else if (action.type === PROFILE_IMAGE_CHANGED) {
    return { ...state, profileImageChanged: action.profileImageChanged };
  }

  return state;
};

export default userState;
