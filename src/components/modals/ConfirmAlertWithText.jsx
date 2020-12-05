import React, { useState } from "react";

import FilledButton from "../buttons/FilledButton";
import HollowButton from "../buttons/HollowButton";
import Loading from "../loading/Loading";
import InputError from "../inputs/InputError";
import TextInput from "../inputs/TextInput";
import { ModalHeading, ModalText } from "./styles/modal_styles";
import { FlexContainer } from "../containers/container";
import { Form, Field } from "react-final-form";
import { ConfirmAlertWithTextFieldContainer } from "./styles/modal_styles";
import { getInitialFormValues } from "../forms/form_helpers";

import { RelativeForm } from "../forms/form_styles";

const ConfirmAlertWithText = (props) => {
  const validConfirm = (value) => {
    return value && value === "confirm" ? undefined : "invalid";
  };

  return (
    <Form
      onSubmit={props.action}
      initialValues={getInitialFormValues({ confirm: "confirm" })}
      render={({ handleSubmit, submitting, invalid, submitError }) => (
        <RelativeForm onSubmit={handleSubmit} id="confirmAlert">
          {submitting && <Loading loading={submitting} />}

          <ModalHeading>{props.heading}</ModalHeading>
          <ModalText>{props.text}</ModalText>
          <ConfirmAlertWithTextFieldContainer>
            <Field
              name="confirm"
              customWidth={"50%"}
              component={TextInput}
              validate={validConfirm}
              label='Please type "confirm"'
            />
          </ConfirmAlertWithTextFieldContainer>
          <FlexContainer>
            <HollowButton
              buttonText="Cancel"
              rightMargin
              onClick={props.closeAlert}
            />
            <FilledButton
              buttonText="Submit"
              warning
              type="submit"
              disabled={invalid}
            />
          </FlexContainer>
          {submitError && <InputError error={submitError} />}
        </RelativeForm>
      )}
    />
  );
};

export default ConfirmAlertWithText;
