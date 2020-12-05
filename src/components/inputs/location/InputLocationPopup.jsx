import { SuggestedTextPopup, SuggestedTextPopupText } from "../InputCSS";
import React from "react";
import onClickOutside from "react-onclickoutside";

const InputLocationPopup = (props) => {
  InputLocationPopup.handleClickOutside =
    props.closeInputLocationSuggestionsPopup;

  return (
    <SuggestedTextPopup homeSearch={props.homeSearch}>
      {props.predictions.map((prediction) => (
        <SuggestedTextPopupText
          onClick={() =>
            props.handleLocationSuggestionClick(prediction.description)
          }
          key={prediction.id}
        >
          {" "}
          {prediction.description}
        </SuggestedTextPopupText>
      ))}
    </SuggestedTextPopup>
  );
};

InputLocationPopup.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => InputLocationPopup.handleClickOutside,
};

export default onClickOutside(InputLocationPopup, clickOutsideConfig);
