import React, { useEffect } from "react";
import { Form, Field } from "react-final-form";
import { useSelector } from "react-redux";

import FilledButton from "../../buttons/FilledButton";
import InputLocation from "../../inputs/location/InputLocation";

import {
  SearchForm,
  HomeSearchInput,
  HomeSearchFormContainer,
  SearchSpacer,
} from "./styles/search_styles";
import { setValue } from "../../forms/form_helpers";
import Media from "react-media";
import { tabLandUp } from "../../media/media_helpers";

const HomeSearch = (props) => {
  const clearFilter = useSelector(
    ({ homeState: { clearFilters } }) => clearFilters
  );
  let resetForm = null;

  useEffect(() => {
    if (clearFilter > 0) {
      resetForm();
    }
  }, [clearFilter]);

  const setResetForm = (reset) => {
    resetForm = reset;
  };

  return (
    <HomeSearchFormContainer>
      <Form
        onSubmit={(values) => props.setFilters({ ...props.filters, ...values })}
        // initialValues={getSearchBarInitialInput()}
        mutators={{ setValue }}
        render={({ handleSubmit, form, ...rest }) => (
          <SearchForm onSubmit={handleSubmit}>
            <Field name="keywords" type="text">
              {({ input }) => (
                <HomeSearchInput {...input} placeholder="Keywords" />
              )}
            </Field>
            <Media query={tabLandUp}>
              {(matches) =>
                matches && (
                  <>
                    <SearchSpacer />
                    <InputLocation
                      homeSearch
                      setLocation={form.mutators.setValue}
                    />
                  </>
                )
              }
            </Media>

            <FilledButton
              type="submit"
              homeSearch
              noStretch={true}
              buttonText={"Submit"}
            />

            {setResetForm(form.reset)}
          </SearchForm>
        )}
      />
    </HomeSearchFormContainer>
  );
};

export default HomeSearch;
