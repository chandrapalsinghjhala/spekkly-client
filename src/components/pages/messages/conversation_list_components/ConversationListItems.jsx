import React, { useState, useEffect } from "react";
import axios from "../../../../axios";
import { useSelector, useDispatch } from "react-redux";

import { currentConversationDispatch } from "../../../../redux/actions/message_actions";
import Loading from "../../../loading/Loading";
import {
  ConversationListContainer,
  NoConversationsText,
} from "./styles/conversation_list_styles";
import BottomScrollListener from "react-bottom-scroll-listener";
import ConversationListItem from "./ConversationListItem";
import { getAuthHeaderWithData } from "../../../../services/auth_header_services";
import { setNextPage } from "../../../../services/load_data_services";
import { Center } from "../../../alignment/Center";
import { GreyText } from "../../../text/text";
import {
  handleNewMessage,
  updateConversationUnread,
  updateConversationAfterLastMessageDelete,
  handleConversationOnlineStatusChange,
} from "./helpers/conversation_list_items_update_helper";

import {
  toggleMuteIcon,
  removeConversation,
} from "./helpers/conversation_list_items_conversation_ui_helpers";

const ConversationListItems = ({ conversationSearchContainerHeight }) => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [conversationsLoadedError, setConversationsLoadedError] = useState("");

  const messageState = useSelector(({ messageState }) => messageState);
  const navbarHeight = useSelector(
    ({ navbarState: { navbarHeight } }) => navbarHeight
  );

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const options = {
    conversations,
    setConversations,
    dispatch,
    state,
  };

  const {
    newMessages,
    currentConversation,
    updateConversationOnMessageDelete,
    recipientOnlineChanges,
  } = messageState;

  const getConversations = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "/conversations",
        getAuthHeaderWithData({ page })
      );
      setConversations([...conversations, ...data.conversations]);
      // console.log(data.conversations);
      setHasNextPage(data.hasNextPage);
      if (page === 1) {
        dispatch(currentConversationDispatch({ ...data.conversations[0] }));
      }
    } catch (e) {
      setConversationsLoadedError("Conversations could not be loaded");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (recipientOnlineChanges.length > 0) {
      handleConversationOnlineStatusChange(options);
    }
  }, [recipientOnlineChanges.length]);

  useEffect(() => {
    if (updateConversationOnMessageDelete.length > 0) {
      updateConversationAfterLastMessageDelete(options);
    }
  }, [updateConversationOnMessageDelete.length]);

  useEffect(() => {
    if (newMessages.length > 0) {
      handleNewMessage(options);
    }
  }, [newMessages.length]);

  useEffect(() => {
    getConversations();
  }, []);

  useEffect(() => {
    if (
      currentConversation.id &&
      currentConversation.unread &&
      conversations.length > 0
    ) {
      updateConversationUnread(options);
    }
  }, [conversations.length, currentConversation.id]);

  return (
    <BottomScrollListener
      onBottom={() => setNextPage(hasNextPage, loading, setPage, page)}
    >
      <ConversationListContainer
        conversationSearchContainerHeight={conversationSearchContainerHeight}
        navbarHeight={navbarHeight}
      >
        {loading && (
          <Loading
            solidBackground
            marginBottom={conversationSearchContainerHeight}
          />
        )}

        {conversations.length > 0 && (
          <div>
            {conversations.map((conversation, index) => (
              <ConversationListItem
                key={index}
                removeConversation={() =>
                  removeConversation(conversation.id, options)
                }
                toggleMuteIcon={() => toggleMuteIcon(conversation.id, options)}
                conversation={conversation}
              />
            ))}
          </div>
        )}

        {conversations.length === 0 && (
          <Center vertical h100>
            <GreyText>{conversationsLoadedError}</GreyText>
          </Center>
        )}

        {!loading && conversationsLoadedError && (
          <Center h100 vertical>
            <NoConversationsText
              marginBottom={conversationSearchContainerHeight}
            >
              {conversationsLoadedError}
            </NoConversationsText>
          </Center>
        )}
      </ConversationListContainer>
    </BottomScrollListener>
  );
};

export default ConversationListItems;
