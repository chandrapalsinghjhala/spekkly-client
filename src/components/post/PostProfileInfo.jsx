import React, { useState } from "react";
import {
  SideProfileOptionsContainer,
  ProfileImage,
  ProfileNameContainer,
} from "./styles/side_profile_styles";
import { BoldText } from "../text/text";
import { ReactSvgInjector } from "react-svg-injector";
import UserOptions from "./UserOptions";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";

const PostProfileInfo = ({
  profile,
  postAuthoredByCurrentUser,
  setShowPostProfileInfoModal,
}) => {
  const [optionsActive, setOptionsActive] = useState(false);
  const isLoggedIn = useSelector(({ sessionState }) => sessionState.isLoggedIn);
  const optionsIcon = useSelector(
    ({ assetState: { OPTIONS_ICON } }) => OPTIONS_ICON
  );

  return (
    <ProfileNameContainer>
      <ProfileImage src={profile.profileImage} alt="Author's profile picture" />
      <BoldText clickable onClick={() => setShowPostProfileInfoModal(true)}>
        {profile.name}
      </BoldText>
      {!postAuthoredByCurrentUser && isLoggedIn && (
        <SideProfileOptionsContainer
          onClick={() => setOptionsActive(true)}
          className="post-profile-options-ignore-click"
          src={optionsIcon}
          beforeInjection={(svg) => {
            svg.classList.add("standard-icon");
            svg.classList.add("three-dots-options-small");
          }}
        />
      )}

      {optionsActive && (
        <UserOptions
          user={profile}
          outsideClickIgnoreClass="post-profile-options-ignore-click"
          hideOptions={() => setOptionsActive(false)}
        />
      )}
    </ProfileNameContainer>
  );
};

export default PostProfileInfo;
