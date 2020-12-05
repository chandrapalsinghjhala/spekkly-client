import React from "react";
import {
  ModalBackgroundColor,
  ModalContainerTag,
  ModalHeading,
  ModalInnerContainer,
  ModalText,
  ModalDimensions,
} from "../modals/styles/modal_styles";
import FilledButton from "../buttons/FilledButton";
import { Center } from "../alignment/Center";

const Notice = (props) => {
  return (
    <div>
      <ModalHeading>{props.heading}</ModalHeading>
      <ModalText>{props.text}</ModalText>
      <FilledButton
        buttonText={props.buttonText}
        onClick={props.handleNoticeConfirm}
      />
    </div>
  );
};

export default Notice;
