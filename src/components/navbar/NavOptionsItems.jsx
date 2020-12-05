import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  NavbarOptionsContainer,
  NavbarProfileOption,
} from "./navbar_styles/navbar_options";
import { logoutUser } from "../../services/logout";

const NavOptionsItems = () => {
  const history = useHistory();

  return (
    <NavbarOptionsContainer>
      <Link to="/posts">
        <NavbarProfileOption> My Posts </NavbarProfileOption>
      </Link>
      <Link to="/settings">
        <NavbarProfileOption> Settings </NavbarProfileOption>
      </Link>
      <NavbarProfileOption onClick={() => logoutUser(history)}>
        {" "}
        Sign Out{" "}
      </NavbarProfileOption>
    </NavbarOptionsContainer>
  );
};

export default NavOptionsItems;
