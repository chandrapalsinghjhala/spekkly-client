import React, { useState, useRef } from "react";
import {
  onMessageContainerScroll,
  scrollToBottom,
  isUserAtBottom,
  onMessageContainerScrollNew,
} from "./helpers/conversation_message_display_helpers";
import {
  lastMessageStatusDispatch,
  newCurrentConversationMessagesDispatch,
  updateConversationOnMessageDeleteDispatch,
} from "../../../../redux/actions/message_actions";
import {
  ContentSection,
  FullHeightContainer,
} from "../../../containers/container";
import ConversationButtons from "./ConversationButtons";
import Loading from "../../../loading/Loading";
import ConversationMessageDisplay from "./ConversationMessageDisplay";
import Measure from "react-measure";
import ConversationHeading from "./ConversationHeading";
import { useSelector, useDispatch } from "react-redux";

const ConversationDetails = () => {
  const messageListContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [headingBoxHeight, setHeadingBoxHeight] = useState(0);
  const [buttonContainerHeight, setButtonContainerHeight] = useState(0);
  const [messages, setMessages] = useState([]);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [newMessageAdded, setNewMessageAdded] = useState(false);
  const dispatch = useDispatch();
  const messageState = useSelector(({ messageState }) => messageState);
  const navbarHeight = useSelector(
    ({ navbarState: { navbarHeight } }) => navbarHeight
  );
  const userId = useSelector(({ userState: { userId } }) => userId);
  const {
    currentConversation,
    newCurrentConversationMessages,
    lastMessageStatus,
    messageImagesLoaded,
    deleteMessages,
    updateConversationOnMessageDelete,
  } = messageState;

  const handleNewMessage = () => {
    const newCurrentConversationMessage = newCurrentConversationMessages.shift();

    if (
      messages.findIndex(
        (message) => message.tempId === newCurrentConversationMessage.tempId
      ) === -1
    ) {
      console.log("I m ");
      const messageAuthoredByUser =
        newCurrentConversationMessage.authoredUserId === userId;
      setMessages([...messages, newCurrentConversationMessage]);
      dispatch(
        newCurrentConversationMessagesDispatch(newCurrentConversationMessages)
      );
      setNewMessageAdded(true);

      if (
        messageAuthoredByUser ||
        (!messageAuthoredByUser && isUserAtBottom(messageListContainerRef))
      ) {
        scrollToBottom(setScrolledToBottom);
      }
    }
  };

  return (
    <ContentSection>
      {loading && <Loading loadingText="Loading Messages" solidBackground />}

      <FullHeightContainer>
        <Measure
          bounds
          onResize={({ bounds: { height } }) => setHeadingBoxHeight(height)}
        >
          {({ measureRef }) => (
            <div ref={measureRef}>
              <ConversationHeading />
            </div>
          )}
        </Measure>

        <ConversationMessageDisplay
          offsetHeight={headingBoxHeight + buttonContainerHeight}
          setMessages={setMessages}
          messages={messages}
          newMessageAdded={newMessageAdded}
          setScrolledToBottom={setScrolledToBottom}
          scrolledToBottom={scrolledToBottom}
          setNewMessageAdded={setNewMessageAdded}
        />

        <Measure
          bounds
          onResize={({ bounds: { height } }) =>
            setButtonContainerHeight(height)
          }
        >
          {({ measureRef }) => (
            <div ref={measureRef}>
              <ConversationButtons handleNewMessage={handleNewMessage} />
            </div>
          )}
        </Measure>
      </FullHeightContainer>
    </ContentSection>
  );
};

export default ConversationDetails;
