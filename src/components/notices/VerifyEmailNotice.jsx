import React, { useState } from "react";
import { NoticeHeading, NoticeText } from "./notice_styles";
import FilledButton from "../buttons/FilledButton";
import Loading from "../loading/Loading";
import axios from "../../axios";
import { getAuthHeaderWithData } from "../../services/auth_header_services";
import FullScreenBox from "../containers/FullScreenBox";

const VerifyEmailNotice = (props) => {
  const [loading, setLoading] = useState(false);
  const [emailVerificationSent, setEmailVerificationSent] = useState(false);
  const [emailVerificationHeading, setEmailVerificationHeading] = useState("");
  const [emailVerificationText, setEmailVerificationText] = useState("");

  const sendVerificationEmail = async () => {
    let heading = "";
    let text = "";
    try {
      setLoading(false);
      const {
        data: { success },
      } = await axios.get(
        "/users/send_verify_account_email",
        getAuthHeaderWithData({ hideToken: true })
      );

      if (success) {
        heading = "Email Verification Link Sent";
        text = `We've sent you a new link to verify your email. Please check your spam folder and ensure your account email is current if you do not receive this email.`;
      } else {
        throw new Error();
      }
    } catch {
      heading = "Something Went Wrong";
      text = `We were unable to send your email verification link. Please try again later.`;
    } finally {
      setLoading(false);
      setEmailVerificationSent(true);
      setEmailVerificationHeading(heading);
      setEmailVerificationText(text);
    }
  };

  return (
    <FullScreenBox>
      {!emailVerificationSent && (
        <div>
          {loading && <Loading />}
          <NoticeHeading>Email Verification Required</NoticeHeading>
          <NoticeText smallBottomSpace>
            {" "}
            {props.text} To verify your email, please click use the verification
            link we emailed you when you created your account. If you no longer
            have access to this email, you can send it again by clicking the
            button below.{" "}
          </NoticeText>
          <FilledButton
            buttonText="Resend Verification Email"
            onClick={sendVerificationEmail}
          />
        </div>
      )}

      {emailVerificationSent && (
        <div>
          <NoticeHeading>{emailVerificationHeading}</NoticeHeading>
          <NoticeText noBottomMargin>{emailVerificationText}</NoticeText>
        </div>
      )}
    </FullScreenBox>
  );
};

export default VerifyEmailNotice;
