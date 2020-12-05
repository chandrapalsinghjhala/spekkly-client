import styled from "styled-components";
import React from "react";
import is from "styled-is";

const CheckBoxContainer = styled.div`
  display: inline-block;
`;
const CheckBoxTag = styled.input`
  position: absolute;
  opacity: 0;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  & + label:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: var(--background-color);

    ${is("whiteInput")`
      background: white;
    `};
  }

  &:checked + label:before {
    background: var(--primary-color);
  }

  &:checked + label:after {
    content: "";
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
`;

const CheckBoxInput = (props) => (
  <CheckBoxContainer onClick={props.handleToggle}>
    <CheckBoxTag
      whiteInput={props.whiteInput}
      type={props.type}
      {...props.input}
    />
    <label htmlFor={props.name}> {props.label} </label>
  </CheckBoxContainer>
);

export default CheckBoxInput;
