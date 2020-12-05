import React from "react";
import { connect } from "react-redux";

import InputError from "../../inputs/InputError";
import HollowButton from "../../buttons/HollowButton";
import FilledButton from "../../buttons/FilledButton";
import { SubmitErrorContainer } from "../../login_signup/styles/login_sign_up_styles";
import { InputBox } from "../../containers/container";
import { settingsEditComplete } from "../../../redux/actions/settings_actions";
import { FlexContainer } from "../../containers/container";

const SettingsSubmitButtons = (props) => {
  const cancelEdit = () => {
    props.setEditActive(false);
  };

  return (
    <InputBox>
      <FlexContainer>
        <HollowButton buttonText="Cancel" rightMargin onClick={cancelEdit} />
        <FilledButton buttonText="Submit" type="submit" />
      </FlexContainer>
      {props.error && (
        <SubmitErrorContainer>
          <InputError error={props.error} />
        </SubmitErrorContainer>
      )}
    </InputBox>
  );
};

const mapDispatchToProps = () => ({
  settingsEditComplete,
});

export default connect(null, mapDispatchToProps())(SettingsSubmitButtons);
