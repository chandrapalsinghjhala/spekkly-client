import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Center,
  ProfileFormatted,
  ProfilePictureHeading,
  SubmitButtonContainer,
} from "./styles/change_profile_picture_styles";

import HollowButton from "../../../../buttons/HollowButton";
import FilledButton from "../../../../buttons/FilledButton";
import {
  compressImage,
  uploadCompressedImage,
} from "./profile_image_submit_helpers";
import InputError from "../../../../inputs/InputError";
import { profileImageChanged } from "../../../../../redux/actions/user_actions";

const ChangeProfileImageSubmit = (props) => {
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const currentProfileImage = useSelector(
    ({ userState: { profileImage } }) => profileImage
  );
  const profileImageChangedCurrentValue = useSelector(
    ({ userState: { profileImageChanged } }) => profileImageChanged
  );

  const handleSubmit = async () => {
    try {
      props.setLoading(true);
      const compressedImage = await compressImage(props.croppedImage);
      await uploadCompressedImage(compressedImage);
      dispatch(profileImageChanged(profileImageChangedCurrentValue + 1));
      props.closeEditProfilePicture();
      props.showProfileUpdatedNotice();
    } catch (e) {
      setError("Something went wrong");
    } finally {
      props.setLoading(false);
    }
  };

  return (
    <Center>
      <ProfilePictureHeading>Your Profile Picture</ProfilePictureHeading>
      <ProfileFormatted
        src={props.croppedImage ? props.croppedImage : currentProfileImage}
        alt="Formatted profile picture"
      />
      <SubmitButtonContainer>
        <HollowButton
          buttonText="Cancel"
          rightMargin
          onClick={props.closeEditProfilePicture}
        />
        <FilledButton
          type="submit"
          buttonText="Submit"
          disabled={!props.croppedImage}
          onClick={handleSubmit}
        />
      </SubmitButtonContainer>
      <InputError error={error} />
    </Center>
  );
};

export default ChangeProfileImageSubmit;
