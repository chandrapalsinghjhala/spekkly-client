import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";

import TextInput from "../../../inputs/TextInput";
import TextArea from "../../../inputs/TextArea";
import { InputBox } from "../../../containers/container";
import { SettingsFieldContainer } from "../styles/settings_styles";
import { RelativeForm } from "../../../forms/form_styles";
import SettingsSubmitButtons from "../SettingsSubmitButtons";
import { connect } from "react-redux";
import {
  validLength,
  validEmail,
} from "../../../../services/validators/validators";
import { createValidatorLength } from "../../../../services/validators/validator_helpers";
import {
  nameLength,
  jobTitleLength,
  bioLength,
} from "../../../../config/validatorLengths";
import Loading from "../../../loading/Loading";
import { handleSettingsSubmit } from "../settings_helpers";

const SettingBioField = styled.div`
  grid-column: 1/3;
`;

const SettingsInfoEdit = (props) => {
  const { name, email, jobTitle, bio } = props.userState;

  const initialTestValues = {
    name,
    email,
    jobTitle,
    bio,
  };

  const submitOptions = {
    url: "/users/user_info",
    editCompleteText: `You're profile has been updated`,
  };

  return (
    <Form
      onSubmit={(values) => handleSettingsSubmit(values, props, submitOptions)}
      initialValues={initialTestValues}
      render={({ handleSubmit, submitting, submitError }) => (
        <RelativeForm onSubmit={handleSubmit}>
          {submitting && <Loading />}
          <InputBox borderBottom={true}>
            <SettingsFieldContainer>
              <Field
                name="name"
                component={TextInput}
                validate={(value, allValues, meta) =>
                  validLength(
                    value,
                    meta.name,
                    createValidatorLength(nameLength)
                  )
                }
                label="Name"
              />

              <Field
                name="email"
                component={TextInput}
                validate={validEmail}
                label="Email"
                type="email"
              />

              <Field
                name="jobTitle"
                component={TextInput}
                validate={(value, allValues, meta) =>
                  validLength(
                    value,
                    meta.name,
                    createValidatorLength(jobTitleLength, { allowBlank: true })
                  )
                }
                label="Job Title"
              />

              <SettingBioField>
                <Field
                  name="bio"
                  component={TextArea}
                  validate={(value, allValues, meta) =>
                    validLength(
                      value,
                      meta.name,
                      createValidatorLength(bioLength, { allowBlank: true })
                    )
                  }
                  label="Bio"
                />
              </SettingBioField>
            </SettingsFieldContainer>
          </InputBox>
          <SettingsSubmitButtons
            setEditActive={props.setEditActive}
            error={submitError}
          />
        </RelativeForm>
      )}
    />
  );
};

const mapStateToProps = ({ userState }) => ({
  userState,
});

export default connect(mapStateToProps)(SettingsInfoEdit);
