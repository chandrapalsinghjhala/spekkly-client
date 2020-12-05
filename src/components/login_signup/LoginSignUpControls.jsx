import React from "react";
import { useSelector } from "react-redux";
import EmailLoginSignUpController from "./login_methods/EmailLoginSignupController";
import LoginSignUpButtonsContainer from "./LoginSignUpButtonsContainer";
import ForgotPasswordForm from "./forogotPassword/ForgotPasswordForm";
import ResetPasswordForm from "./forogotPassword/ResetPasswordForm";

const LoginSignUpControls = (props) => {
  const loginSignUpState = useSelector(
    ({ loginSignUpState }) => loginSignUpState
  );

  return (
    <div>
      {!loginSignUpState.isForgotPasswordOpen &&
        !loginSignUpState.isEmailLoginOpen &&
        !loginSignUpState.isEmailSignUpOpen &&
        !loginSignUpState.isResetPasswordOpen && (
          <LoginSignUpButtonsContainer
            title={props.title}
            message={props.message}
            switchModeTitle={props.switchModeTitle}
            switchModeBtnText={props.switchModeBtnText}
          />
        )}

      {loginSignUpState.isEmailLoginOpen && (
        <EmailLoginSignUpController
          title={"Sign in with Email"}
          details={"Enter your email address and password below"}
          switchLoginMethodTitle={"No account?"}
          switchLoginMethodBtn={"Create one"}
        />
      )}

      {loginSignUpState.isEmailSignUpOpen && (
        <EmailLoginSignUpController
          title={"Sign up with Email"}
          details={"Please fill out the information below"}
          switchLoginMethodTitle={"Have an account?"}
          switchLoginMethodBtn={"Sign in"}
        />
      )}

      {loginSignUpState.isForgotPasswordOpen &&
        !loginSignUpState.isResetPasswordOpen && <ForgotPasswordForm />}

      {loginSignUpState.isResetPasswordOpen && <ResetPasswordForm />}
    </div>
  );
};

export default LoginSignUpControls;
