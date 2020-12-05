import styled from "styled-components";

const NavbarNotificationContainerWidthHeight = "1.2rem";

export const NavbarNotification = styled.div`
  width: ${NavbarNotificationContainerWidthHeight};
  height: ${NavbarNotificationContainerWidthHeight};
  position: absolute;
  right: -1.1rem;
  top: -0.3rem;
  border-radius: 100px;
  background-color: #eb3039;
  border: 2px solid var(--background-color);
`;

export const NavbarNotificationText = styled.div`
  color: white;
  padding: 0.3rem;
  font-size: 1.1rem;
  font-family: "Medium";
`;
