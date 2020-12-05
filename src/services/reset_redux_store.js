import store from "../redux/store/store";
import { navbarHeight } from "../redux/actions/navbar_actions";
import { assetInit } from "../redux/actions/asset_actions";

export const resetReduxStore = () => {
  const navbarHeightValue = store.getState().navbarState.navbarHeight;
  const assetState = store.getState().assetState;

  store.dispatch({
    type: "RESET",
  });
  store.dispatch(navbarHeight(navbarHeightValue));
  store.dispatch(assetInit(assetState));
};
