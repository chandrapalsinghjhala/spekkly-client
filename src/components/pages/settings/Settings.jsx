import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Media from "react-media";
import { useMediaQuery } from "@react-hook/media-query";

import {
  StandardContainer,
  SideNavContainer,
  ContentSection,
} from "../../containers/container";
import SettingsSecurity from "./settings_security/SettingsSecurity";
import SettingsNav from "./SettingsNav";
import IconHeadingBox from "../../headings/IconHeadingBox";
import SettingsInfo from "./settings_info/SettingsInfo";
import SettingsNotifications from "./settings_notifications/SettingsNotifications";
import UpdateSuccessful from "./UpdateSuccessful";
import { getUserInfo } from "../../../services/load_data_services";
import { userDataDispatch } from "../../../redux/actions/user_actions";
import SettingsAccount from "./settings_account/SettingsAccount";
import {
  tabLandUp,
  tabPortDown,
  createMediaQuery,
} from "../../media/media_helpers";

const Settings = () => {
  const navTitles = [
    "Profile",
    "Password & Security",
    "Notifications",
    "Account",
  ];

  const [editActive, setEditActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [editCompleteText, setEditCompleteText] = useState("");

  const dispatch = useDispatch();

  const handleEditClick = () => {
    setEditActive(!editActive);
  };

  const getUpdatedUserData = async () => {
    dispatch(userDataDispatch(await getUserInfo()));
  };

  return (
    <StandardContainer>
      <SideNavContainer>
        <Media query={tabLandUp}>
          {(matches) =>
            matches && (
              <SettingsNav
                navTitles={navTitles}
                activeIndex={activeIndex}
                setEditActive={setEditActive}
                setActiveIndex={setActiveIndex}
              />
            )
          }
        </Media>
        <ContentSection>
          <IconHeadingBox
            heading={navTitles[activeIndex]}
            activeIndex={activeIndex}
            handleClick={handleEditClick}
          />

          {activeIndex === 0 && (
            <SettingsInfo
              editActive={editActive}
              setEditCompleteText={setEditCompleteText}
              getUpdatedUserData={getUpdatedUserData}
              setEditActive={setEditActive}
            />
          )}

          {activeIndex === 1 && (
            <SettingsSecurity
              editActive={editActive}
              getUpdatedUserData={getUpdatedUserData}
              setEditActive={setEditActive}
              setEditCompleteText={setEditCompleteText}
            />
          )}
          {activeIndex === 2 && (
            <SettingsNotifications
              editActive={editActive}
              getUpdatedUserData={getUpdatedUserData}
              setEditActive={setEditActive}
              setEditCompleteText={setEditCompleteText}
            />
          )}
          {activeIndex === 3 && <SettingsAccount />}
          {editCompleteText && <UpdateSuccessful message={editCompleteText} />}
        </ContentSection>
      </SideNavContainer>
    </StandardContainer>
  );
};

export default Settings;
