import {
  CURRENT_CONVERSATION,
  NEW_MESSAGES,
  NEW_CURRENT_CONVERSATION_MESSAGES,
  LAST_MESSAGE_STATUS,
  MESSAGE_IMAGES_LOADED,
  DELETE_MESSAGES,
  UPDATE_CONVERSATION_ON_MESSAGE_DELETE,
  RECIPIENT_ONLINE_CHANGE,
  MOBILE_ACTIVE_CONVERSATION,
} from "../constants/message_action_types";

export const newCurrentConversationMessagesDispatch = (
  newCurrentConversationMessages
) => ({
  type: NEW_CURRENT_CONVERSATION_MESSAGES,
  newCurrentConversationMessages,
});

export const messageImagesLoadedDispatch = (messageImagesLoaded) => ({
  type: MESSAGE_IMAGES_LOADED,
  messageImagesLoaded,
});

export const mobileActiveConversationDispatch = (mobileActiveConversation) => ({
  type: MOBILE_ACTIVE_CONVERSATION,
  mobileActiveConversation,
});

export const currentConversationDispatch = (currentConversation) => ({
  type: CURRENT_CONVERSATION,
  currentConversation,
});

export const recipientOnlineChangesDispatch = (recipientOnlineChanges) => ({
  type: RECIPIENT_ONLINE_CHANGE,
  recipientOnlineChanges,
});

export const newMessagesDispatch = (newMessages) => ({
  type: NEW_MESSAGES,
  newMessages,
});

export const deleteMessagesDispatch = (deleteMessages) => ({
  type: DELETE_MESSAGES,
  deleteMessages,
});

export const lastMessageStatusDispatch = (lastMessageStatus) => ({
  type: LAST_MESSAGE_STATUS,
  lastMessageStatus,
});

export const updateConversationOnMessageDeleteDispatch = (
  updateConversationOnMessageDelete
) => ({
  type: UPDATE_CONVERSATION_ON_MESSAGE_DELETE,
  updateConversationOnMessageDelete,
});
