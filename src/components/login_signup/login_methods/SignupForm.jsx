import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";

import { InputForm } from "../styles/login_sign_up_styles";
import TextInput from "../../inputs/TextInput";
import {
  handleSubmit,
  handleSuccessfulLogin,
} from "../helpers/login_signup_helpers";
import { nameLength, passwordLength } from "../../../config/validatorLengths";
import FormSubmitContainer from "./FormSubmitContainer";
import { createValidatorLength } from "../../../services/validators/validator_helpers";

import {
  validEmail,
  validLength,
  passwordConfirm,
} from "../../../services/validators/validators";

const SignUpForm = () => {
  const initialTestValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const dispatch = useDispatch();

  return (
    <Form
      onSubmit={(values) =>
        handleSubmit("/users/sign_up", values, dispatch, handleSuccessfulLogin)
      }
      initialValues={initialTestValues}
      render={({ handleSubmit, submitting, submitError }) => (
        <InputForm id="signUpForm" onSubmit={handleSubmit}>
          <Field
            name="name"
            component={TextInput}
            type="text"
            validate={(value, allValues, meta) =>
              validLength(value, meta.name, createValidatorLength(nameLength))
            }
            label="Name"
          />

          <Field
            name="email"
            component={TextInput}
            type="email"
            validate={validEmail}
            label="Email"
          />

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
  );
};

export default SignUpForm;
