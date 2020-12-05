const getAuthHeader = () => {
  return { headers: retrieveToken() };
};

const getAuthHeaderWithData = (data) => {
  return {
    headers: retrieveToken(),
    params: data,
  };
};

const retrieveToken = () => {
  return { Authorization: localStorage.getItem("sessionToken") };
};

export { getAuthHeader, getAuthHeaderWithData };
