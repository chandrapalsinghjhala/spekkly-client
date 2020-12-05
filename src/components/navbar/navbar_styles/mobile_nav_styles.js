import styled from "styled-components";
import { createMediaQuery, mediaQueries } from "../../media/media_helpers";

export const MobileNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100vh - var(--vh-offset, 0px));
  overflow-y: auto;
  z-index: 10;
  background-color: var(--background-color);
`;

export const MobileNavContentContainer = styled.div`
  background-color: white;
  position: relative;
  top: calc(${(props) => props.navbarHeight}px + 2rem);
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;

  ${createMediaQuery(mediaQueries.tabLandDown)} {
    height: calc(94vh - var(--vh-offset, 0px));
  }

  ${createMediaQuery(mediaQueries.phoneDown)} {
    height: calc(86vh - var(--vh-offset, 0px));
  }
`;
