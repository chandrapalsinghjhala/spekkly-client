import React, { useState } from "react";
import styled from "styled-components";
import { Field } from "react-final-form";
import is from "styled-is";
import NumberInput from "./NumberInput";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import validator from "validator";
import commaNumber from "comma-number";
import { maxRange } from "../../config/constants";

const InputRangeTag = styled.div`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
`;

const CreatePostMinMaxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CreatePostRangeContainer = styled.div`
  ${is("stretch")`
      width: 100%;
  `};
`;

const InputRange = (props) => {
  const [previousValue, setPreviousValue] = useState("");

  const removeCommas = (value) => (value ? value.replace(/,/g, "") : undefined);

  const forceNumeric = (value) => {
    const numericValue = removeCommas(value);
    const numericValueWithCommas = commaNumber(numericValue);

    if (!value) {
      setPreviousValue(value);
      return "";
    } else if (
      !validator.isNumeric(numericValue) ||
      parseInt(numericValue) > maxRange
    ) {
      return previousValue;
    } else {
      setPreviousValue(numericValueWithCommas);
      return numericValueWithCommas;
    }
  };

  const validateRangeInput = (value, allValues) => {
    if (
      !allValues[props.name] ||
      (!allValues[props.name].min && !allValues[props.name].max)
    ) {
      return `Min and max ${props.name} cannot be blank`;
    }

    if (!allValues[props.name].min) {
      return `Min ${props.name} cannot be blank`;
    }

    if (!allValues[props.name].max) {
      return `Max ${props.name} cannot be blank`;
    }

    let minVal = /^\d+$/.test(allValues[props.name].min);
    let maxVal = /^\d+$/.test(allValues[props.name].max);

    if (!minVal || !maxVal) {
      return `Input field must be Integer`;
    }

    if (
      parseInt(removeCommas(allValues[props.name].min.toString())) >=
      parseInt(removeCommas(allValues[props.name].max.toString()))
    ) {
      return `Min ${props.name} must be less than max ${props.name}`;
    }
  };

  const createField = (name, placeholder) => (
    <Field
      name={name}
      component={NumberInput}
      borderNone={props.borderNone}
      placeholder={placeholder}
      validate={props.validation ? validateRangeInput : false}
      inputLabel={props.inputLabel}
    />
  );

  return (
    <div>
      <InputLabel extraLabelSpace label={props.label} />
      <CreatePostRangeContainer stretch={props.stretch}>
        <CreatePostMinMaxContainer>
          {createField(`${props.name}.min`, "Min")}
          <InputRangeTag> To </InputRangeTag>
          {createField(`${props.name}.max`, "Max")}
        </CreatePostMinMaxContainer>
      </CreatePostRangeContainer>
      {props.invalid && props.touched && <InputError error={props.error} />}
    </div>
  );
};

export default InputRange;
