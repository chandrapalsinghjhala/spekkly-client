export const getSearchFormInitialInput = () => {
  if (process.env.NODE_ENV === "development") {
    return {
      keywords: "test",
      location: "test",
    };
  } else {
    return {};
  }
};
