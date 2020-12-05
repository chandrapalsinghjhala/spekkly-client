export const setValue = ([value, name, allowNull], state, utils) => {
  if (allowNull && state.formState.values[name] === value) {
    utils.changeValue(state, name, () => null);
  } else {
    utils.changeValue(state, name, () => value);
  }
};

export const toggleCheckMark = ([value, name], state, utils) => {
  const mutate = (oldValue = []) => {
    const index = oldValue.findIndex((element) => element === value);
    index === -1 ? oldValue.push(value) : oldValue.splice(index, 1);
    return oldValue;
  };

  utils.changeValue(state, name, mutate);
};

export const getInitialFormValues = (initialValues) => {
  if (process.env.NODE_ENV === "development") {
    return initialValues;
  } else {
    return {};
  }
};
