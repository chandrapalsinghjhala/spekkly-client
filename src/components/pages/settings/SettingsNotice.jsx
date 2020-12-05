import React from "react";
import styled from "styled-components";
import SettingsCheckMarkImage from "../../../assets/settings_check.svg";
import SettingsInactiveImage from "../../../assets/icons/off.svg";

const SettingsCheckMark = styled.img`
  width: 2.2rem;
  margin-right: 1.2rem;
`;

const SettingsCheckMarkContainer = styled.div`
  display: flex;
  align-items: start;
`;

const SettingsToggleHeading = styled.span`
  font-family: "Bold";
`;

const SettingToggleTextContainer = styled.div`
  padding-top: 1px;
`;

const SettingsToggleText = styled.div`
  margin-top: 0.4rem;
`;

const SettingsNotice = (props) => {
  return (
    <SettingsCheckMarkContainer>
      <SettingsCheckMark
        alt="settings security check mark"
        src={props.active ? SettingsCheckMarkImage : SettingsInactiveImage}
      />
      <SettingToggleTextContainer>
        <SettingsToggleHeading>{props.title}</SettingsToggleHeading>
        <SettingsToggleText>{props.details}</SettingsToggleText>
      </SettingToggleTextContainer>
    </SettingsCheckMarkContainer>
  );
};

export default SettingsNotice;
