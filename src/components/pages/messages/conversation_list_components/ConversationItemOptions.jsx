import React, { useEffect, useState } from "react";
import { Portal } from "react-portal";
import Measure from "react-measure";
import onClickOutside from "react-onclickoutside";

import { ConversationOptionContainer } from "./styles/conversation_list_styles";
import { Option, OptionsContainer } from "../../../options/option_styles";
import axios from "../../../../axios";
import {
  getAuthHeader,
  getAuthHeaderWithData,
} from "../../../../services/auth_header_services";
import BlockUserModal from "../../../modals/BlockUserModal";

const ConversationItemOptions = (props) => {
  const conversation = props.conversation;
  const [conversationOptionsBounds, setConversationOptionsBounds] = useState(
    {}
  );
  const [showBlockUserModal, setShowBlockUserModal] = useState(false);
  const [
    conversationOptionsAreVisible,
    setConversationOptionsAreVisible,
  ] = useState(true);

  const user = {
    id: conversation.recipientId,
    name: conversation.recipientName,
  };

  ConversationItemOptions.handleClickOutside = () => props.hideOptions();

  const handleMute = async () => {
    const payload = {
      conversationId: conversation.id,
      mute: !conversation.muted,
    };

    const {
      data: { success },
    } = await axios.patch("/conversations/mute", payload, getAuthHeader());

    if (success) {
      props.toggleMuteIcon(conversation.id);
    }
  };

  const deleteConversation = async () => {
    const data = {
      conversationId: conversation.id,
    };
    const {
      data: { success },
    } = await axios.delete("/conversations", getAuthHeaderWithData(data));
    if (success) {
      props.removeConversation(conversation.id);
    }
  };

  useEffect(() => {
    if (
      props.windowBounds.windowHeight -
        props.conversationOptionsIconBounds.bottom <
      conversationOptionsBounds.height
    ) {
      setConversationOptionsAreVisible(false);
    } else {
      setConversationOptionsAreVisible(true);
    }
  }, [props.windowBounds.windowHeight]);

  const handleBlockedUserConfirmation = () => {
    props.hideOptions();
    props.removeConversation(conversation.id);
  };

  return (
    <Portal node={document && document.getElementById("conversation-options")}>
      <Measure
        bounds
        onResize={({ bounds }) => setConversationOptionsBounds(bounds)}
      >
        {({ measureRef }) => (
          <div>
            <ConversationOptionContainer
              conversationOptionsIconBounds={
                props.conversationOptionsIconBounds
              }
              conversationOptionsAreVisible={conversationOptionsAreVisible}
              conversationOptionsBounds={conversationOptionsBounds}
            >
              <OptionsContainer ref={measureRef} conversationOptions>
                <Option onClick={handleMute}>
                  {props.conversation.muted ? "Unmute" : "Mute"}
                </Option>
                <Option onClick={deleteConversation}>Delete</Option>
                <Option onClick={() => setShowBlockUserModal(true)}>
                  Block
                </Option>
              </OptionsContainer>
            </ConversationOptionContainer>
          </div>
        )}
      </Measure>

      {showBlockUserModal && (
        <BlockUserModal
          user={user}
          handleBlockedUserConfirmation={handleBlockedUserConfirmation}
          outsideClickIgnoreClass={props.outsideClickIgnoreClass}
          closeModal={() => setShowBlockUserModal(false)}
        />
      )}
    </Portal>
  );
};

ConversationItemOptions.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => ConversationItemOptions.handleClickOutside,
};

export default onClickOutside(ConversationItemOptions, clickOutsideConfig);
