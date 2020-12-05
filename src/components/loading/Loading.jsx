import React from "react";
import { useSelector } from "react-redux";

import {
  LoadingBackground,
  LoadingContainer,
  LoadingIcon,
  LoadingText,
} from "./loading_styles";
import { Center } from "../alignment/Center";

const Loading = (props) => {
  const navbarHeight = useSelector(
    ({ navbarState: { navbarHeight } }) => navbarHeight
  );

  return (
    <Center navbarHeight={navbarHeight} vertical fillPage={props.fillPage}>
      <LoadingBackground
        fixed={props.fixed}
        solidBackground={props.solidBackground}
        clearBackground={props.clearBackground}
      >
        <LoadingContainer>
          <LoadingIcon
            fillPage={props.fillPage}
            marginBottom={props.marginBottom}
            navbarHeight={navbarHeight}
          />
          {props.loadingText && <LoadingText>{props.loadingText}</LoadingText>}
        </LoadingContainer>
      </LoadingBackground>
    </Center>
  );
};

export default Loading;
