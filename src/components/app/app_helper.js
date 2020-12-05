import axios from "../../axios";
import { getAuthHeader } from "../../services/auth_header_services";
import initSocket from "../../services/socket_services";
import { getAssets, getUserInfo } from "../../services/load_data_services";
import { assetInit } from "../../redux/actions/asset_actions";
import { isLoggedIn } from "../../redux/actions/sessions_actions";
import { userDataDispatch } from "../../redux/actions/user_actions";
import vhCheck from "vh-check";

const verifySessionToken = async () => {
  const token = localStorage.getItem("sessionToken");
  if (!token) {
    throw new Error();
  } else {
    const {
      data: { validUser },
    } = await axios.get("/users/verify_session_token", getAuthHeader());
    return validUser;
  }
};

export const initApp = async (setDataLoaded, dispatch) => {
  try {
    vhCheck();
    const assets = await getAssets();
    dispatch(assetInit(assets));
    const validUser = await verifySessionToken();
    dispatch(isLoggedIn(validUser));
    if (validUser) {
      await initSocket();
      dispatch(userDataDispatch(await getUserInfo()));
    }
    return true;
  } catch (e) {
    return false;
  } finally {
    // todo app loading errors
    setDataLoaded(true);
  }
};
