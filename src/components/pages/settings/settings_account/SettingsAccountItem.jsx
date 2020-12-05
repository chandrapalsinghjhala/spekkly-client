import {
  AccountItemContainer,
  AccountItemHeading,
} from "./settings_account_styles";
import FilledButton from "../../../buttons/FilledButton";
import React from "react";
import { RelativePositionContainer } from "../../../containers/container";
import Loading from "../../../loading/Loading";
import InputError from "../../../inputs/InputError";

const SettingsAccountItem = (props) => {
  return (
    <RelativePositionContainer>
      <AccountItemContainer>
        <AccountItemHeading>{props.heading}</AccountItemHeading>
        <div> {props.text}</div>
      </AccountItemContainer>
      <FilledButton
        warning={props.warning}
        buttonText={props.btnText}
        onClick={props.onClick}
      />
      <InputError error={props.error} />

      {/* <Loading loading={props.loading} /> */}
    </RelativePositionContainer>
  );
};

export default SettingsAccountItem;
