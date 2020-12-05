import React, { useState } from "react";
import axios from "../../axios";
import { Form } from "react-final-form";
import { sentenceCase } from "sentence-case";

import {
  ModalHeading,
  ModalText,
  ModalFormContainer,
} from "./styles/modal_styles";

import FilledButton from "../buttons/FilledButton";
import HollowButton from "../buttons/HollowButton";
import InputError from "../inputs/InputError";
import InputOptions from "../inputs/InputOptions";
import { reportOptions } from "../../config/constants";
import { getAuthHeader } from "../../services/auth_header_services";
import { FlexContainer } from "../containers/container";
import { setValue } from "../forms/form_helpers";
import { FORM_ERROR } from "final-form";
import { getInitialFormValues } from "../forms/form_helpers";

const ReportModal = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitReport = async (values) => {
    try {
      const payload = {
        ...values,
        reportedEntityId: props.reportedEntityId,
        reportedEntityType: props.reportedEntityType,
      };

      const {
        data: { success, error },
      } = await axios.post("/report", payload, getAuthHeader());
      if (!success) {
        return { [FORM_ERROR]: error };
      }

      setFormSubmitted(true);
    } catch (e) {
      return { [FORM_ERROR]: "Something went wrong" };
    }
  };

  return (
    <div>
      <ModalHeading>
        Report {sentenceCase(props.reportedEntityType)}
      </ModalHeading>
      {!formSubmitted && (
        <div>
          <ModalText>
            We're sorry you had this experience. Please let us know which of the
            following apply.
          </ModalText>

          <Form
            onSubmit={submitReport}
            mutators={{ setValue }}
            initialValues={getInitialFormValues({ report: "Hate Speech" })}
            render={({
              handleSubmit,
              form,
              submitting,
              submitError,
              invalid,
            }) => (
              <form onSubmit={handleSubmit}>
                <ModalFormContainer>
                  <InputOptions
                    label="Choose the following that apply"
                    options={reportOptions}
                    type="radio"
                    setValue={form.mutators.setValue}
                    name="type"
                  />
                </ModalFormContainer>
                <FlexContainer>
                  <HollowButton
                    buttonText="Back"
                    rightMargin
                    onClick={props.closeModal}
                  />

                  <FilledButton
                    buttonText="Report"
                    loading={submitting}
                    rightSideLoading
                    disabled={invalid}
                    type="submit"
                    disabledColor={invalid}
                  />
                </FlexContainer>
                <InputError error={submitError} />
              </form>
            )}
          />
        </div>
      )}
      {formSubmitted && (
        <div>
          <ModalText>
            Thank you for submitting your report. We will review the information
            you sent over and resolve this issue as quickly as possible.
          </ModalText>
          <HollowButton buttonText="Back" onClick={props.closeModal} />
        </div>
      )}
    </div>
  );
};

export default ReportModal;
