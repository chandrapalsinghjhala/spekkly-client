import React from "react";
import { InputBox } from "../../../containers/container";
import SettingsNotice from "../SettingsNotice";
import { TextGridContainer } from "../../../text/text";
import { connect } from "react-redux";

const SettingsNotificationsInfo = (props) => {
  return (
    <div>
      <InputBox>
        <TextGridContainer>
          <SettingsNotice
            title="New Message"
            active={props.notifications.newMessages}
            details="Receive an email notification when you receive a new message"
          />
          <SettingsNotice
            title="Password Changed"
            active={props.notifications.passwordChanged}
            details="Receive an email notification when your password is updated"
          />
          <SettingsNotice
            title="Email Changed"
            active={props.notifications.emailChanged}
            details="Receive an email notification when your account email is updated"
          />
        </TextGridContainer>
      </InputBox>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notifications: state.userState.notifications,
});

export default connect(mapStateToProps)(SettingsNotificationsInfo);
