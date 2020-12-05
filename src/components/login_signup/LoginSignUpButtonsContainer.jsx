import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import GoogleLoginButton from "./login_methods/GoogleLogin";
import FacebookLoginButton from "./login_methods/FacebookLogin";
import LoginSignUpButton from "./LoginSignUpButton";
import emailIcon from "../../assets/icons/messages.svg";
import InputError from "../inputs/InputError";
import { Center } from "../alignment/Center";

import {
  isSignUpOpen,
  isLoginOpen,
  isEmailLoginOpen,
  isEmailSignUpOpen,
} from "../../redux/actions/login_actions";

import {
  BtnOuterContainer,
  LoginSignUpTextButton,
  TermsPrivacyLinkContainer,
  LoginSignUpHeading,
  LoginSignUpText,
} from "./styles/login_sign_up_styles";
import LoginSignUpTermsPrivacyContainer from "./LoginSignUpTermsPrivacyContainer";

const LoginSignUpButtonsContainer = (props) => {
  const loginSignUpState = useSelector(
    ({ loginSignUpState }) => loginSignUpState
  );
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleEmailLoginClick = () => {
    loginSignUpState.isLoginOpen
      ? dispatch(isEmailLoginOpen(true))
      : dispatch(isEmailSignUpOpen(true));
  };

  const handleSwitchMenuClick = () => {
    if (loginSignUpState.isLoginOpen) {
      dispatch(isSignUpOpen(true));
      dispatch(isLoginOpen(false));
    } else {
      dispatch(isSignUpOpen(false));
      dispatch(isLoginOpen(true));
    }
  };

  return (
    <Center>
      <LoginSignUpHeading>{props.title}</LoginSignUpHeading>
      <LoginSignUpText> {props.message} </LoginSignUpText>

      <BtnOuterContainer>
        <GoogleLoginButton
          btnText={loginSignUpState.isLoginOpen ? "Login" : "Sign up"}
          setError={setError}
        />
        <FacebookLoginButton
          btnText={loginSignUpState.isLoginOpen ? "Login" : "Sign up"}
          setError={setError}
        />
        <LoginSignUpButton
          onClick={handleEmailLoginClick}
          buttonImage={emailIcon}
          buttonText={`${
            loginSignUpState.isLoginOpen ? "Login" : "Sign up"
          } with Email`}
        />
      </BtnOuterContainer>

      <InputError loginSignUpError error={error} />

      <TermsPrivacyLinkContainer>
        {" "}
        {props.switchModeTitle}
        <LoginSignUpTextButton onClick={handleSwitchMenuClick}>
          {" "}
          {props.switchModeBtnText}{" "}
        </LoginSignUpTextButton>
      </TermsPrivacyLinkContainer>

      <LoginSignUpTermsPrivacyContainer />
    </Center>
  );
};

export default LoginSignUpButtonsContainer;
