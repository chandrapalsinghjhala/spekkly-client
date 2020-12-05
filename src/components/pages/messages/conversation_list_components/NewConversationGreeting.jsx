import React from "react";
import {
  NewConversationText,
  TimeStamp,
} from "../conversation_message_components/Message/styles/message_styles";

import { EmptyConversationContainer } from "../conversation_message_components/styles/message_container_styles";

import { formatMessageTimeStamp } from "../helpers/timestamp_helpers";

import { NewConversationProfileImage } from "../conversation_message_components/Message/styles/message_image_styles";
import { useSelector } from "react-redux";

const NewConversationGreeting = () => {
  const currentConversation = useSelector(
    ({ messageState: { currentConversation } }) => currentConversation
  );

  return (
    <div>
      {currentConversation.createdAt && (
        <EmptyConversationContainer>
          <TimeStamp first newMessage>
            {formatMessageTimeStamp(currentConversation.createdAt)}
          </TimeStamp>
          <NewConversationProfileImage
            src={currentConversation.recipientProfileImage}
          />
          <NewConversationText>
            {" "}
            Say hi to {currentConversation.recipientName}{" "}
          </NewConversationText>
        </EmptyConversationContainer>
      )}
    </div>
  );
};

export default NewConversationGreeting;
