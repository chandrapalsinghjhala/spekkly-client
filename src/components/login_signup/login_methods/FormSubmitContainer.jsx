import { SubmitErrorContainer } from "../styles/login_sign_up_styles";
import InputError from "../../inputs/InputError";
import React from "react";
import { SubmitContainer } from "../styles/login_sign_up_styles";
import FilledButton from "../../buttons/FilledButton";

const FormSubmitContainer = ({ submitting, error, onClick }) => (
  <SubmitContainer>
    <FilledButton
      stretch
      onClick={onClick}
      type="submit"
      insideButtonLoading={true}
      loading={submitting}
      buttonText={"Submit"}
    />
    <SubmitErrorContainer center={true}>
      <InputError error={error} />
    </SubmitErrorContainer>
  </SubmitContainer>
);

export default FormSubmitContainer;
