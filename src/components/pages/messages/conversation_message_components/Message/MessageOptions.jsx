import {
  MessageIconContainer,
  MessageOptionsContainer,
  MessageTimestamp,
} from "./styles/message_styles";
import { formatMessageTimeStamp } from "../../helpers/timestamp_helpers";
import Icon from "../../../../icons/Icon";
import React from "react";
import { useSelector } from "react-redux";
import MessageOptionsBox from "./MessageOptionsBox";

const MessageOptions = ({
  authored,
  setOpenOptions,
  openOptions,
  message,
  hideMessageOptions,
}) => {
  const messageOptionsIcon = useSelector(
    ({ assetState: { OPTIONS_ICON } }) => OPTIONS_ICON
  );

  const hideOptions = () => {
    hideMessageOptions();
    setOpenOptions(false);
  };

  return (
    <MessageOptionsContainer authored={authored}>
      <MessageTimestamp>
        {formatMessageTimeStamp(message.createdAt)}
      </MessageTimestamp>

      {authored && (
        <MessageIconContainer
          authored={authored}
          onClick={() => setOpenOptions(true)}
          className={`message-options-ignore-click`}
        >
          <Icon
            svgClasses={["standard-icon", "three-dots-options-small"]}
            src={messageOptionsIcon}
          />
        </MessageIconContainer>
      )}

      {authored && openOptions && (
        <MessageOptionsBox
          message={message}
          hideOptions={hideOptions}
          outsideClickIgnoreClass={`message-options-ignore-click`}
        />
      )}
    </MessageOptionsContainer>
  );
};

export default MessageOptions;
