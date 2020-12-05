import styled from "styled-components";
import React from "react";
import is from "styled-is";
import { buttonBase } from "./button_styles";

const HollowButtonTag = styled.button`
  ${buttonBase};
  color: var(--disabled-color);
  background-color: transparent;
  border: 1px solid var(--hollow-border-color);

  ${is("active")`
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
  `};

  &:hover {
    background-color: initial;
    border: 1px solid var(--hollow-border-color);

    ${is("active")`
      border: 1px solid var(--primary-color-highlighted);
      color: var(--primary-color-highlighted);
    `};
  }
`;

const HollowButton = (props) => {
  return (
    <HollowButtonTag
      active={props.active}
      type="button"
      rightMargin={props.rightMargin}
      onClick={props.onClick}
    >
      {props.buttonText}
    </HollowButtonTag>
  );
};

export default HollowButton;
