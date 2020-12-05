import styled from "styled-components";
import is from "styled-is";
import { ReactSVG } from "react-svg";

export const InnerNavContainer = styled.div`
  display: flex;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s linear;

  ${is("dataLoaded")`
       opacity: 1;
  `};
`;

export const ProfileImage = styled.img`
  width: 3.8rem;
  border-radius: 100px;
  cursor: pointer;
`;

export const LoggedInContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 3rem;
  position: relative;
`;

export const NavbarIconContainer = styled(ReactSVG)`
  // todo add measure
  div {
    height: 20px;

    svg {
      width: 2rem;
      cursor: pointer;
      height: auto;
      fill: #757575;
      transition: fill 0.1s linear;

      &:hover {
        fill: black;
      }
    }
  }
`;

export const NavLinkContainer = styled.div`
  margin-left: auto;
`;

export const NavButton = styled.button`
  ${is("right_margin")`
     margin-right: 4rem
  `};

  background-color: Transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const NavLogo = styled.img`
  height: 5rem;
`;
