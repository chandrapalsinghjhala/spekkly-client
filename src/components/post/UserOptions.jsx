import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";

import { Option, OptionsContainer } from "../options/option_styles";
import Modal from "../modals/Modal";
import ReportModal from "../modals/ReportModal";
import BlockUserModal from "../modals/BlockUserModal";
import { useHistory } from "react-router-dom";

const UserOptions = (props) => {
  const [showBlockUserModal, setShowBlockUserModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const history = useHistory();

  const closeModal = () => {
    setShowBlockUserModal(false);
    setShowReportModal(false);
    props.hideOptions();
  };

  UserOptions.handleClickOutside = () => {
    props.hideOptions();
  };

  const handleBlockedUserConfirmation = () => {
    history.push("/");
  };

  return (
    <OptionsContainer profileOptions>
      <Option onClick={() => setShowBlockUserModal(true)}>Block</Option>
      <Option onClick={() => setShowReportModal(true)}>Report</Option>

      {showReportModal && (
        <Modal
          closeModal={closeModal}
          outsideClickIgnoreClass={props.outsideClickIgnoreClass}
        >
          <ReportModal
            reportedEntityId={props.user.id}
            closeModal={closeModal}
            reportedEntityType="user"
          />
        </Modal>
      )}

      {showBlockUserModal && (
        <BlockUserModal
          user={props.user}
          handleBlockedUserConfirmation={handleBlockedUserConfirmation}
          outsideClickIgnoreClass={props.outsideClickIgnoreClass}
          closeModal={closeModal}
        />
      )}
    </OptionsContainer>
  );
};

UserOptions.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => UserOptions.handleClickOutside,
};

export default onClickOutside(UserOptions, clickOutsideConfig);
