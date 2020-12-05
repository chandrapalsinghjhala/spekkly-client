import {
  currentConversationDispatch,
  newCurrentConversationMessagesDispatch,
  newMessagesDispatch,
  recipientOnlineChangesDispatch,
  updateConversationOnMessageDeleteDispatch,
} from "../../../../../redux/actions/message_actions";
import axios from "../../../../../axios";
import {
  getAuthHeader,
  getAuthHeaderWithData,
} from "../../../../../services/auth_header_services";
import { userDataDispatch } from "../../../../../redux/actions/user_actions";
import { formatText } from "../../helpers/conversation_submit_images_helpers";
import arrayMove from "array-move";

const updateConversation = async (
  conversationIndex,
  conversations,
  newMessage,
  setConversations
) => {
  if (conversationIndex !== -1) {
    const conversation = conversations[conversationIndex];

    newMessage.text
      ? (conversation.latestMessageText = newMessage.text)
      : (conversation.latestMessageText = formatText(
          newMessage.text,
          newMessage.images
        ));

    conversation.lastMessageTimeStamp = newMessage.createdAt;
    setConversations(arrayMove(conversations, conversationIndex, 0));
  } else {
    const {
      data: { conversation },
    } = await axios.get(
      "/conversations",
      getAuthHeaderWithData({ conversation: newMessage.conversationId })
    );
    setConversations([conversation, ...conversations]);
  }
};

export const handleNewMessage = async ({
  conversations,
  setConversations,
  dispatch,
  state,
}) => {
  const { userId } = state.userState;
  const {
    newMessages,
    currentConversation,
    newCurrentConversationMessages,
  } = state.messageState;

  const newMessage = newMessages.shift();
  const conversationIndex = conversations.findIndex(
    (conversation) => conversation.id === newMessage.conversationId
  );

  await updateConversation(
    conversationIndex,
    conversations,
    newMessage,
    setConversations
  );

  if (newMessage.authoredUserId === userId) {
    dispatch(currentConversationDispatch(conversations[conversationIndex]));
  }

  if (newMessage.conversationId === currentConversation.id) {
    dispatch(
      newCurrentConversationMessagesDispatch([
        ...newCurrentConversationMessages,
        newMessage,
      ])
    );
  }

  dispatch(newMessagesDispatch([...newMessages]));
};

export const updateConversationUnread = async ({
  conversations,
  setConversations,
  dispatch,
  state,
}) => {
  const { currentConversation } = state.messageState;
  const { userState } = state;

  const conversationIndex = conversations.findIndex(
    (conversation) => conversation.id === currentConversation.id
  );

  conversations[conversationIndex].unread = false;
  setConversations([...conversations]);

  try {
    await axios.patch(
      `/conversations/${currentConversation.id}`,
      { readBy: userState.userId },
      getAuthHeader()
    );
    const unreadConversations = conversations.find(
      (conversation) => conversation.unread
    );
    if (!unreadConversations) {
      dispatch(userDataDispatch({ ...userState, hasUnreadMessages: false }));
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateConversationAfterLastMessageDelete = async ({
  conversations,
  setConversations,
  dispatch,
  state,
}) => {
  const { updateConversationOnMessageDelete } = state.messageState;

  const conversationId = updateConversationOnMessageDelete.shift();
  const {
    data: { conversation },
  } = await axios.get(`/conversations/${conversationId}`, getAuthHeader());

  const conversationIndex = conversations.findIndex(
    (conversation) => conversation.id === conversationId
  );
  conversations[conversationIndex] = conversation;
  setConversations([...conversations]);
  dispatch(
    updateConversationOnMessageDeleteDispatch([
      ...updateConversationOnMessageDelete,
    ])
  );
};

export const handleConversationOnlineStatusChange = ({
  conversations,
  setConversations,
  dispatch,
  state,
}) => {
  const { recipientOnlineChanges, currentConversation } = state.messageState;
  const recipientOnlineChange = recipientOnlineChanges.shift();

  const conversationIndex = conversations.findIndex(
    (conversation) =>
      conversation.recipientId === recipientOnlineChange.recipientUserId
  );

  conversations[conversationIndex].recipientIsOnline =
    recipientOnlineChange.isOnline;
  conversations[conversationIndex].recipientLastSignIn =
    recipientOnlineChange.recipientLastSignIn;

  setConversations([...conversations]);

  if (
    currentConversation.recipientId === recipientOnlineChange.recipientUserId
  ) {
    currentConversation.recipientIsOnline = recipientOnlineChange.isOnline;
    currentConversation.recipientLastSignIn =
      recipientOnlineChange.recipientLastSignIn;
  }

  dispatch(recipientOnlineChangesDispatch([...recipientOnlineChanges]));
  dispatch(currentConversationDispatch({ ...currentConversation }));
};
