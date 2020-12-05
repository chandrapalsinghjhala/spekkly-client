import React, { useState } from "react";
import axios from "../../../../axios";
import SettingsAccountItem from "./SettingsAccountItem";
import { getAuthHeaderWithData } from "../../../../services/auth_header_services";

const SendVerificationEmail = (props) => {
  const [emailVerificationError, setEmailVerificationError] = useState("");
  const [emailVerificationLoading, setEmailVerificationLoading] = useState(
    false
  );

  const sendVerificationEmail = async () => {
    try {
      setEmailVerificationLoading(true);
      const {
        data: { success },
      } = await axios.get(
        "/users/send_verify_account_email",
        getAuthHeaderWithData({ hideToken: true })
      );
      if (success) {
        props.setEmailVerificationEmailSent(true);
      } else {
        throw new Error();
      }
    } catch (e) {
      setEmailVerificationError(
        "Something went wrong. Please try again later."
      );
    } finally {
      setEmailVerificationLoading(false);
    }
  };

  return (
    <SettingsAccountItem
      onClick={sendVerificationEmail}
      btnText="Verify Account"
      error={emailVerificationError}
      heading="Resend Verification Email"
      loading={emailVerificationLoading}
      text="Your account has not been verified. To verify your account, please confirm your email address via a verification email."
    />
  );
};

export default SendVerificationEmail;
