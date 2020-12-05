import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginSignUpState from "./login_reducers";
import sessionState from "./session_reducer";
import createPostState from "./create_post_reducers";
import navbarState from "./navbar_reducers";
import settingsState from "./settings_reducers";
import userState from "./user_reducers";
import messageState from "./message_reducers";
import homeState from "./home_reducers";
import postState from "./post_reducers";
import modalState from "./modal_reducers";
import inputState from "./input_reducers";
import assetState from "./asset_reducers";
import appState from "./app_reducer";

const app = combineReducers({
  sessionState,
  appState,
  inputState,
  loginSignUpState,
  createPostState,
  navbarState,
  settingsState,
  userState,
  messageState,
  homeState,
  assetState,
  postState,
  modalState,
  form: formReducer,
});

export default app;
