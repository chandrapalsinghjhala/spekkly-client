export const createValidatorLength = (item, options = {}) => {
  const validateOptions = {
    length: { min: item.min, max: item.max },
  };

  if (options.allowBlank) {
    validateOptions.allowBlank = true;
  }

  return validateOptions;
};
