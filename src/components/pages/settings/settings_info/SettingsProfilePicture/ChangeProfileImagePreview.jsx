import React, { useState, useEffect } from "react";
import imageDataURI from "image-data-uri";
import { useSelector } from "react-redux";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import FileReaderInput from "react-file-reader-input";
import isUrl from "is-url";
import { handleFileChange } from "../../../../../helpers/image_helpers";

import {
  CropNotice,
  UploadButton,
} from "./styles/change_profile_picture_styles";
import FilledButton from "../../../../buttons/FilledButton";
import InputError from "../../../../inputs/InputError";
import { getImageBlob } from "./profile_image_preview_helper";
import { Center } from "../../../../alignment/Center";

let imageRef = {};

const ChangeProfileImagePreview = (props) => {
  const crop = {
    unit: "%",
    aspect: 1,
  };

  const profileImage = useSelector(
    ({ userState: { profileImage } }) => profileImage
  );

  const [currentRawImage, setCurrentRawImage] = useState("");
  const [imageFileTypeError, setImageFileTypeError] = useState("");
  const [imageCrop, setImageCrop] = useState(crop);

  useEffect(() => {
    setCurrentRawImage(profileImage);
  }, [profileImage]);

  useEffect(() => {
    if (currentRawImage) {
      formatRawImage();
    }
  }, [currentRawImage]);

  const onCropComplete = (crop) => {
    if (crop.width !== 0) {
      props.setCroppedImage(getImageBlob(imageRef, crop));
    }
  };

  const formatRawImage = async () => {
    if (isUrl(currentRawImage)) {
      const imageAsUrl = await imageDataURI.encodeFromURL(currentRawImage);
      setCurrentRawImage(imageAsUrl);
    }
  };

  return (
    <Center>
      <ReactCrop
        src={currentRawImage}
        onChange={(crop) => setImageCrop(crop)}
        onComplete={onCropComplete}
        onImageLoaded={(image) => (imageRef = image)}
        crop={imageCrop}
      />
      <Center mtAuto>
        <CropNotice> Drag to choose the crop area </CropNotice>
        <UploadButton>
          <FileReaderInput
            as="url"
            id="fileReader"
            onChange={(e, results) =>
              handleFileChange(
                e,
                results,
                setCurrentRawImage,
                setImageFileTypeError
              )
            }
          >
            <FilledButton buttonText="Upload" />
          </FileReaderInput>
          <InputError error={imageFileTypeError} />
        </UploadButton>
      </Center>
    </Center>
  );
};

export default ChangeProfileImagePreview;
