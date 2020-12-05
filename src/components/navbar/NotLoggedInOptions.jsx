import { NavButton } from "./navbar_styles/navbar_styles";
import HollowButton from "../buttons/HollowButton";
import React from "react";
import { useDispatch } from "react-redux";
import { isLoginOpen, isSignUpOpen } from "../../redux/actions/login_actions";
import { isNavProfileOptionsOpen } from "../../redux/actions/navbar_actions";

const NotLoggedInOptions = () => {
  const dispatch = useDispatch();

  const loginClick = () => {
    dispatch(isNavProfileOptionsOpen(false));
    dispatch(isLoginOpen(true));
  };

  const signUpClick = () => {
    dispatch(isNavProfileOptionsOpen(false));
    dispatch(isSignUpOpen(true));
  };

  return (
    <div>
      <NavButton onClick={loginClick} right_margin={true}>
        {" "}
        Login{" "}
      </NavButton>
      <HollowButton
        onClick={signUpClick}
        active={true}
        buttonText={"Sign up"}
      />
    </div>
  );
};

export default NotLoggedInOptions;
