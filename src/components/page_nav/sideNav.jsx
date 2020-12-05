import styled from "styled-components";
import is, { isOr } from "styled-is";

const SideNavItemContainer = styled.div`
  display: flex;
  padding: 1.4rem;
  align-items: center;

  ${is("active")`
      background-color: white;
      border-left: 4px solid var(--primary-color);
      box-shadow: var(--light-shadow);
    `};

  ${is("clickable")`
      cursor: pointer;
    `};

  ${is("hoverable")`
      transition: background-color .1s linear;
      &:hover {
        background-color: var(--background-color-highlighted);
      }
     `};
`;

const SideNavItemText = styled.span`
  color: #868686 ${isOr("active", "completed")`
      color: black;
    `};
`;

const SideNavCheckMark = styled.img`
  height: 1.6rem;
  width: 1.6rem;
  margin-left: auto;
`;

export { SideNavItemContainer, SideNavItemText, SideNavCheckMark };
