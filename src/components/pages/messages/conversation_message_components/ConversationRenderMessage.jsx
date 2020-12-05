import React from "react";
import uniqid from "uniqid";

import {
  formatMessageTimeStamp,
  getDaysDiff,
} from "../helpers/timestamp_helpers";
import { TimeStamp } from "./Message/styles/message_styles";
import Message from "./Message/Message";

const ConversationRenderMessage = ({
  message,
  index,
  nextMessage,
  previousMessage,
}) => {
  // console.log(message);
  const timeStampAfter =
    nextMessage && 1 < getDaysDiff(message.createdAt, nextMessage.createdAt);
  const timeStampBefore =
    previousMessage &&
    1 < getDaysDiff(message.createdAt, previousMessage.createdAt);

  return (
    <>
      {index === 0 && (
        <TimeStamp key={uniqid()} firstMessage>
          {formatMessageTimeStamp(message.createdAt)}
        </TimeStamp>
      )}

      <Message
        key={message.id}
        previousMessage={previousMessage}
        message={message}
        timeStampBefore={timeStampBefore}
        timeStampAfter={timeStampAfter}
        nextMessage={nextMessage}
      />

      {timeStampAfter && (
        <TimeStamp key={uniqid()}>
          {" "}
          {formatMessageTimeStamp(nextMessage.createdAt)}{" "}
        </TimeStamp>
      )}
    </>
  );
};

export default ConversationRenderMessage;
