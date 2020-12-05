import React from "react";
import { useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";

import { InputForm } from "../styles/login_sign_up_styles";
import TextInput from "../../inputs/TextInput";

import FormSubmitContainer from "./FormSubmitContainer";
import {
  handleSubmit,
  handleSuccessfulLogin,
} from "../helpers/login_signup_helpers";
import { validEmail, notBlank } from "../../../services/validators/validators";
import { getInitialFormValues } from "../../forms/form_helpers";

const LoginForm = () => {
  const initialTestValues = getInitialFormValues({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  return (
    <Form
      onSubmit={(values) =>
        handleSubmit("/users/login", values, dispatch, handleSuccessfulLogin)
      }
      initialValues={initialTestValues}
      render={({ handleSubmit, submitting, submitError }) => (
        <InputForm onSubmit={handleSubmit}>
          <Field
            name="email"
            component={TextInput}
            label="Email"
            type="email"
            validate={validEmail}
          />

          <Field
            name="password"
            component={TextInput}
            label="Password"
            type="password"
            validate={(value, allValues, meta) => notBlank(value, meta.name)}
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

export default LoginForm;
