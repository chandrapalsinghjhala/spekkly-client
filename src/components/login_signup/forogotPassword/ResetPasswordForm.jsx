import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import moment from "moment";

import {
  LoginSignUpTextButton,
  InputForm,
} from "../styles/login_sign_up_styles";

import { handleSubmit } from "../helpers/login_signup_helpers";
import TextInput from "../../inputs/TextInput";
import {
  validLength,
  passwordConfirm,
} from "../../../services/validators/validators";
import FormSubmitContainer from "../login_methods/FormSubmitContainer";
import FilledButton from "../../buttons/FilledButton";
import {
  isForgotPasswordOpen,
  isResetPasswordOpen,
  isEmailLoginOpen,
} from "../../../redux/actions/login_actions";
import { NoticeHeading, NoticeText } from "../../notices/notice_styles";
import SuccessMessage from "../../alerts/SuccessMessage";
import { createValidatorLength } from "../../../services/validators/validator_helpers";
import { passwordLength } from "../../../config/validatorLengths";
import {
  getInitialFormValues,
  dispatchSubmitForm,
} from "../../forms/form_helpers";
import { Center } from "../../alignment/Center";

const ResetPasswordForm = (props) => {
  const [resetLinkValid, setResetLinkValid] = useState(false);
  const [passwordResetSuccessful, setPasswordResetSuccessful] = useState(false);
  const { validUntil, token } = queryString.parse(window.location.search);

  useEffect(() => {
    if (moment().diff(validUntil, "m") < 0) {
      setResetLinkValid(true);
    }
  }, [resetLinkValid]);

  const goToForgotPasswordScreen = () => {
    props.isForgotPasswordOpen(true);
    props.isResetPasswordOpen(false);
  };

  const handleBackClick = () => {
    props.isResetPasswordOpen(false);
    props.isEmailLoginOpen(true);
  };

  const handlePasswordResetSuccess = () => {
    setPasswordResetSuccessful(true);
  };

  const initialTestValues = getInitialFormValues({
    password: "password",
    passwordConfirm: "password",
  });

  return (
    <div>
      {resetLinkValid && (
        <Center>
          <NoticeHeading>Reset Password</NoticeHeading>
          <NoticeText> Please enter your new password below. </NoticeText>

          {resetLinkValid && !passwordResetSuccessful && (
            <Form
              onSubmit={(values) =>
                handleSubmit(
                  "/users/reset_password",
                  {
                    ...values,
                    token,
                  },
                  props,
                  handlePasswordResetSuccess
                )
              }
              initialValues={initialTestValues}
              render={({ handleSubmit, submitting, submitError }) => (
                <InputForm id="resetPasswordForm" onSubmit={handleSubmit}>
                  <Field
                    name="password"
                    component={TextInput}
                    type="password"
                    validate={(value, allValues, meta) =>
                      validLength(
                        value,
                        meta.name,
                        createValidatorLength(passwordLength)
                      )
                    }
                    label="Password"
                  />

                  <Field
                    name="passwordConfirm"
                    component={TextInput}
                    type="password"
                    validate={(value, allValues) =>
                      passwordConfirm(value, allValues, {
                        currentPassword: "password",
                        passwordConfirm: "passwordConfirm",
                      })
                    }
                    label="Confirm Password"
                  />

                  <FormSubmitContainer
                    type="submit"
                    error={submitError}
                    submitting={submitting}
                  />
                </InputForm>
              )}
            />
          )}
        </Center>
      )}

      {!resetLinkValid && (
        <Center>
          <NoticeHeading>Link Expired</NoticeHeading>
          <NoticeText smallBottomSpace>
            {" "}
            The password reset link has expired. To request another link, please
            enter your email again in the forgot password section.{" "}
          </NoticeText>
          <FilledButton
            buttonText="Return to Forgot Password"
            onClick={goToForgotPasswordScreen}
          />
        </Center>
      )}

      {passwordResetSuccessful && (
        <Center>
          <SuccessMessage
            message="Your password has been reset"
            largeMarginBottom
            center
          />
        </Center>
      )}

      {resetLinkValid && (
        <Center>
          <LoginSignUpTextButton onClick={handleBackClick}>
            {" "}
            ← login with email{" "}
          </LoginSignUpTextButton>
        </Center>
      )}
    </div>
  );
};

const mapDispatchToProps = () => ({
  isForgotPasswordOpen,
  isResetPasswordOpen,
  isEmailLoginOpen,
});

export default connect(null, mapDispatchToProps())(ResetPasswordForm);
