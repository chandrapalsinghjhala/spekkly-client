import axios from "../axios";
import { getAuthHeader } from "./auth_header_services";

const verifySessionToken = async () => {
  const token = localStorage.getItem("sessionToken");
  if (!token) {
    return false;
  } else {
    try {
      const {
        data: { validUser },
      } = await axios.get("/users/verify_session_token", getAuthHeader());
      return validUser;
    } catch (e) {
      return false;
    }
  }
};

export default verifySessionToken;
