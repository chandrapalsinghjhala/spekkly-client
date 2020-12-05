import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import googleLogo from "../../../assets/icons/google.svg";
import LoginSignUpButton from "../LoginSignUpButton";
import { googleClientId } from "../../../config/constants";
import { handleThirdPartyLoginSuccess } from "../helpers/login_signup_helpers";

const GoogleLoginButton = (props) => {
  const dispatch = useDispatch();

  const handleGoogleLoginFailure = () => {
    props.setError("We could not authenticate your account.");
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={googleClientId}
      render={(renderProps) => (
        <LoginSignUpButton
          onClick={renderProps.onClick}
          buttonImage={googleLogo}
          buttonText={`${props.btnText} with Google`}
        />
      )}
      onSuccess={(response) =>
        handleThirdPartyLoginSuccess(
          "/users/google_login",
          { tokenId: response.tokenId },
          dispatch,
          props.setError
        )
      }
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
