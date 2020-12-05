import styled from "styled-components";
import is from "styled-is";
import { mediaQueries, createMediaQuery } from "../../media/media_helpers";

const NavbarContainerBase = styled.div`
  border-bottom: 1px solid #eeeeee;
`;

export const NavbarProfileOptionsContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 5.4rem;
  right: -28px;
  z-index: 10;
  box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
  border-radius: 3px;
  width: 22rem;

  //todo move away
  &:after,
  &:before {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
    top: -8px;
    content: "";
    left: 76%;
    position: absolute;
  }

  &:before {
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #cecece;
    transform: translateY(-1px);
    margin-left: -1px;
  }
`;

export const NavbarProfileOption = styled.div`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.68);
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    background-color: #f5f5f5;
    color: black;
  }

  ${createMediaQuery(mediaQueries.tabLandDown)} {
    color: black;
    font-size: 2rem;
  }

  ${createMediaQuery(mediaQueries.phoneDown)} {
    font-size: 1.6rem;
    padding: 1.4rem 2rem;
  }
`;

export const NavbarProfileImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100px;
  margin-right: 1rem;

  ${createMediaQuery(mediaQueries.tabLandToTabPort)} {
    width: 8rem;
    height: 8rem;
    margin-right: 2rem;
  }
`;

export const NavbarProfileContainer = styled(NavbarContainerBase)`
  display: flex;
  align-items: center;
  padding: 2.6rem;

  ${createMediaQuery(mediaQueries.tabLandDown)} {
    padding: 2rem;
  }
`;

export const NavbarProfileName = styled.div`
  font-family: "Bold";
  font-size: 1.4rem;

  ${createMediaQuery(mediaQueries.tabLandDown)} {
    font-size: 2.2rem;
  }

  ${createMediaQuery(mediaQueries.phoneDown)} {
    font-size: 1.8rem;
  }
`;

export const NavbarOptionsContainer = styled(NavbarContainerBase)`
  padding: 0.8rem 0;
`;

export const NavbarSubOptionsContainer = styled.div`
  background-color: #fbfbfb;
  padding: 1rem 2.2rem;
  display: inline-grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  grid-column-gap: 1.2rem;
`;

export const SubLinkText = styled.div`
  color: #767676;
  font-size: 1.3rem;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;
