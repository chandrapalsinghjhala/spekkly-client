import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import LoginSignUpButton from "../LoginSignUpButton";
import facebookLogo from "../../../assets/icons/facebook.svg";
import { FacebookAppId } from "../../../config/constants";
import { handleThirdPartyLoginSuccess } from "../helpers/login_signup_helpers";
import { useDispatch } from "react-redux";

const FacebookLoginButton = (props) => {
  const dispatch = useDispatch();

  return (
    <FacebookLogin
      appId={FacebookAppId}
      autoLoad={false}
      fields="name,email,picture.width(400).height(400)"
      callback={(response) =>
        handleThirdPartyLoginSuccess(
          "/users/facebook_login",
          { facebookResponse: response },
          dispatch,
          props.setError
        )
      }
      render={(renderProps) => (
        <LoginSignUpButton
          onClick={renderProps.onClick}
          buttonImage={facebookLogo}
          buttonText={`${props.btnText} with Facebook`}
        />
      )}
    />
  );
};

export default FacebookLoginButton;
