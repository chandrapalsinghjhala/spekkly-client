import { createStore, compose } from "redux";
import reduxReset from "redux-reset";
import app from "../reducers/combined_reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

const enhanceCreateStore = compose(reduxReset())(createStore);

const store = enhanceCreateStore(app, devToolsEnhancer());

export default store;
