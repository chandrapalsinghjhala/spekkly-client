import React from "react";
import styled from "styled-components";
import { inputBase } from "./InputCSS";
import is from "styled-is";
import InputError from "./InputError";

const InputNumberTag = styled.input`
  ${inputBase};
  padding: 1rem;
  width: 100%;
  direction: rtl;
  font-size: 1.4rem;

  ${is("borderNone")`
        border: none;
    `};
`;

const InputNumberContainer = styled.div`
  position: relative;
`;

const InputPlaceholder = styled.span`
  position: absolute;
  top: 25%;
  left: 10px;
  font-size: 1.4rem;
`;

const NumberInput = (props) => {
  return (
    <div>
      <InputNumberContainer>
        <InputNumberTag
          placeholder={props.placeholder}
          data-lpignore="true"
          borderNone={props.borderNone}
          {...props.input}
        />
        <InputPlaceholder>{props.inputLabel}</InputPlaceholder>
      </InputNumberContainer>
    </div>
  );
};

export default NumberInput;
