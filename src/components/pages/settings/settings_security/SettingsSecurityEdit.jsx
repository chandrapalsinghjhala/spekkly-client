import React from "react";
import { InputBox } from "../../../containers/container";
import { Form, Field } from "react-final-form";
import TextInput from "../../../inputs/TextInput";
import { RelativeForm } from "../../../forms/form_styles";
import SubmitButtons from "../SettingsSubmitButtons";
import Loading from "../../../loading/Loading";
import { connect } from "react-redux";
import {
  passwordConfirm,
  validLength,
} from "../../../../services/validators/validators";
import { handleSettingsSubmit } from "../settings_helpers";
import { createValidatorLength } from "../../../../services/validators/validator_helpers";
import { passwordLength } from "../../../../config/validatorLengths";
import { PasswordResetFieldContainer } from "./styles/settings_security_styles";

const SettingsSecurityEdit = (props) => {
  const submitOptions = {
    url: "/users/password",
    editCompleteText: `Your password has been updated`,
  };

  let initialValues = {};

  if (process.env.NODE_ENV === "development") {
    initialValues.currentPassword = "password1";
    initialValues.newPassword = "password2";
    initialValues.passwordConfirm = "password2";
  }

  return (
    <Form
      onSubmit={(values) => handleSettingsSubmit(values, props, submitOptions)}
      initialValues={initialValues}
      render={({ handleSubmit, submitting, submitError }) => (
        <RelativeForm onSubmit={handleSubmit}>
          <InputBox borderBottom={true}>
            <PasswordResetFieldContainer>
              {props.passwordSet && (
                <Field
                  name="currentPassword"
                  component={TextInput}
                  type="password"
                  label="Current Password"
                />
              )}

              <Field
                name="newPassword"
                component={TextInput}
                validate={(value, allValues, meta) =>
                  validLength(
                    value,
                    meta.name,
                    createValidatorLength(passwordLength)
                  )
                }
                label="New Password"
                type="password"
              />

              <Field
                name="passwordConfirm"
                component={TextInput}
                type="password"
                validate={(value, allValues) =>
                  passwordConfirm(value, allValues, {
                    currentPassword: "newPassword",
                    passwordConfirm: "passwordConfirm",
                  })
                }
                label="Confirm New Password"
              />
            </PasswordResetFieldContainer>
          </InputBox>
          <SubmitButtons
            setEditActive={props.setEditActive}
            error={submitError}
          />
        </RelativeForm>
      )}
    />
  );
};

const mapStateToProps = ({ userState }) => ({
  passwordSet: userState.passwordSet,
});

export default connect(mapStateToProps)(SettingsSecurityEdit);
