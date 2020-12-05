import React, { useState } from "react";

import {
  LoginSignUpTextButton,
  InputForm,
} from "../styles/login_sign_up_styles";

import { handleSubmit } from "../helpers/login_signup_helpers";
import { Form, Field } from "react-final-form";
import TextInput from "../../inputs/TextInput";
import { validEmail } from "../../../services/validators/validators";
import { useDispatch } from "react-redux";
import FormSubmitContainer from "../login_methods/FormSubmitContainer";
import SuccessMessage from "../../alerts/SuccessMessage";
import { NoticeHeading, NoticeText } from "../../notices/notice_styles";

import {
  isForgotPasswordOpen,
  isEmailLoginOpen,
} from "../../../redux/actions/login_actions";
import { Center } from "../../alignment/Center";

const ForgotPasswordForm = (props) => {
  const [forgotPasswordEmailSent, setForgotPasswordEmailSent] = useState(false);
  const dispatch = useDispatch();

  const handleBackClick = () => {
    dispatch(isForgotPasswordOpen(false));
    dispatch(isEmailLoginOpen(true));
  };

  const handleSuccess = () => {
    setForgotPasswordEmailSent(true);
  };

  const initialTestValues = {};

  return (
    <Center>
      <NoticeHeading>Forgot Password</NoticeHeading>
      <NoticeText>
        {" "}
        Please enter the email address associated with your account and we will
        send you a link to reset to your password.{" "}
      </NoticeText>

      {!forgotPasswordEmailSent && (
        <Form
          onSubmit={(values) =>
            handleSubmit("/users/forgot_password", values, props, handleSuccess)
          }
          initialValues={initialTestValues}
          render={({ handleSubmit, submitting, submitError }) => (
            <InputForm id="forgotPasswordForm" onSubmit={handleSubmit}>
              <Field
                name="email"
                component={TextInput}
                label="Email"
                type="email"
                validate={validEmail}
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

      {forgotPasswordEmailSent && (
        <SuccessMessage
          center
          largeMarginBottom
          message="Your password reset email was successfully sent"
        />
      )}

      <LoginSignUpTextButton onClick={handleBackClick}>
        {" "}
        ← login with email{" "}
      </LoginSignUpTextButton>
    </Center>
  );
};

export default ForgotPasswordForm;
