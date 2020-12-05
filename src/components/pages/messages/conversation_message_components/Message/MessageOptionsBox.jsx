import React, { useState } from "react";
import axios from "../../../../../axios";
import { useDispatch, useSelector } from "react-redux";

import { Option, OptionsContainer } from "../../../../options/option_styles";
import onClickOutside from "react-onclickoutside";
import Modal from "../../../../modals/Modal";
import ConfirmAlert from "../../../../modals/ConfirmAlert";
import { getAuthHeader } from "../../../../../services/auth_header_services";
import { deleteMessagesDispatch } from "../../../../../redux/actions/message_actions";

const MessageOptionsBox = (props) => {
  const [showDeleteMessageModal, setShowDeleteMessageModal] = useState(false);
  const deleteMessages = useSelector(
    ({ messageState: { deleteMessages } }) => deleteMessages
  );

  const dispatch = useDispatch();

  const handleDelete = async () => {
    const messageId = props.message.id;

    const { data } = await axios.delete(
      `/conversations/messages/${messageId}`,
      getAuthHeader()
    );

    if (data.success) {
      dispatch(deleteMessagesDispatch([...deleteMessages, messageId]));
    } else {
      throw new Error();
    }
  };

  MessageOptionsBox.handleClickOutside = () => props.hideOptions();

  return (
    <>
      <OptionsContainer bottomArrow messageOptions>
        <Option onClick={() => setShowDeleteMessageModal(true)}>Delete</Option>
      </OptionsContainer>

      {showDeleteMessageModal && (
        <Modal
          closeModal={props.hideOptions}
          outsideClickIgnoreClass={props.outsideClickIgnoreClass}
        >
          <ConfirmAlert
            text="Are you sure you want to delete your message?"
            buttonText="Delete"
            closeAlert={props.hideOptions}
            action={handleDelete}
            heading="Delete Message"
          />
        </Modal>
      )}
    </>
  );
};

MessageOptionsBox.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => MessageOptionsBox.handleClickOutside,
};

export default onClickOutside(MessageOptionsBox, clickOutsideConfig);
