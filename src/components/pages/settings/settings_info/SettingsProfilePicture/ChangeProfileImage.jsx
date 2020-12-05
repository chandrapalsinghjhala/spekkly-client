import React, { useState } from "react";
import ChangeProfileImagePreview from "./ChangeProfileImagePreview";
import ChangeProfileImageSubmit from "./ChangeProfileImageSubmit";
import Loading from "../../../../loading/Loading";

import { ChooseProfilePictureContainer } from "./styles/change_profile_picture_styles";

const ChangeProfileImage = (props) => {
  const [croppedImage, setCroppedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {/* <Loading loading={loading} /> */}
      <ChooseProfilePictureContainer>
        <ChangeProfileImagePreview
          setCroppedImage={setCroppedImage}
          profileImage={props.profileImage}
        />
        <ChangeProfileImageSubmit
          croppedImage={croppedImage}
          setLoading={setLoading}
          showProfileUpdatedNotice={props.showProfileUpdatedNotice}
          setEditCompleteText={props.setEditCompleteText}
          closeEditProfilePicture={props.closeEditProfilePicture}
        />
      </ChooseProfilePictureContainer>
    </div>
  );
};

export default ChangeProfileImage;
