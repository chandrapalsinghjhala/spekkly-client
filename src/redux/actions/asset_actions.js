import { ASSET_INIT } from "../constants/asset_action_types";

export const assetInit = (assetInit) => ({
  type: ASSET_INIT,
  assetInit,
});
