import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app/App";
import store from "./redux/store/store";

import "./static/css/2.1bce3852.chunk.css";
import "./static/css/main.4b3a9a70.chunk.css";

export default class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
