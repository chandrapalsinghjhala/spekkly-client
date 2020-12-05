import React from "react";
import LoginSignUpControls from "./LoginSignUpControls";
import { useSelector } from "react-redux";
import { LoginSignUpWidthContainer } from "./styles/login_sign_up_styles";
import { Center } from "../alignment/Center";

const LoginSignUp = () => {
  const loginSignUpState = useSelector(
    ({ loginSignUpState }) => loginSignUpState
  );

  return (
    <Center>
      <LoginSignUpWidthContainer>
        {loginSignUpState.isLoginOpen && (
          <LoginSignUpControls
            title="Welcome Back"
            message="Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories."
            switchModeTitle="No Account?"
            switchModeBtnText="Create One"
          />
        )}

        {loginSignUpState.isSignUpOpen && (
          <LoginSignUpControls
            title="Join Spekkly"
            message="Sign up to get personalized story recommendations, follow authors and topics you love, and interact with stories."
            switchModeTitle="Have an account?"
            switchModeBtnText="Sign in"
          />
        )}
      </LoginSignUpWidthContainer>
    </Center>
  );
};

export default LoginSignUp;
