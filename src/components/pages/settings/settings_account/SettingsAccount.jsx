import React, { useState } from "react";
import { useSelector } from "react-redux";

import { InputBox } from "../../../containers/container";
import { AccountItemOuterContainer } from "./settings_account_styles";
import SuccessMessage from "../../../alerts/SuccessMessage";
import SendVerificationEmail from "./SendVerificationEmail";
import SettingsDeleteAccount from "./SettingsDeleteAccount";
import SettingsAccountItem from "./SettingsAccountItem";
import BlockedUsersDetails from "./BlockedUsersDetails";
import HollowButton from "../../../buttons/HollowButton";
import InputError from "../../../inputs/InputError";

const SettingsAccount = () => {
  const emailVerified = useSelector(
    ({ userState: { emailVerified } }) => emailVerified
  );
  const blockedUsers = useSelector(
    ({ userState: { blockedUsers } }) => blockedUsers
  );

  const [emailVerificationEmailSent, setEmailVerificationEmailSent] = useState(
    false
  );
  const [blockedUserListVisible, setBlockedUserListVisible] = useState(false);
  const [unblockUserError, setUnblockUserError] = useState("");

  return (
    <div>
      <InputBox borderBottom>
        <AccountItemOuterContainer>
          {blockedUsers && !blockedUserListVisible && (
            <SettingsAccountItem
              onClick={() => setBlockedUserListVisible(true)}
              btnText="Edit"
              heading="Blocked Users"
              text="Manage users that you've previously blocked."
            />
          )}

          {blockedUserListVisible && (
            <BlockedUsersDetails
              closeShowBlockedUsers={() => setBlockedUserListVisible(false)}
              setUnblockUserError={setUnblockUserError}
              setBlockedUserListVisible={setBlockedUserListVisible}
            />
          )}

          {emailVerificationEmailSent && !blockedUserListVisible && (
            <SuccessMessage message="Verification email has been sent" />
          )}

          {!emailVerified &&
            !emailVerificationEmailSent &&
            !blockedUserListVisible && (
              <SendVerificationEmail
                setEmailVerificationEmailSent={setEmailVerificationEmailSent}
              />
            )}

          {!blockedUserListVisible && <SettingsDeleteAccount />}
        </AccountItemOuterContainer>
      </InputBox>
      {blockedUserListVisible && (
        <InputBox>
          <HollowButton
            buttonText="Cancel"
            space="right"
            onClick={() => setBlockedUserListVisible(false)}
          />
          <InputError error={unblockUserError} />
        </InputBox>
      )}
    </div>
  );
};

export default SettingsAccount;
