import axios from "../axios";
import { getAuthHeader } from "./auth_header_services";
import { resetReduxStore } from "./reset_redux_store";

export const logoutUser = async (history) => {
  await axios.post("/users/logout", { data: {} }, getAuthHeader());
  history.push("/");
  localStorage.removeItem("sessionToken");
  resetReduxStore();
};
