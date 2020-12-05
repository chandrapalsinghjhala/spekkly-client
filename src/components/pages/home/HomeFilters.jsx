import React, { useEffect, useState } from "react";
import { Form, FormSpy } from "react-final-form";
import InputRange from "../../inputs/InputRange";
import InputOptions from "../../inputs/InputOptions";
import { transitOptions, typeOptions } from "../../../config/constants";
import { setValue, toggleCheckMark } from "../../forms/form_helpers";
import { useSelector } from "react-redux";
import sleep from "sleep-promise";
import { HomeSidePanelForm, ToggleFiltersButton } from "./styles/home_styles";
import Media from "react-media";
import { tabPortDown } from "../../media/media_helpers";

const HomeFilters = (props) => {
  const [showFilters, setShowFilters] = useState(false);
  const clearFilter = useSelector(
    ({ homeState: { clearFilters } }) => clearFilters
  );
  let resetForm = null;

  useEffect(() => {
    if (clearFilter > 0) {
      setResetForm();
    }
  }, [clearFilter]);

  const setResetForm = (reset) => {
    resetForm = reset;
  };

  return (
    <div>
      <Media
        query={tabPortDown}
        onChange={(matches) => {
          matches ? setShowFilters(false) : setShowFilters(true);
        }}
      >
        {(matches) =>
          matches && (
            <ToggleFiltersButton
              showFilters={showFilters}
              onClick={() => {
                setShowFilters(!showFilters);
              }}
            >
              {showFilters ? "Hide" : "Show"} Filters
            </ToggleFiltersButton>
          )
        }
      </Media>

      {showFilters && (
        <Form
          onSubmit={() => {}}
          // initialValues={getSideBarInitialInput()}
          mutators={{ setValue, toggleCheckMark }}
          render={({ handleSubmit, form }) => (
            <HomeSidePanelForm onSubmit={handleSubmit}>
              <InputRange
                label="Space"
                inputLabel="sqft"
                name="space"
                stretch
                validation={false}
                borderNone
              />

              <InputRange
                label="Cost"
                inputLabel="$/mo"
                name="cost"
                stretch
                borderNone
                errorName="price"
              />

              <InputOptions
                label="Type"
                options={typeOptions}
                name="type"
                allowNull
                whiteInput
                setValue={form.mutators.setValue}
                type="radio"
              />

              <InputOptions
                label="Transit"
                options={transitOptions}
                whiteInput
                name="transit"
                toggleCheckMark={form.mutators.toggleCheckMark}
                type="checkbox"
              />

              {setResetForm(form.reset)}

              <FormSpy
                onChange={async ({ values }) => {
                  await sleep(0);
                  props.setFilters(values);
                }}
              />
            </HomeSidePanelForm>
          )}
        />
      )}
    </div>
  );
};

export default HomeFilters;
