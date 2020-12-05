import React, { useState } from "react";
import Measure from "react-measure";

import {
  ConversationContainer,
  ConversationSearchContainer,
  ConversationSearchInput,
} from "./styles/conversation_list_styles";

import ConversationListItems from "./ConversationListItems";
import { RelativePositionContainer } from "../../../containers/container";

const ConversationsList = () => {
  const [
    conversationSearchContainerHeight,
    setConversationSearchContainerHeight,
  ] = useState(0);

  return (
    <RelativePositionContainer>
      <div id="conversation-options" />
      <ConversationContainer>
        <Measure
          bounds
          onResize={({ bounds: { height } }) => {
            setConversationSearchContainerHeight(height);
          }}
        >
          {({ measureRef }) => (
            <ConversationSearchContainer ref={measureRef}>
              <ConversationSearchInput placeholder="Search Conversations" />
            </ConversationSearchContainer>
          )}
        </Measure>
        <ConversationListItems
          conversationSearchContainerHeight={conversationSearchContainerHeight}
        />
      </ConversationContainer>
    </RelativePositionContainer>
  );
};

export default ConversationsList;
