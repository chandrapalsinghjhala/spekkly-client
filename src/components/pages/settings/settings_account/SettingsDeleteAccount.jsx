import SettingsAccountItem from "./SettingsAccountItem";
import React, { useState } from "react";
import axios from "../../../../axios";
import { getAuthHeader } from "../../../../services/auth_header_services";
import ConfirmAlertWithText from "../../../modals/ConfirmAlertWithText";
import { FORM_ERROR } from "final-form";
import Notice from "../../../notices/Notice";
import { logoutUser } from "../../../../services/logout";
import { useHistory } from "react-router-dom";
import Modal from "../../../modals/Modal";

const SettingsDeleteAccount = (props) => {
  const [deleteAccountAlertOpen, setDeleteAccountAlertOpen] = useState(false);
  const [
    accountDeletedConfirmationOpen,
    setAccountDeletedConfirmationOpen,
  ] = useState(false);

  const history = useHistory();

  const deleteAccount = async () => {
    try {
      const {
        data: { success },
      } = await axios.delete("/users", getAuthHeader());

      if (success) {
        setDeleteAccountAlertOpen(false);
        setAccountDeletedConfirmationOpen(true);
      } else {
        throw new Error();
      }
    } catch (e) {
      return { [FORM_ERROR]: "Something went wrong" };
    }
  };

  const handleDeleteNoticeConfirm = () => {
    setAccountDeletedConfirmationOpen(false);
    logoutUser(history);
  };

  const closeDeleteAccountAlertOpen = () => {
    setDeleteAccountAlertOpen(false);
  };

  return (
    <div>
      <SettingsAccountItem
        onClick={() => setDeleteAccountAlertOpen(true)}
        btnText="Delete Account"
        heading="Delete Account"
        text="If you delete your account, all your profile information, posts, messages, and user data will be permanently deleted."
        warning
      />

      {deleteAccountAlertOpen && (
        <Modal closeModal={closeDeleteAccountAlertOpen}>
          <ConfirmAlertWithText
            type="confirmAlert"
            heading="Delete Account"
            text="Are you sure you want to delete your account? This can't be undone."
            btnText="Delete Account"
            action={deleteAccount}
            closeAlert={closeDeleteAccountAlertOpen}
          />
        </Modal>
      )}
      {accountDeletedConfirmationOpen && (
        <Modal>
          <Notice
            heading="Account Deleted"
            btnText="Got it"
            handleNoticeConfirm={handleDeleteNoticeConfirm}
            text="Your account and all your user data have been permanently deleted. Thank you for using Spekkly and we hope that you will join again in the future."
          />
        </Modal>
      )}
    </div>
  );
};

export default SettingsDeleteAccount;
