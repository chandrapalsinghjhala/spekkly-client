import React, { useState } from "react";
import {
  ProfileImage,
  ProfileNameContainer,
  ProfileName,
  ProfileDetailsContainer,
} from "./styles/side_profile_styles";
import { useDispatch, useSelector } from "react-redux";
import FilledButton from "../buttons/FilledButton";
import { startNewConversation } from "../pages/home/helpers/home_profile_helpers";
import { useHistory } from "react-router-dom";
import { LineSpaceText } from "../text/text";
import { SectionTitle } from "./styles/postDetailsStyles";

const PostProfileInfoModal = ({ profile }) => {
  const currentUserId = useSelector(({ userState }) => userState.userId);

  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div>
      <ProfileNameContainer profileModal>
        <ProfileImage
          src={profile.profileImage}
          profileModal
          alt="Author's profile picture"
        />
        <ProfileName profileModal>{profile.name}</ProfileName>

        {currentUserId && currentUserId !== profile.id && (
          <FilledButton
            buttonText={"Message"}
            mlAuto
            onClick={() => startNewConversation(profile.id, dispatch, history)}
            small
          />
        )}
      </ProfileNameContainer>
      <ProfileDetailsContainer>
        <div>
          <SectionTitle>Job Title</SectionTitle>
          <div>{profile.jobTitle}</div>
        </div>

        <div>
          <SectionTitle>Bio</SectionTitle>
          <LineSpaceText>{profile.bio}</LineSpaceText>
        </div>
      </ProfileDetailsContainer>
    </div>
  );
};

export default PostProfileInfoModal;
