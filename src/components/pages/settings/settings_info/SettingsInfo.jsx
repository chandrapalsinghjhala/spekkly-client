import React, { useState } from "react";
import { useSelector } from "react-redux";

import { InputBox } from "../../../containers/container";
import SettingsInfoShow from "./SettingsInfoShow";
import SettingsInfoEdit from "./SettingsInfoEdit";
import ChangeProfilePicture from "./SettingsProfilePicture/ChangeProfileImage";
import {
  SettingsProfileImage,
  SettingsProfileImageContainer,
} from "./SettingsProfilePicture/styles/settings_info_styles";
import Modal from "../../../modals/Modal";

const SettingsInfo = (props) => {
  const [showEditProfilePicture, setShowEditProfilePicture] = useState(false);
  const profileImage = useSelector(({ userState }) => userState.profileImage);

  const closeEditProfilePicture = () => {
    props.setEditActive(false);
    setShowEditProfilePicture(false);
  };

  const showProfileUpdatedNotice = () => {
    props.setEditCompleteText("Your profile has been updated");
  };

  return (
    <div>
      <InputBox borderBottom={true}>
        <SettingsProfileImageContainer>
          <SettingsProfileImage
            alt="profile image"
            src={profileImage}
            onClick={() => setShowEditProfilePicture(true)}
          />
        </SettingsProfileImageContainer>
      </InputBox>
      {!props.editActive && <SettingsInfoShow />}

      {props.editActive && (
        <SettingsInfoEdit
          getUpdatedUserData={props.getUpdatedUserData}
          setEditActive={props.setEditActive}
          setEditCompleteText={props.setEditCompleteText}
        />
      )}

      {showEditProfilePicture && (
        <Modal closeModal={closeEditProfilePicture} showCloseButton medium>
          <ChangeProfilePicture
            showProfileUpdatedNotice={showProfileUpdatedNotice}
            closeEditProfilePicture={closeEditProfilePicture}
          />
        </Modal>
      )}
    </div>
  );
};

export default SettingsInfo;
