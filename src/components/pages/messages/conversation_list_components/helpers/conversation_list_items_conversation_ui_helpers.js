import removeItems from "remove-array-items";

export const toggleMuteIcon = (
  conversationIdToToggleMute,
  { conversations, setConversations }
) => {
  const index = conversations.findIndex(
    (conversation) => conversation.id === conversationIdToToggleMute
  );
  conversations[index].muted = !conversations[index].muted;
  setConversations([...conversations]);
};

export const removeConversation = (
  conversationId,
  { conversations, setConversations }
) => {
  const index = conversations.findIndex(
    (conversation) => conversation.id === conversationId
  );
  removeItems(conversations, index, 1);
  setConversations([...conversations]);
};
