import {
  IS_SIGN_UP_OPEN,
  IS_LOGIN_OPEN,
  IS_EMAIL_LOGIN_OPEN,
  IS_EMAIL_SIGN_UP_OPEN,
  IS_FORGOT_PASSWORD_OPEN,
  IS_RESET_PASSWORD_OPEN,
} from "../constants/login_action_types";

export const isEmailLoginOpen = (isEmailLoginOpen) => ({
  type: IS_EMAIL_LOGIN_OPEN,
  isEmailLoginOpen,
});

export const isEmailSignUpOpen = (isEmailSignUpOpen) => ({
  type: IS_EMAIL_SIGN_UP_OPEN,
  isEmailSignUpOpen,
});

export const isForgotPasswordOpen = (isForgotPasswordOpen) => ({
  type: IS_FORGOT_PASSWORD_OPEN,
  isForgotPasswordOpen,
});

export const isSignUpOpen = (isSignUpOpen) => ({
  type: IS_SIGN_UP_OPEN,
  isSignUpOpen,
});

export const isLoginOpen = (isLoginOpen) => ({
  type: IS_LOGIN_OPEN,
  isLoginOpen,
});

export const isResetPasswordOpen = (isResetPasswordOpen) => ({
  type: IS_RESET_PASSWORD_OPEN,
  isResetPasswordOpen,
});
