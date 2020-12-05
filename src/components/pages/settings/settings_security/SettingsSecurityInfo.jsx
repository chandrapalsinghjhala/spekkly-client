import React from "react";
import { InputBox } from "../../../containers/container";
import SettingsNotice from "../SettingsNotice";
import UpdateSuccessful from "../UpdateSuccessful";
import { connect } from "react-redux";

const SettingsSecurityInfo = (props) => {
  const messageText = props.passwordSet
    ? "Your password has been set"
    : "Your password has not been set";

  return (
    <div>
      <InputBox borderBottom>
        <SettingsNotice
          title="Password"
          active={props.passwordSet}
          details={messageText}
        />
      </InputBox>
    </div>
  );
};

const mapStateToProps = ({ userState }) => ({
  passwordSet: userState.passwordSet,
});

export default connect(mapStateToProps)(SettingsSecurityInfo);
