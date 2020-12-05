import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import usePrevious from "use-previous";

import onClickOutside from "react-onclickoutside";
import {
  NavbarProfileOptionsContainer,
  NavbarProfileImage,
  NavbarProfileContainer,
  NavbarProfileName,
  NavbarSubOptionsContainer,
  SubLinkText,
} from "./navbar_styles/navbar_options";

import { OverflowContainer } from "../containers/container";
import NavOptionsItems from "./NavOptionsItems";

const NavbarProfileOptions = ({ closeNavProfileOptions }) => {
  const location = useLocation();

  const userState = useSelector(({ userState }) => userState);
  const previousLocation = usePrevious(location.pathname);

  useEffect(() => {
    if (previousLocation && previousLocation !== location.pathname) {
      closeNavProfileOptions();
    }
  }, [location]);

  NavbarProfileOptions.handleClickOutside = closeNavProfileOptions;

  return (
    <NavbarProfileOptionsContainer>
      <OverflowContainer>
        <NavbarProfileContainer>
          <NavbarProfileImage src={userState.profileImage} />
          <Link to="/settings">
            <NavbarProfileName>{userState.name}</NavbarProfileName>
          </Link>
        </NavbarProfileContainer>
        <NavOptionsItems />
        <NavbarSubOptionsContainer>
          <Link to="/terms-of-service">
            <SubLinkText> Terms </SubLinkText>
          </Link>
          <Link to="/privacy-policy">
            <SubLinkText> Privacy </SubLinkText>
          </Link>
          <Link to="/about">
            <SubLinkText> About </SubLinkText>
          </Link>
        </NavbarSubOptionsContainer>
      </OverflowContainer>
    </NavbarProfileOptionsContainer>
  );
};

NavbarProfileOptions.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => NavbarProfileOptions.handleClickOutside,
};

export default onClickOutside(NavbarProfileOptions, clickOutsideConfig);
