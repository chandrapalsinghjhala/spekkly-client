import React from "react";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import { TextInputTag } from "./InputCSS";

const TextInput = (props) => {
  return (
    <div>
      <InputLabel for={props.input.name} label={props.label} />
      <TextInputTag customWidth={props.customWidth} {...props.input} />
      {props.meta.touched && props.meta.invalid && (
        <InputError error={props.meta.error} />
      )}
    </div>
  );
};

export default TextInput;
