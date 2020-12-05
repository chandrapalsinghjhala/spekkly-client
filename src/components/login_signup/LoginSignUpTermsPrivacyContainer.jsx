import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  LoginSignUpTermsPrivacyText,
  TermsPrivacyLink,
} from "./styles/login_sign_up_styles";
import { isLoginOpen, isSignUpOpen } from "../../redux/actions/login_actions";

const LoginSignUpTermsPrivacyContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoginOpenValue = useSelector(
    ({ loginSignUpState: { isLoginOpen } }) => isLoginOpen
  );

  const handleClick = (route) => {
    dispatch(isLoginOpen(false));
    dispatch(isSignUpOpen(false));
    history.push(route);
  };

  return (
    <LoginSignUpTermsPrivacyText>
      By signing {isLoginOpenValue ? "in" : "up"} your are accepting our <br />{" "}
      <TermsPrivacyLink onClick={() => handleClick("terms-of-service")}>
        Terms of Service
      </TermsPrivacyLink>{" "}
      &{" "}
      <TermsPrivacyLink onClick={() => handleClick("privacy-policy")}>
        Privacy Policy
      </TermsPrivacyLink>
    </LoginSignUpTermsPrivacyText>
  );
};

export default LoginSignUpTermsPrivacyContainer;
