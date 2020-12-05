import {
  MessageImageContainer,
  MessageImageInnerContainer,
} from "./styles/message_image_styles";
import ImageFadeIn from "react-image-fade-in";
import { messageImagesLoadedDispatch } from "../../../../../redux/actions/message_actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MessageImages = ({ message, nextMessage }) => {
  const dispatch = useDispatch();
  const messageImagesLoaded = useSelector(
    ({ messageState: { messageImagesLoaded } }) => messageImagesLoaded
  );
  return (
    <MessageImageContainer
      messagePresent={message.text && nextMessage}
      imagesLength={message.images.length}
    >
      {message.images.map((image, index) => (
        <MessageImageInnerContainer
          key={index}
          imagesLength={message.images.length}
          multipleImages={message.images.length > 0}
        >
          <ImageFadeIn
            src={image}
            onLoad={() =>
              dispatch(messageImagesLoadedDispatch(messageImagesLoaded + 1))
            }
            alt="Message image"
          />
        </MessageImageInnerContainer>
      ))}
    </MessageImageContainer>
  );
};

export default MessageImages;
