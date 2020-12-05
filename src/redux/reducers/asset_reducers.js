import { ASSET_INIT } from "../constants/asset_action_types";

const assetState = (state = {}, action) => {
  if (action.type === ASSET_INIT) {
    return Object.assign({}, state, action.assetInit);
  }
  return state;
};

export default assetState;
