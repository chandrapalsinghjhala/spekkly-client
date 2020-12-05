import React from "react";
import { useSelector } from "react-redux";
import { Center } from "../alignment/Center";
import { InputBox } from "./container";

const FullScreenBox = (props) => {
  const navbarHeight = useSelector(
    ({ navbarState: { navbarHeight } }) => navbarHeight
  );

  return (
    <Center navbarHeight={navbarHeight} vertical fillPage>
      <InputBox
        center
        clearBackground={props.clearBackground}
        customSize
        width="40%"
        navbarBottomMargin
        navbarHeight={navbarHeight}
      >
        <Center textCenter>{props.children}</Center>
      </InputBox>
    </Center>
  );
};

export default FullScreenBox;
