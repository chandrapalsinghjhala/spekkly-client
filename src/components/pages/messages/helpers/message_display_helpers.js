import nestedProperty from "nested-property";

export const nextMessageIsImageFromSameAuthor = (message, nextMessage) =>
  nestedProperty.get(nextMessage, "images.length") > 0 &&
  message.authoredUserId === nextMessage.authoredUserId;
