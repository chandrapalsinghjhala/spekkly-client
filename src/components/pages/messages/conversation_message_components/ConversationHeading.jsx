import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import isObjectEmpty from "is-object-empty";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import addSubtractDate from "add-subtract-date";
import humanInterval from "human-interval";
import { canonical } from "javascript-time-ago/gradation";
import sleep from "sleep-promise";

import {
  ConversationHeadingContainer,
  ConversationImage,
  ConversationHeadingText,
  ConversationActiveText,
  MobileBackButton,
} from "./styles/conversation_heading_styles";

import {
  InputBox,
  RelativePositionContainer,
} from "../../../containers/container";
import { ConversationOnlineIndicator } from "../conversation_list_components/styles/conversation_item_styles";
import Media from "react-media";
import { tabPortDown } from "../../../media/media_helpers";
import { mobileActiveConversationDispatch } from "../../../../redux/actions/message_actions";

TimeAgo.addLocale(en);

const ConversationHeading = () => {
  const timeAgo = new TimeAgo("en-US");
  const currentConversation = useSelector(
    ({ messageState: { currentConversation } }) => currentConversation
  );
  const assetState = useSelector(({ assetState }) => assetState);

  const dispatch = useDispatch();

  const [update, setUpdate] = useState(0);

  const handleUpdate = async () => {
    await sleep(humanInterval("10 minutes"));
    setUpdate(update + 1);
  };

  useEffect(() => {
    handleUpdate();
  }, [update]);

  let activeText;
  if (currentConversation.recipientIsOnline) {
    activeText = "Online Now";
  } else {
    const date = new Date(currentConversation.recipientLastSignIn);
    if (currentConversation.recipientLastSignIn) {
      activeText = timeAgo.format(
        addSubtractDate.subtract(date, 1, "seconds"),
        {
          gradation: canonical,
        }
      );
    }
  }

  return (
    <InputBox
      smallPadding
      borderBottom
      emptyConversation={isObjectEmpty(currentConversation)}
    >
      {currentConversation.recipientLastSignIn && (
        <ConversationHeadingContainer>
          <Media query={tabPortDown}>
            {(matches) =>
              matches && (
                <MobileBackButton
                  src={assetState.BACK_ICON}
                  onClick={() => {
                    dispatch(mobileActiveConversationDispatch(false));
                  }}
                />
              )
            }
          </Media>
          <RelativePositionContainer>
            <ConversationImage
              src={currentConversation.recipientProfileImage}
            />
            {currentConversation.recipientIsOnline && (
              <ConversationOnlineIndicator headingIndicator />
            )}
          </RelativePositionContainer>
          <div>
            <ConversationHeadingText>
              {currentConversation.recipientName}
            </ConversationHeadingText>
            <ConversationActiveText>{activeText}</ConversationActiveText>
          </div>
        </ConversationHeadingContainer>
      )}
    </InputBox>
  );
};

export default ConversationHeading;
