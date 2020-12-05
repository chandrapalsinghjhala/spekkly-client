import React from "react";
import SettingsNotificationsInfo from "./SettingsNotificationsInfo";
import SettingsNotificationsEdit from "./SettingsNotificationsEdit";
import { connect } from "react-redux";

const SettingsNotifications = (props) => (
  <div>
    {!props.editActive && <SettingsNotificationsInfo />}
    {props.editActive && (
      <SettingsNotificationsEdit
        editActive={props.editActive}
        getUpdatedUserData={props.getUpdatedUserData}
        setEditActive={props.setEditActive}
        setEditCompleteText={props.setEditCompleteText}
      />
    )}
  </div>
);

export default SettingsNotifications;
