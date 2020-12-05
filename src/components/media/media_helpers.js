export const phoneDown = "(max-width: 37.5em)";

export const tabPortDown = "(max-width: 56.25em)";
export const tabPortUp = "(max-width: 37.5em)";

export const tabLandDown = "(max-width: 75em)";

export const tabLandToTabPort = "(max-width: 75em) and (min-width: 37.5em)";
export const tabLandUp = "(min-width: 56.25em)";

export const desktopUp = "(min-width: 75em)";

export const desktopWideUp = "(min-width: 125em)";

export const mediaQueries = {
  phoneDown,
  tabPortDown,
  tabPortUp,
  tabLandDown,
  tabLandUp,
  tabLandToTabPort,
  desktopUp,
  desktopWideUp,
};

export const createMediaQuery = (query, showMedea = true) =>
  `${showMedea ? "@media" : ""} only screen and ${query}`;
