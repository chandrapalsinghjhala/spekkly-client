import React from "react";
import Icon from "../../../icons/Icon";
import Measure from "react-measure";
import { useSelector } from "react-redux";

import { ConversationOptionsContainer } from "./styles/conversation_options_styles";

const ConversationOptionsIcon = (props) => {
  const OPTIONS_ICON = useSelector(
    ({ assetState: { OPTIONS_ICON } }) => OPTIONS_ICON
  );

  return (
    <Measure
      bounds
      onResize={({ bounds }) => props.setConversationOptionsIconBounds(bounds)}
    >
      {({ measureRef }) => (
        <ConversationOptionsContainer ref={measureRef}>
          <div
            ref={props.conversationOptionsIconRef}
            onClick={() => props.setShowOptions(!props.showOptions)}
            className={`messages-ignore-outside-click-${props.conversation.id}`}
          >
            <Icon
              src={OPTIONS_ICON}
              svgClasses={["standard-icon", "mute-icon"]}
            />
          </div>
        </ConversationOptionsContainer>
      )}
    </Measure>
  );
};

export default ConversationOptionsIcon;
