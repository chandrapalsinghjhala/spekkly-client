import React from "react";
import { useSelector, useDispatch } from "react-redux";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import {
  isEmailLoginOpen,
  isEmailSignUpOpen,
  isForgotPasswordOpen,
} from "../../../redux/actions/login_actions";

import {
  BottomButtonSpacer,
  LoginSignUpTextButton,
} from "../styles/login_sign_up_styles";

import { NoticeText, NoticeHeading } from "../../notices/notice_styles";
import { Center } from "../../alignment/Center";

const EmailLoginSignUpController = (props) => {
  const loginSignUpState = useSelector(
    ({ loginSignUpState }) => loginSignUpState
  );
  const dispatch = useDispatch();

  const closeLoginSignUp = () => {
    dispatch(isEmailLoginOpen(false));
    dispatch(isEmailSignUpOpen(false));
  };

  const toggleLoginSignUp = () => {
    if (loginSignUpState.isEmailLoginOpen) {
      dispatch(isEmailLoginOpen(false));
      dispatch(isEmailSignUpOpen(true));
    } else {
      dispatch(isEmailLoginOpen(true));
      dispatch(isEmailSignUpOpen(false));
    }
  };

  const openForgotPassword = () => {
    dispatch(isForgotPasswordOpen(true));
    closeLoginSignUp();
  };

  return (
    <Center>
      <NoticeHeading>{props.title}</NoticeHeading>
      <NoticeText> {props.details} </NoticeText>

      {loginSignUpState.isEmailLoginOpen && <LoginForm />}
      {loginSignUpState.isEmailSignUpOpen && <SignUpForm />}

      <BottomButtonSpacer>
        {loginSignUpState.isEmailLoginOpen && (
          <LoginSignUpTextButton onClick={openForgotPassword}>
            {" "}
            Forgot password?{" "}
          </LoginSignUpTextButton>
        )}
        <span>
          {" "}
          {props.switchLoginMethodTitle}
          <LoginSignUpTextButton onClick={toggleLoginSignUp}>
            {" "}
            {props.switchLoginMethodBtn}{" "}
          </LoginSignUpTextButton>
        </span>
        <LoginSignUpTextButton onClick={closeLoginSignUp}>
          {" "}
          ← All login in options.{" "}
        </LoginSignUpTextButton>
      </BottomButtonSpacer>
    </Center>
  );
};

export default EmailLoginSignUpController;
