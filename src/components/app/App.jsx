import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import "./styles/App.scss";
import { initApp } from "./app_helper";
import { isSignUpOpen, isLoginOpen } from "../../redux/actions/login_actions";
import LoginSignUp from "../login_signup/LoginSignUp";
import Favicon from "react-favicon";
import { AppContainer } from "./styles/app_styles";
import Modal from "../modals/Modal";
import AppRouter from "../router/AppRouter";

const App = () => {
  // console.log(process.env.REACT_APP_NODE_ENV);

  const [dataLoaded, setDataLoaded] = useState(false);
  const loginSignUpState = useSelector(
    ({ loginSignUpState }) => loginSignUpState
  );
  const favicon = useSelector(({ assetState: { FAVICON } }) => FAVICON);
  const blurBackground = useSelector(
    ({ appState: { blurBackground } }) => blurBackground
  );
  const dispatch = useDispatch();

  const closeLoginSignUpModal = () => {
    dispatch(isSignUpOpen(false));
    dispatch(isLoginOpen(false));
  };

  useEffect(() => {
    initApp(setDataLoaded, dispatch);
  }, [setDataLoaded]);

  return (
    <AppContainer blurBackground={blurBackground}>
      <Favicon url={favicon} />
      <Router>
        <Navbar dataLoaded={dataLoaded} />
        <AppRouter />
        {(loginSignUpState.isSignUpOpen || loginSignUpState.isLoginOpen) && (
          <Modal medium closeModal={closeLoginSignUpModal} showCloseButton>
            <LoginSignUp />
          </Modal>
        )}
      </Router>
    </AppContainer>
  );
};

export default App;
