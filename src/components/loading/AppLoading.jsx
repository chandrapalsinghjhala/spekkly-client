import React from "react";
import {
  OverlayContainer,
  OverlayTextContainer,
} from "../overlay/overlayStyles";
import { LoadingIcon, LoadingText } from "./loading_styles";

class AppLoading extends React.Component {
  componentDidMount() {
    document.getElementById("html").style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.getElementById("html").style.overflow = "scroll";
  }

  render() {
    return (
      <OverlayContainer solidBackground={this.props.solidBackground}>
        <OverlayTextContainer>
          <LoadingIcon />
          <LoadingText>Initializing Spekkly</LoadingText>
        </OverlayTextContainer>
      </OverlayContainer>
    );
  }
}

export default AppLoading;
