import React from "react";
import { SideNavItemContainer } from "../../page_nav/sideNav";

const SettingsNav = (props) => {
  const handleNavClick = (index) => {
    props.setActiveIndex(index);
    props.setEditActive(false);
  };

  return (
    <div>
      {props.navTitles.map((title, index) => (
        <SideNavItemContainer
          active={props.activeIndex === index}
          key={title}
          clickable={true}
          hoverable={props.activeIndex !== index}
          onClick={() => handleNavClick(index)}
        >
          {title}
        </SideNavItemContainer>
      ))}
    </div>
  );
};

export default SettingsNav;
