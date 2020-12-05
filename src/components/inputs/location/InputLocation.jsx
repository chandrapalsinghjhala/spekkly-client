import React, { useState } from "react";
import axios from "../../../axios";
import { Field } from "react-final-form";
import InputLocationSuggestions from "./InputLocationSuggestions";
import { validLength } from "../../../services/validators/validators";
import { createValidatorLength } from "../../../services/validators/validator_helpers";
import { locationLength } from "../../../config/validatorLengths";

const InputLocation = (props) => {
  const [predictions, setPredictions] = useState([]);

  const getLocationPredictions = async (value) => {
    try {
      const {
        data: { predictions, success },
      } = await axios.get(`/api/services/location_suggestions`, {
        params: { value },
      });
      if (success) {
        setPredictions(predictions);
      } else {
        throw new Error();
      }
    } catch (e) {}
  };

  const parse = (value) => {
    if (value.length > 0) {
      getLocationPredictions(value, "location");
    } else {
      setPredictions([]);
      setTimeout(() => setPredictions([]), 200);
    }
    return value;
  };

  const handleLocationSuggestionClick = (value) => {
    props.setLocation(value, "location");
    setPredictions([]);
  };

  const getValidation = () => {
    if (props.homeSearch) {
      return false;
    } else {
      return (value, allValues, meta) =>
        validLength(value, meta.name, createValidatorLength(locationLength));
    }
  };

  return (
    <Field
      name="location"
      component={InputLocationSuggestions}
      homeSearch={props.homeSearch}
      label={props.label}
      parse={parse}
      validate={getValidation()}
      predictions={predictions}
      handleLocationSuggestionClick={handleLocationSuggestionClick}
    />
  );
};

export default InputLocation;
