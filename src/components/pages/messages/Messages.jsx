import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../../../axios";

import ConversationsList from "./conversation_list_components/ConversationsList";
import ConversationDetails from "./conversation_message_components/ConversationDetails";
import VerifyEmailNotice from "../../notices/VerifyEmailNotice";

import { MessagesOuterContainer } from "./conversation_message_components/styles/message_container_styles";
import { StandardContainer } from "../../containers/container";
import { useDisableScroll } from "../../modals/helpers/modal_helpers";
import { getAuthHeader } from "../../../services/auth_header_services";
import { tabLandUp } from "../../media/media_helpers";
import Media from "react-media";
import { SearchSpacer } from "../home/styles/search_styles";
import InputLocation from "../../inputs/location/InputLocation";

import ToggleDisplay from "react-toggle-display";

const Messages = () => {
  const emailVerified = useSelector(
    ({ userState: { emailVerified } }) => emailVerified
  );
  const navbarHeight = useSelector(
    ({ navbarState: { navbarHeight } }) => navbarHeight
  );

  const { mobileActiveConversation } = useSelector(
    ({ messageState }) => messageState
  );

  useDisableScroll();

  const clearActiveConversation = async () => {
    try {
      await axios.delete(
        "/conversations/loaded_conversations",
        getAuthHeader()
      );
    } catch (e) {}
  };

  useEffect(() => {
    return () => {
      clearActiveConversation();
    };
  }, []);

  return (
    <div>
      {emailVerified && (
        <StandardContainer messages navbarHeight={navbarHeight}>
          <MessagesOuterContainer>
            <Media query={tabLandUp}>
              {(matches) => (
                <>
                  {matches && (
                    <>
                      <ConversationsList />
                      <ConversationDetails />
                    </>
                  )}

                  {!matches && (
                    <>
                      <ToggleDisplay show={!mobileActiveConversation}>
                        <ConversationsList />
                      </ToggleDisplay>
                      <ToggleDisplay show={mobileActiveConversation}>
                        <ConversationDetails />
                      </ToggleDisplay>
                    </>
                  )}
                </>
              )}
            </Media>
          </MessagesOuterContainer>
        </StandardContainer>
      )}

      {emailVerified === false && <VerifyEmailNotice />}
    </div>
  );
};

export default Messages;
