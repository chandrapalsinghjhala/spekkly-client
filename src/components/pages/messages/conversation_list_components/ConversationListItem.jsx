import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WindowSizeListener from "react-window-size-listener";
import { useSwipeable } from "react-swipeable";

import {
  currentConversationDispatch,
  mobileActiveConversationDispatch,
} from "../../../../redux/actions/message_actions";
import { formatMessageTimeStamp } from "../helpers/timestamp_helpers";
import "../../../icons/icon_styles.scss";
import ConversationItemOptions from "./ConversationItemOptions";

import { MuteIcon } from "./styles/conversation_list_styles";
import ConversationOptionsIcon from "./ConversationOptionsIcon";
import {
  ConversationDate,
  ConversationThumbnail,
  ConversationOnlineIndicator,
  ConversationItemInnerContainer,
  ConversationPreviewText,
  ConversationRecipientContainer,
  ConversationItemContainer,
  ConversationNameText,
} from "./styles/conversation_item_styles";

import { ConversationOptionsContainer } from "./styles/conversation_options_styles";
import Truncate from "react-truncate";
import { RelativePositionContainer } from "../../../containers/container";

const ConversationListItem = (props) => {
  const [showOptionIcon, setShowOptionIcon] = useState(false);
  const [windowBounds, setWindowBounds] = useState({});

  const [
    conversationOptionsIconBounds,
    setConversationOptionsIconBounds,
  ] = useState({});
  const assetState = useSelector(({ assetState }) => assetState);
  const { currentConversation } = useSelector(
    ({ messageState }) => messageState
  );
  const [showOptions, setShowOptions] = useState(false);
  const conversationOptionsIconRef = useRef({});
  const conversation = props.conversation;
  const selected = conversation.id === currentConversation.id;

  const handleShowOptions = () => {
    setShowOptionIcon(true);
  };

  const handleHideOptions = () => {
    if (!showOptions) {
      setShowOptionIcon(false);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleShowOptions,
    onSwipedRight: handleHideOptions,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (showOptionIcon) {
      setConversationOptionsIconBounds(
        conversationOptionsIconRef.current.getBoundingClientRect()
      );
    }
  }, [showOptionIcon]);

  const hideOptions = () => {
    setShowOptions(false);
    setShowOptionIcon(false);
  };

  const handleConversationItemClick = () => {
    dispatch(currentConversationDispatch(conversation));
    dispatch(mobileActiveConversationDispatch(true));
  };

  return (
    <WindowSizeListener onResize={(window) => setWindowBounds(window)}>
      {currentConversation && (
        <ConversationItemContainer
          onMouseEnter={handleShowOptions}
          onMouseLeave={handleHideOptions}
          {...swipeHandlers}
          selected={selected}
          onClick={handleConversationItemClick}
        >
          <RelativePositionContainer>
            <ConversationThumbnail
              src={conversation.recipientProfileImage}
              alt="Conversation recipient photo"
            />
            {conversation.recipientIsOnline && (
              <ConversationOnlineIndicator selected={selected} />
            )}
          </RelativePositionContainer>

          <ConversationRecipientContainer>
            <ConversationItemInnerContainer>
              <ConversationNameText unreadMessages={conversation.unread}>
                {conversation.recipientName}
              </ConversationNameText>
              <ConversationDate>
                {formatMessageTimeStamp(conversation.lastMessageTimeStamp)}
              </ConversationDate>
            </ConversationItemInnerContainer>

            <ConversationItemInnerContainer>
              <ConversationPreviewText unreadMessages={conversation.unread}>
                <Truncate trimWhitespace>
                  {conversation.latestMessageText ||
                    `Send your first first message to ${conversation.recipientName}`}
                </Truncate>
              </ConversationPreviewText>

              {showOptionIcon && (
                <ConversationOptionsIcon
                  setConversationOptionsIconBounds={
                    setConversationOptionsIconBounds
                  }
                  conversation={conversation}
                  showOptions={showOptions}
                  setShowOptions={setShowOptions}
                  conversationOptionsIconRef={conversationOptionsIconRef}
                />
              )}

              {!showOptionIcon && conversation.muted && (
                <ConversationOptionsContainer>
                  <MuteIcon
                    src={assetState.MUTE_CONVERSATION_ICON}
                    beforeInjection={(svg) => {
                      svg.classList.add("standard-icon");
                      svg.classList.add("three-dots-options-small");
                    }}
                  />
                </ConversationOptionsContainer>
              )}
            </ConversationItemInnerContainer>
          </ConversationRecipientContainer>
          {showOptions && (
            <ConversationItemOptions
              hideOptions={hideOptions}
              outsideClickIgnoreClass={`conversation-ignore-outside-click`}
              toggleMuteIcon={props.toggleMuteIcon}
              windowBounds={windowBounds}
              removeConversation={props.removeConversation}
              conversationOptionsIconBounds={conversationOptionsIconBounds}
              conversation={conversation}
            />
          )}
        </ConversationItemContainer>
      )}
    </WindowSizeListener>
  );
};

export default ConversationListItem;
