import {
  IS_NAV_PROFILE_OPTIONS_OPEN,
  NAVBAR_HEIGHT,
} from "../constants/navbar_action_types";

export const isNavProfileOptionsOpen = (isNavProfileOptionsOpen) => ({
  type: IS_NAV_PROFILE_OPTIONS_OPEN,
  isNavProfileOptionsOpen,
});

export const navbarHeight = (navbarHeight) => ({
  type: NAVBAR_HEIGHT,
  navbarHeight,
});
