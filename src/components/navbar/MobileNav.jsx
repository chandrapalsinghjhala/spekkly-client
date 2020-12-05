import React from "react";
import {
  MobileNavContainer,
  MobileNavContentContainer,
} from "./navbar_styles/mobile_nav_styles";
import { Portal } from "react-portal";
import { useDisableScroll } from "../modals/helpers/modal_helpers";
import { useSelector } from "react-redux";
import {
  NavbarProfileContainer,
  NavbarProfileImage,
  NavbarProfileName,
  NavbarProfileOption,
  NavbarOptionsContainer,
} from "./navbar_styles/navbar_options";
import { Link } from "react-router-dom";
import NavOptionsItems from "./NavOptionsItems";

const MobileNav = () => {
  const navbarHeight = useSelector(
    ({ navbarState: { navbarHeight } }) => navbarHeight
  );
  const userState = useSelector(({ userState }) => userState);

  useDisableScroll();

  return (
    <Portal>
      <MobileNavContainer>
        <MobileNavContentContainer navbarHeight={navbarHeight}>
          <NavbarProfileContainer>
            <NavbarProfileImage src={userState.profileImage} />
            <Link to="/settings">
              <NavbarProfileName>{userState.name}</NavbarProfileName>
            </Link>
          </NavbarProfileContainer>
          <NavbarOptionsContainer>
            <Link to="/post">
              <NavbarProfileOption> Post </NavbarProfileOption>
            </Link>
            <Link to="/messages">
              <NavbarProfileOption> Messages </NavbarProfileOption>
            </Link>
          </NavbarOptionsContainer>
          <NavbarOptionsContainer>
            <Link to="/terms-of-service">
              <NavbarProfileOption> Terms </NavbarProfileOption>
            </Link>
            <Link to="/privacy-policy">
              <NavbarProfileOption> Privacy </NavbarProfileOption>
            </Link>
            <Link to="/about">
              <NavbarProfileOption> About </NavbarProfileOption>
            </Link>
          </NavbarOptionsContainer>
          <NavOptionsItems />
        </MobileNavContentContainer>
      </MobileNavContainer>
    </Portal>
  );
};

export default MobileNav;
