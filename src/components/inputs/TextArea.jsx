import React from "react";
import styled from "styled-components";
import { inputBase } from "./InputCSS";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

const TextAreaTag = styled.textarea`
  ${inputBase};
  resize: none;
  min-height: 20rem;
  width: 100%;
`;

const TextArea = (props) => {
  return (
    <div>
      <InputLabel for={props.name} label={props.label} />
      <TextAreaTag {...props.input} type="text" />
      {props.meta.touched && props.meta.invalid && (
        <InputError error={props.meta.error} />
      )}
    </div>
  );
};

export default TextArea;
