import React, { useEffect, useState } from "react";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import { TextInputTag } from "../InputCSS";
import { HomeSearchInput } from "../../pages/home/styles/search_styles";
import { RelativePositionContainer } from "../../containers/container";
import InputLocationPopup from "./InputLocationPopup";

const InputLocationSuggestions = (props) => {
  const [showInputLocationPopup, setShowInputLocationPopup] = useState(true);

  const closeInputLocationSuggestionsPopup = () => {
    setShowInputLocationPopup(false);
  };

  const predictionIds = props.predictions.map((prediction) => prediction.id);

  useEffect(() => {
    setShowInputLocationPopup(true);
  }, [predictionIds.toString()]);

  return (
    <RelativePositionContainer>
      {!props.homeSearch && <InputLabel for={props.name} label={props.label} />}

      {!props.homeSearch && (
        <TextInputTag {...props.input} placeholder="Location" />
      )}

      {props.homeSearch && (
        <HomeSearchInput {...props.input} placeholder="Location" />
      )}

      {props.predictions.length > 0 && showInputLocationPopup && (
        <InputLocationPopup
          homeSearch={props.homeSearch}
          handleLocationSuggestionClick={props.handleLocationSuggestionClick}
          closeInputLocationSuggestionsPopup={
            closeInputLocationSuggestionsPopup
          }
          predictions={props.predictions}
        />
      )}

      {((!props.homeSearch && props.meta.touched) || props.submit) &&
        props.meta.error && <InputError error={props.meta.error} />}
    </RelativePositionContainer>
  );
};

export default InputLocationSuggestions;
