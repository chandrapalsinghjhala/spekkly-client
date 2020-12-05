import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Scroll from "react-scroll";
import axios from "../../../../axios";
import removeItems from "remove-array-items";

import {
  MessageListContainer,
  MessagesContainer,
} from "./styles/message_container_styles";

import {
  lastMessageStatusDispatch,
  newCurrentConversationMessagesDispatch,
  updateConversationOnMessageDeleteDispatch,
} from "../../../../redux/actions/message_actions";

import { messageDelivered } from "../../../../config/constants";
import {
  onMessageContainerScroll,
  scrollToBottom,
  isUserAtBottom,
  onMessageContainerScrollNew,
} from "./helpers/conversation_message_display_helpers";

import NewConversationGreeting from "../conversation_list_components/NewConversationGreeting";
import { getAuthHeaderWithData } from "../../../../services/auth_header_services";
import { Center } from "../../../alignment/Center";
import ConversationRenderMessage from "./ConversationRenderMessage";
import Loading from "../../../loading/Loading";
import { GreyText } from "../../../text/text";

const ConversationMessageDisplay = (props) => {
  const Element = Scroll.Element;

  const messageListContainerRef = useRef(null);

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

  const [postsLoadingError, setPostsLoadingError] = useState("");
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const getMessages = async (pageP, conversationIdP) => {
    try {
      setLoading(true);
      setPostsLoadingError("");

      let tmpPage = pageP ? pageP : page;
      let tmpConId = conversationIdP ? conversationIdP : currentConversation.id;

      const payload = {
        page: tmpPage,
        conversationId: tmpConId,
      };

      const { data } = await axios.get(
        "/conversations/messages",
        getAuthHeaderWithData(payload)
      );

      if (data.success) {
        setHasNextPage(hasNextPage);

        if (tmpPage === 1) {
          props.setMessages(data.messages);
          dispatch(lastMessageStatusDispatch(messageDelivered));
        } else {
          props.setMessages([...data.messages, ...props.messages]);
        }
      } else {
        throw new Error();
      }
    } catch (e) {
      setPostsLoadingError("Messages could not loaded");
    } finally {
      setLoading(false);
    }
  };

  const handleNewMessage = () => {
    console.log(newCurrentConversationMessages);
    const newCurrentConversationMessage = newCurrentConversationMessages.shift();

    if (
      props.messages.findIndex(
        (message) => message.tempId === newCurrentConversationMessage.tempId
      ) === -1
    ) {
      const messageAuthoredByUser =
        newCurrentConversationMessage.authoredUserId === userId;
      props.setMessages([...props.messages, newCurrentConversationMessage]);
      dispatch(
        newCurrentConversationMessagesDispatch(newCurrentConversationMessages)
      );
      props.setNewMessageAdded(true);

      if (
        messageAuthoredByUser ||
        (!messageAuthoredByUser && isUserAtBottom(messageListContainerRef))
      ) {
        scrollToBottom(props.setScrolledToBottom);
      }
    }
  };

  const handleDeleteMessage = () => {
    const deleteMessageId = deleteMessages.shift();
    const deleteMessageIndex = props.messages.findIndex(
      (message) => message.id === deleteMessageId
    );

    if (props.messages.length === deleteMessageIndex + 1) {
      const newConversationUpdate = [
        ...updateConversationOnMessageDelete,
        props.messages[deleteMessageIndex].conversationId,
      ];
      dispatch(
        updateConversationOnMessageDeleteDispatch(newConversationUpdate)
      );
    }

    removeItems(props.messages, deleteMessageIndex, 1);
    props.setMessages([...props.messages]);
  };

  useEffect(() => {
    if (deleteMessages.length > 0) {
      handleDeleteMessage();
    }
  }, [deleteMessages.length]);

  useEffect(() => {
    if (newCurrentConversationMessages.length > 0) {
      handleNewMessage();
    }
  }, [newCurrentConversationMessages.length]);

  useEffect(() => {
    if (currentConversation.id) {
      if (page === 1) {
        getMessages(1, currentConversation.id);
        setPage(1);
      } else {
        props.setMessages([]);
        setPage(1);
      }
    }
  }, [currentConversation.id]);

  useEffect(() => {
    if (
      page === 2 &&
      props.messages.length > 0 &&
      lastMessageStatus &&
      !props.newMessageAdded
    ) {
      scrollToBottom(props.setScrolledToBottom);
    }
  }, [page, props.messages.length, lastMessageStatus, messageImagesLoaded]);

  useEffect(() => {
    if (currentConversation.id) {
      getMessages(page, currentConversation.id);
    }
  }, [page]);

  return (
    <MessageListContainer
      borderBottom
      navbarHeight={navbarHeight}
      offsetHeight={props.offsetHeight}
      ref={messageListContainerRef}
      onScroll={(e) =>
        onMessageContainerScrollNew(
          e,
          hasNextPage,
          messageListContainerRef,
          page,
          setPage
        )
      }
      id="messageListContainer"
    >
      {loading && page === 1 && <Loading solidBackground />}

      {postsLoadingError && (
        <Center vertical h100>
          <GreyText>{postsLoadingError}</GreyText>
        </Center>
      )}

      {!postsLoadingError && props.messages.length > 0 && (
        <div scrolledToBottom={props.scrolledToBottom}>
          {props.messages.map((message, index) => (
            <ConversationRenderMessage
              message={message}
              key={index}
              previousMessage={props.messages[index - 1]}
              nextMessage={props.messages[index + 1]}
              index={index}
            />
          ))}
        </div>
      )}

      <Element name="lastMessagePosition" />

      {!postsLoadingError && props.messages.length === 0 && (
        <NewConversationGreeting />
      )}
    </MessageListContainer>
  );
};

export default ConversationMessageDisplay;
