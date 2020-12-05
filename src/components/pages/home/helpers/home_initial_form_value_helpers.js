export const getSearchBarInitialInput = () => {
  if (process.env.NODE_ENV === "development") {
    return {
      keywords: "test",
      location: "test",
    };
  } else {
    return {};
  }
};

export const getSideBarInitialInput = () => {
  if (process.env.NODE_ENV === "development") {
    return {
      space: { min: 30, max: 40 },
    };
  } else {
    return {};
  }
};
