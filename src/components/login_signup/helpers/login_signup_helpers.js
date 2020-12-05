import axios from "../../../axios";
import { resetReduxStore } from "../../../services/reset_redux_store";
import { FORM_ERROR } from "final-form";
import { getUserInfo } from "../../../services/load_data_services";
import { userDataDispatch } from "../../../redux/actions/user_actions";
import { isLoggedIn } from "../../../redux/actions/sessions_actions";
import {
  isLoginOpen,
  isSignUpOpen,
} from "../../../redux/actions/login_actions";

export const handleSubmit = async (url, values, dispatch, handleSuccess) => {
  try {
    const {
      data: { success, error, token },
    } = await axios.post(url, values);
    if (success) {
      await handleSuccess(token, dispatch);
    } else {
      console.log(error);
      throw new Error(error);
    }
  } catch (e) {
    return { [FORM_ERROR]: e.message ? e.message : "Something went wrong" };
  }
};

export const handleThirdPartyLoginSuccess = async (
  url,
  data,
  dispatch,
  setError
) => {
  try {
    const {
      data: { success, token },
    } = await axios.post(url, data);
    if (success) {
      handleSuccessfulLogin(token, dispatch);
    } else {
      throw new Error();
    }
  } catch (e) {
    setError("Something went wrong. Please try again later.");
  }
};

export const handleSuccessfulLogin = async (token, dispatch) => {
  localStorage.setItem("sessionToken", token);
  resetReduxStore();
  await getUserInfo;
  dispatch(userDataDispatch(await getUserInfo()));
  dispatch(isLoggedIn(true));
  dispatch(isLoginOpen(false));
  dispatch(isSignUpOpen(false));
};
