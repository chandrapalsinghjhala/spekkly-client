import React, { useState } from "react";

import FilledButton from "../buttons/FilledButton";
import HollowButton from "../buttons/HollowButton";
import InputError from "../inputs/InputError";
import { ModalHeading, ModalText } from "./styles/modal_styles";
import { FlexContainer } from "../containers/container";

const ConfirmAlert = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAction = () => {
    console.log("I am here");

    // try {
    //   setLoading(true);
    //   await props.action();

    //   if (props.closeAlert) {
    //     props.closeAlert();
    //   }

    //   if (props.hideOptions) {
    //     props.hideOptions();
    //   }
    // } catch (e) {
    //   setError("Something went wrong");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div>
      <ModalHeading>{props.heading}</ModalHeading>
      <ModalText>{props.text}</ModalText>

      <FlexContainer>
        <HollowButton
          buttonText="Back"
          rightMargin
          onClick={props.closeAlert}
        />
        <FilledButton
          buttonText={props.buttonText}
          warning
          rightSideLoading
          loading={loading}
          onClick={handleAction}
        />
      </FlexContainer>

      <InputError error={error} />
    </div>
  );
};

export default ConfirmAlert;
