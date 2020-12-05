import React from "react";
import { useSelector } from "react-redux";

import {
  AttachedImagePreview,
  AttachedImagePreviewItem,
  RemoveAttachedImageIcon,
  AttachedImageItemContainer,
} from "./styles/conversation_button_styles";

const MessageInputAttachedImages = (props) => {
  const closeIcon = useSelector(
    ({ assetState: { WHITE_CLOSE_CIRCLE } }) => WHITE_CLOSE_CIRCLE
  );

  const onMouseEnterLeaveThumbnail = (displaySetting, event) => {
    if (event.target.parentElement.previousSibling) {
      event.target.parentElement.previousSibling.style.display = displaySetting;
    }
  };

  return (
    <AttachedImageItemContainer
      onMouseEnter={(e) => onMouseEnterLeaveThumbnail("block", e)}
      onMouseLeave={(e) => onMouseEnterLeaveThumbnail("none", e)}
    >
      <RemoveAttachedImageIcon
        src={closeIcon}
        alt="Remove attached image"
        onClick={() => props.removeAttachedImage(props.index)}
      />
      <AttachedImagePreview>
        <AttachedImagePreviewItem src={props.src} alt="Attached image" />
      </AttachedImagePreview>
    </AttachedImageItemContainer>
  );
};

export default MessageInputAttachedImages;
