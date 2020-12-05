import React, { useState } from "react";
import Modal from "./Modal";
import ConfirmAlert from "./ConfirmAlert";
import Notice from "../notices/Notice";
import axios from "../../axios";
import { getAuthHeader } from "../../services/auth_header_services";
import { useHistory } from "react-router-dom";

const BlockUserModal = (props) => {
  const user = props.user;
  const [showBlockConfirmation, setShowBlockConfirmation] = useState(false);

  const blockUser = async () => {
    const payload = {
      blockedUserId: user.id,
      blockUser: true,
    };
    const {
      data: { success },
    } = await axios.patch("/users/blocked_users", payload, getAuthHeader());

    if (!success) {
      throw new Error();
    }

    setShowBlockConfirmation(true);
  };

  return (
    <Modal
      closeModal={props.closeModal}
      outsideClickIgnoreClass={props.outsideClickIgnoreClass}
    >
      {!showBlockConfirmation && (
        <ConfirmAlert
          heading={`Block ${user.name}`}
          action={blockUser}
          text={`Are you sure you want to block ${user.name}? This person will no longer be visible or able to communicate with you on Spekkly.`}
          buttonText="Block"
        />
      )}

      {showBlockConfirmation && (
        <Notice
          heading="Success"
          buttonText="Got it"
          handleNoticeConfirm={props.handleBlockedUserConfirmation}
          text={`${user.name} has been blocked and will no longer be able to communicate with you on Spekkly? You can unblock ${user.name} in your account settings`}
        />
      )}
    </Modal>
  );
};

export default BlockUserModal;
