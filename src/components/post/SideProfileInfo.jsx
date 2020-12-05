import React, { useState } from "react";
import FilledButton from "../buttons/FilledButton";
import "../icons/icon_styles.scss";
import { useHistory } from "react-router-dom";

import { SideProfileContainer } from "./styles/side_profile_styles";
import PostProfileInfo from "./PostProfileInfo";
import { useSelector } from "react-redux";
import PostProfileBio from "./PostProfileBio";
import { startNewConversation } from "../pages/home/helpers/home_profile_helpers";
import Modal from "../modals/Modal";
import PostProfileInfoModal from "./PostProfileInfoModal";

const SideProfileInfo = ({ post: { belongsToUser } }) => {
  const profile = belongsToUser;
  const currentUserId = useSelector(({ userState }) => userState.userId);
  const [showPostProfileInfoModal, setShowPostProfileInfoModal] = useState(
    false
  );
  const [
    createNewConversationLoading,
    setCreateNewConversationLoading,
  ] = useState(false);

  const history = useHistory();

  const postAuthoredByCurrentUser = () => profile.id === currentUserId;
  const closeModal = () => setShowPostProfileInfoModal(false);

  return (
    <SideProfileContainer>
      {profile && (
        <div>
          <PostProfileInfo
            profile={profile}
            setShowPostProfileInfoModal={setShowPostProfileInfoModal}
            postAuthoredByCurrentUser={postAuthoredByCurrentUser()}
          />

          <PostProfileBio
            profile={profile}
            setShowPostProfileInfoModal={setShowPostProfileInfoModal}
          />

          {profile && currentUserId && !postAuthoredByCurrentUser() && (
            <FilledButton
              buttonText="Message"
              rightSideLoading
              loading={createNewConversationLoading}
              onClick={() =>
                startNewConversation(
                  profile.id,
                  history,
                  setCreateNewConversationLoading
                )
              }
              small
            />
          )}

          {profile && showPostProfileInfoModal && (
            <Modal closeModal={closeModal}>
              <PostProfileInfoModal closeModal={closeModal} profile={profile} />
            </Modal>
          )}
        </div>
      )}
    </SideProfileContainer>
  );
};

export default SideProfileInfo;
