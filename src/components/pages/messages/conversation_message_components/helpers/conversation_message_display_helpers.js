import React from "react";
import Scroll from "react-scroll";

export const onMessageContainerScroll = async (
  e,
  hasNextPage,
  messageListContainerRef,
  getMessages
) => {
  if (e.target.scrollTop === 0 && hasNextPage) {
    const originalScrollHeight = messageListContainerRef.current.scrollHeight;
    await getMessages();
    const newScrollHeight = messageListContainerRef.current.scrollHeight;
    messageListContainerRef.current.scrollTop =
      newScrollHeight - originalScrollHeight;
  }
};

export const onMessageContainerScrollNew = async (
  e,
  hasNextPage,
  messageListContainerRef,
  page,
  setPage
) => {
  // console.log("I m here");
  if (e.target.scrollTop === 0 && hasNextPage) {
    const originalScrollHeight = messageListContainerRef.current.scrollHeight;

    const newScrollHeight = messageListContainerRef.current.scrollHeight;
    messageListContainerRef.current.scrollTop =
      newScrollHeight - originalScrollHeight;

    setPage(page + 1);
  }
};

export const scrollToBottom = (setScrolledToBottom) => {
  const scroller = Scroll.scroller;

  setTimeout(() => {
    scroller.scrollTo("lastMessagePosition", {
      containerId: "messageListContainer",
    });

    setScrolledToBottom(true);
  }, 0);
};

export const isUserAtBottom = (messageListContainerRef) => {
  const element = messageListContainerRef.current;
  return element.scrollTop + element.clientHeight === element.scrollHeight;
};
