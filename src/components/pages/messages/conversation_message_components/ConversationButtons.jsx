import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import FileReaderInput from "react-file-reader-input";
import removeItems from "remove-array-items";
import uniqid from "uniqid";
import axios from "../../../../axios";
import Measure from "react-measure";

import { notBlank } from "../../../../services/validators/validators";
import FilledButton from "../../../buttons/FilledButton";
import {
  InputBox,
  RelativePositionContainer,
} from "../../../containers/container";
import {
  messageDelivered,
  messageNotDelivered,
} from "../../../../config/constants";

import {
  ButtonContainer,
  ConversationButtonIcon,
  SubmitMessageForm,
  AttachedImageContainer,
  InputArea,
} from "./styles/conversation_button_styles";

import MessageInputAttachedImages from "./MessageInputAttachedImages";
import { handleFileChange } from "../../../../helpers/image_helpers";
import InputError from "../../../inputs/InputError";
import {
  compressImages,
  postImages,
} from "../helpers/conversation_submit_images_helpers";
import { getAuthHeader } from "../../../../services/auth_header_services";
import {
  newMessagesDispatch,
  lastMessageStatusDispatch,
} from "../../../../redux/actions/message_actions";
import EmojiContainer from "./EmojiContainer";
import { tabLandUp } from "../../../media/media_helpers";
import Media from "react-media";

const ConversationButtons = ({ handleNewMessage }) => {
  const [attachedImages, setAttachedImages] = useState([]);
  const [attachedImageError, setAttachedImageError] = useState("");
  const [emojiOptionsOpen, setEmojiOptionsOpen] = useState(false);
  const [initialTextAreaHeight, setInitialTextAreaHeight] = useState(null);
  const [alignButtonsCenter, setAlignButtonsCenter] = useState(true);

  const assetState = useSelector(({ assetState }) => assetState);
  const userId = useSelector(({ userState: { userId } }) => userId);
  const currentConversation = useSelector(
    ({ messageState: { currentConversation } }) => currentConversation
  );
  const newMessages = useSelector(
    ({ messageState: { newMessages } }) => newMessages
  );

  const dispatch = useDispatch();

  let disabled = true;

  const uploadImageOptions = {
    operation: "add",
    attachedImages,
  };

  const removeAttachedImage = (index) => {
    removeItems(attachedImages, index, 1);
    setAttachedImages([...attachedImages]);
  };

  const createNewTempMessage = (text, images, id) => ({
    text,
    createdAt: Date.now(),
    id,
    realTimeMessage: true,
    images,
    authoredUserId: userId,
    conversationId: currentConversation.id,
    tempMessage: true,
  });

  const handleMessageUpdate = (
    messageText,
    attachedImages,
    messageTextTempId,
    messageImageTempId
  ) => {
    const tempMessages = [];

    if (messageText) {
      tempMessages.push(
        createNewTempMessage(messageText, [], messageTextTempId)
      );
    }

    if (attachedImages.length > 0) {
      tempMessages.push(
        createNewTempMessage(null, attachedImages, messageImageTempId)
      );
    }

    dispatch(lastMessageStatusDispatch(""));
    dispatch(newMessagesDispatch([...newMessages, ...tempMessages]));
  };

  const submitMessage = ({ messageText }, form) => {
    let imageFileNames = [];

    const messageTextTempId = uniqid();
    const messageImageTempId = uniqid();

    const messageTextFromForm = messageText;
    const attachedImagesFromForm = [...attachedImages];

    if (form) {
      form.change({ messageText: "" });
    }

    // handleMessageUpdate(
    //   messageTextFromForm,
    //   attachedImagesFromForm,
    //   messageTextTempId,
    //   messageImageTempId
    // );

    setAttachedImages([]);

    setTimeout(async () => {
      try {
        if (attachedImages.length > 0) {
          const compressedImages = await compressImages(attachedImagesFromForm);
          imageFileNames = await postImages(compressedImages);
        }

        const payload = {
          text: messageTextFromForm,
          recipientId: currentConversation.recipientId,
          conversationId: currentConversation.id,
          images: imageFileNames,
          messageTextTempId,
          messageImageTempId,
        };
        const {
          data: { success },
        } = await axios.post(
          "/conversations/messages",
          payload,
          getAuthHeader()
        );

        if (success) {
          dispatch(lastMessageStatusDispatch(messageDelivered));
        } else {
          throw new Error();
        }
      } catch (e) {
        dispatch(lastMessageStatusDispatch(messageNotDelivered));
      }
    }, 100);
  };

  const addEmoji = ([value], state, utils) => {
    utils.changeValue(state, "messageText", (prevValue) =>
      prevValue ? prevValue + value : value
    );
  };

  const handleTextAreaHeightChange = (height) => {
    if (initialTextAreaHeight === null) {
      setInitialTextAreaHeight(height);
    }

    if (initialTextAreaHeight) {
      if (height === initialTextAreaHeight) {
        setAlignButtonsCenter(true);
      } else {
        setAlignButtonsCenter(false);
      }
    }
  };

  return (
    <InputBox>
      <AttachedImageContainer>
        {attachedImages.map((image, index) => (
          <MessageInputAttachedImages
            key={index}
            src={image}
            index={index}
            removeAttachedImage={removeAttachedImage}
          />
        ))}
      </AttachedImageContainer>
      <ButtonContainer>
        <Form
          onSubmit={submitMessage}
          mutators={{ addEmoji }}
          render={({ form, handleSubmit, invalid, values }) => (
            <SubmitMessageForm
              onSubmit={handleSubmit}
              alignCenter={alignButtonsCenter}
            >
              <Field
                name="messageText"
                render={(props) => (
                  <InputArea
                    onHeightChange={handleTextAreaHeightChange}
                    maxRows={8}
                    {...props.input}
                  />
                )}
                validate={notBlank}
              />

              <FileReaderInput
                onChange={(e, results) =>
                  handleFileChange(
                    e,
                    results,
                    setAttachedImages,
                    setAttachedImageError,
                    uploadImageOptions
                  )
                }
              >
                <ConversationButtonIcon
                  src={assetState.ADD_IMAGE_ICON}
                  alt="Add image icon"
                />
              </FileReaderInput>

              <Media query={tabLandUp}>
                {(matches) =>
                  matches && (
                    <RelativePositionContainer>
                      <ConversationButtonIcon
                        onClick={() => setEmojiOptionsOpen(!emojiOptionsOpen)}
                        className={`conversation-emoji-button-ignore-outside-click`}
                        src={assetState.EMOJI_ICON}
                        alt="Add emoji icon"
                      />

                      {emojiOptionsOpen && (
                        <EmojiContainer
                          addEmoji={form.mutators.addEmoji}
                          outsideClickIgnoreClass={`conversation-emoji-button-ignore-outside-click`}
                          hideOptions={() => setEmojiOptionsOpen(false)}
                        />
                      )}
                    </RelativePositionContainer>
                  )
                }
              </Media>

              {(disabled = invalid && attachedImages.length === 0)}

              <Media query={tabLandUp}>
                {(matches) => (
                  <>
                    {matches && (
                      <FilledButton
                        buttonText="Send"
                        mlAuto
                        disabled={disabled}
                        disabledColor={disabled}
                        // onClick={handleNewMessage}
                        type="submit"
                      />
                    )}

                    {!matches && (
                      <button type="submit">
                        <ConversationButtonIcon
                          src={assetState.SEND_MESSAGE_ICON}
                          alt="send message icon"
                        />
                      </button>
                    )}
                  </>
                )}
              </Media>
            </SubmitMessageForm>
          )}
        />
      </ButtonContainer>
      {attachedImageError && <InputError error={attachedImageError} />}
    </InputBox>
  );
};

export default ConversationButtons;
