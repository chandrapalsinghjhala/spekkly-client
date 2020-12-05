import styled from "styled-components";
import React from "react";
import { buttonBase } from "../buttons/button_styles";

const ButtonImage = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

const Button = styled.button`
  ${buttonBase};
  background-color: transparent;
  border: 1px solid var(--input-border-color);
  color: black;
  display: flex;
  align-items: center;
  transition: background-color 0.1s linear;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const LoginSignUpButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <ButtonImage src={props.buttonImage} />
      <span> {props.buttonText} </span>
    </Button>
  );
};

export default LoginSignUpButton;
