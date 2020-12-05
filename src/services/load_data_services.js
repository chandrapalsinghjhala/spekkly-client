import axios from "../axios";
import { getAuthHeader } from "./auth_header_services";

const returnDataHelper = (success, data) => {
  if (!success) {
    throw new Error();
  } else {
    return data;
  }
};

export const getAssets = async () => {
  const {
    data: { assets, success },
  } = await axios.get("/users/assets", getAuthHeader());
  return returnDataHelper(success, assets);
};

export const getUserInfo = async () => {
  const {
    data: { userInfo, success },
  } = await axios.get("/users/user_info", getAuthHeader());
  return returnDataHelper(success, userInfo);
};

export const setNextPage = (hasNextPage, loading, setPage, page) => {
  if (hasNextPage && !loading) {
    setPage(page + 1);
  }
};
