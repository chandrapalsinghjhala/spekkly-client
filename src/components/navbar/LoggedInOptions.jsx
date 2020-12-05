import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ProfileImage, LoggedInContainer } from "./navbar_styles/navbar_styles";
import NavbarProfileOptions from "./NavbarProfileOptions";
import { useSelector } from "react-redux";
import { RelativePositionContainer } from "../containers/container";
import { NavbarNotification } from "../notifications/navbar_notification_styles";

const LoggedInOptions = () => {
  const userState = useSelector(({ userState }) => userState);
  const [isNavProfileOptionsOpen, setIsNavProfileOptionsOpen] = useState(false);
  const { profileImage, hasUnreadMessages } = userState;

  const closeNavProfileOptions = () => {
    setIsNavProfileOptionsOpen(false);
  };

  const getProfilePicture = (profileImageChanged, profileImage) => {
    return profileImageChanged
      ? `${profileImage}?${profileImageChanged}`
      : profileImage;
  };

  return (
    <LoggedInContainer>
      <Link to="/post">Post</Link>

      <RelativePositionContainer>
        <Link to="/messages">Messages</Link>

        {hasUnreadMessages && <NavbarNotification />}
      </RelativePositionContainer>

      <ProfileImage
        onClick={() => setIsNavProfileOptionsOpen(!isNavProfileOptionsOpen)}
        className="ignore-react-onclickoutside"
        src={getProfilePicture(null, profileImage)}
      />

      {isNavProfileOptionsOpen && (
        <NavbarProfileOptions closeNavProfileOptions={closeNavProfileOptions} />
      )}
    </LoggedInContainer>
  );
};

export default LoggedInOptions;
