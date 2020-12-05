import validator from "validator";
import isObject from "is-object";
import { sentenceCase } from "sentence-case";

export const validEmail = (value = "") =>
  validator.isEmail(value) ? undefined : "Email must be valid";

export const validLength = (value = "", name, options = {}) => {
  const nameFormatted = sentenceCase(name);

  if (!options.allowBlank) {
    const { min, max } = options.length;

    if (!validator.isLength(value, { min: min })) {
      return `${nameFormatted} must be at least ${min} characters long`;
    } else if (!validator.isLength(value, { max })) {
      return `${nameFormatted} cannot be more than ${max} characters long`;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
};

export const notBlank = (value = "", name) => {
  if (value && !validator.isEmpty(value, { ignore_whitespace: true })) {
    return undefined;
  } else if (isObject(name)) {
    return `${Object.keys(name)[0]} cannot be blank`;
  } else {
    return `${sentenceCase(name)} cannot be blank`;
  }
};

export const passwordConfirm = (value = "", allValues, options = {}) => {
  return allValues[options.currentPassword] ===
    allValues[options.passwordConfirm]
    ? undefined
    : "Passwords do not match";
};
