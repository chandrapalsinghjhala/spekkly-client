import React from "react";
import { connect } from "react-redux";

import SettingsSecurityInfo from "./SettingsSecurityInfo";
import SettingsSecurityEdit from "./SettingsSecurityEdit";
import SettingsInfoEdit from "../settings_info/SettingsInfoEdit";

const SettingsSecurity = (props) => {
  return (
    <div>
      {!props.editActive && <SettingsSecurityInfo />}
      {props.editActive && (
        <SettingsSecurityEdit
          getUpdatedUserData={props.getUpdatedUserData}
          setEditActive={props.setEditActive}
          setEditCompleteText={props.setEditCompleteText}
        />
      )}
    </div>
  );
};

export default SettingsSecurity;
