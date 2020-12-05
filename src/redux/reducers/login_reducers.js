import {
  IS_SIGN_UP_OPEN,
  IS_LOGIN_OPEN,
  IS_EMAIL_LOGIN_OPEN,
  IS_EMAIL_SIGN_UP_OPEN,
  IS_FORGOT_PASSWORD_OPEN,
  IS_RESET_PASSWORD_OPEN,
} from "../constants/login_action_types";

const initialUIState = {
  isSignUpOpen: false,
  isLoginOpen: false,
  isEmailLoginOpen: false,
  isEmailSignUpOpen: false,
  isForgotPasswordOpen: false,
  isResetPasswordOpen: false,
};

const loginSignUpState = (state = initialUIState, action) => {
  if (action.type === IS_SIGN_UP_OPEN) {
    return { ...state, isSignUpOpen: action.isSignUpOpen };
  } else if (action.type === IS_LOGIN_OPEN) {
    return { ...state, isLoginOpen: action.isLoginOpen };
  } else if (action.type === IS_EMAIL_LOGIN_OPEN) {
    return { ...state, isEmailLoginOpen: action.isEmailLoginOpen };
  } else if (action.type === IS_EMAIL_SIGN_UP_OPEN) {
    return { ...state, isEmailSignUpOpen: action.isEmailSignUpOpen };
  } else if (action.type === IS_FORGOT_PASSWORD_OPEN) {
    return { ...state, isForgotPasswordOpen: action.isForgotPasswordOpen };
  } else if (action.type === IS_RESET_PASSWORD_OPEN) {
    return { ...state, isResetPasswordOpen: action.isResetPasswordOpen };
  }
  return state;
};

export default loginSignUpState;
