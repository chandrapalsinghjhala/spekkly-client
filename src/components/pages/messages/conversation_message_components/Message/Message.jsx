import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MessageStatus, MessageText } from "./styles/message_styles";

import {
  MessageContainer,
  MessagesInnerContainer,
  MessageProfileImage,
} from "../styles/message_container_styles";

import { getDaysDiff } from "../../helpers/timestamp_helpers";
import { FlexContainer } from "../../../../containers/container";
import MessageOptions from "./MessageOptions";
import MessageImages from "./MessageImages";

const Message = ({
  message,
  nextMessage,
  previousMessage,
  timeStampBefore,
  timeStampAfter,
}) => {
  // console.log(message);
  // console.log("EXT >>>", nextMessage);
  const [showOptions, setShowOptions] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const userId = useSelector(({ userState: { userId } }) => userId);
  const messageState = useSelector(({ messageState }) => messageState);

  const { lastMessageStatus, currentConversation } = messageState;
  const authored = userId === message.authoredUserId;
  const previousMessageIsSameAuthor =
    previousMessage &&
    message.authoredUserId === previousMessage.authoredUserId;
  const nextMessageIsSameAuthor =
    nextMessage && message.authoredUserId === nextMessage.authoredUserId;

  const isLastMessageInSeries = (message, nextMessage) => {
    if (!nextMessage) {
      return true;
    } else if (message.authoredUserId !== nextMessage.authoredUserId) {
      return true;
    } else {
      return 1 < getDaysDiff(message.createdAt, nextMessage.createdAt);
    }
  };

  const handleMouseLeave = () => {
    if (!openOptions) {
      setShowOptions(false);
    }
  };

  return (
    <MessageContainer
      key={message.id}
      isLastMessageInSeries={isLastMessageInSeries(message, nextMessage)}
      isLastMessage={!nextMessage}
      image={!message.text}
    >
      {isLastMessageInSeries(message, nextMessage) && !authored && (
        <MessageProfileImage
          src={currentConversation.recipientProfileImage}
          alt="Message profile image"
        />
      )}

      <MessagesInnerContainer
        authored={authored}
        isLastMessageInSeries={isLastMessageInSeries(message, nextMessage)}
        images={message.images.length > 0}
      >
        <FlexContainer
          alignCenter
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setShowOptions(true)}
        >
          {message.images.length > 0 && (
            <MessageImages message={message} nextMessage={nextMessage} />
          )}

          {message.text && (
            <MessageText
              authored={authored}
              timeStampAfter={timeStampAfter}
              timeStampBefore={timeStampBefore}
              previousMessageIsSameAuthor={previousMessageIsSameAuthor}
              nextMessageIsSameAuthor={nextMessageIsSameAuthor}
            >
              {message.text}
            </MessageText>
          )}

          {showOptions && (
            <MessageOptions
              authored={authored}
              hideMessageOptions={() => setShowOptions(false)}
              message={message}
              openOptions={openOptions}
              setOpenOptions={setOpenOptions}
            />
          )}
        </FlexContainer>

        {!nextMessage && authored && (
          <MessageStatus> {lastMessageStatus} </MessageStatus>
        )}
      </MessagesInnerContainer>
    </MessageContainer>
  );
};

export default Message;
