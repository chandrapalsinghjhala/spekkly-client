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

const initialState = {
  newMessages: [],
  recipientOnlineChanges: [],
  messageImagesLoaded: 0,
  newCurrentConversationMessages: [],
  updateConversationOnMessageDelete: [],
  lastMessageStatus: null,
  mobileActiveConversation: false,
  deleteMessages: [],
  currentConversation: {},
};

const messageState = (state = initialState, action) => {
  if (action.type === CURRENT_CONVERSATION) {
    return { ...state, currentConversation: action.currentConversation };
  } else if (action.type === NEW_MESSAGES) {
    return { ...state, newMessages: action.newMessages };
  } else if (action.type === NEW_CURRENT_CONVERSATION_MESSAGES) {
    return {
      ...state,
      newCurrentConversationMessages: action.newCurrentConversationMessages,
    };
  } else if (action.type === LAST_MESSAGE_STATUS) {
    return { ...state, lastMessageStatus: action.lastMessageStatus };
  } else if (action.type === MESSAGE_IMAGES_LOADED) {
    return { ...state, messageImagesLoaded: action.messageImagesLoaded };
  } else if (action.type === DELETE_MESSAGES) {
    return { ...state, deleteMessages: action.deleteMessages };
  } else if (action.type === UPDATE_CONVERSATION_ON_MESSAGE_DELETE) {
    return {
      ...state,
      updateConversationOnMessageDelete:
        action.updateConversationOnMessageDelete,
    };
  } else if (action.type === RECIPIENT_ONLINE_CHANGE) {
    return { ...state, recipientOnlineChanges: action.recipientOnlineChanges };
  } else if (action.type === MOBILE_ACTIVE_CONVERSATION) {
    return {
      ...state,
      mobileActiveConversation: action.mobileActiveConversation,
    };
  }

  return state;
};

export default messageState;
