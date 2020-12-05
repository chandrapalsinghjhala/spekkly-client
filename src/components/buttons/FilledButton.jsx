import React, { useCallback, useState } from "react";
import LoadingButtonSpinner from "../loading/LoadingButtonSpinner";
import {
  ButtonText,
  OuterButtonContainer,
  ButtonContainer,
  FilledButtonTag,
} from "./button_styles";

const FilledButton = (props) => {
  const [buttonTextWidth, setButtonTextWidth] = useState(0);

  const buttonTextWidthRef = useCallback((node) => {
    if (node !== null) {
      setButtonTextWidth(node.offsetWidth);
    }
  }, []);

  // const handleClick = () => {
  //   // console.log("I m here");
  // };

  return (
    <OuterButtonContainer stretch={props.stretch}>
      <ButtonContainer
        mlAuto={props.mlAuto}
        mtAuto={props.mtAuto}
        homeSearch={props.homeSearch}
      >
        {props.loading && (
          <LoadingButtonSpinner
            rightSideLoading={props.rightSideLoading}
            leftSideLoading={props.leftSideLoading}
            buttonTextWidth={buttonTextWidth}
            insideButtonLoading={props.insideButtonLoading}
          />
        )}
        <FilledButtonTag
          no-stretch={props.noStretch}
          disabled={props.disabled}
          stretch={props.stretch}
          disabledColor={props.disabledColor}
          rightMargin={props.rightMargin}
          onClick={props.onClick}
          warning={props.warning}
          small={props.small}
          type={props.type || "button"}
        >
          <ButtonText ref={buttonTextWidthRef} small>
            {props.buttonText}
          </ButtonText>
        </FilledButtonTag>
      </ButtonContainer>
    </OuterButtonContainer>
  );
};

export default FilledButton;
