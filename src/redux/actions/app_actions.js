import { BLUR_BACKGROUND } from "../constants/app_action_types";

export const blurBackground = (blurBackground) => ({
  type: BLUR_BACKGROUND,
  blurBackground,
});
