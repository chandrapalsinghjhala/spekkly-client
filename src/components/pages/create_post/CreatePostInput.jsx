import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../../axios";
import { Form, Field } from "react-final-form";
import { useHistory } from "react-router-dom";
import Measure from "react-measure";
import { validLength } from "../../../services/validators/validators";
import TextInput from "../../inputs/TextInput";
import TextArea from "../../inputs/TextArea";
import InputRange from "../../inputs/InputRange";
import InputLocation from "../../inputs/location/InputLocation";
import CreatePostSummary from "./CreatePostSummary";
import { InputBox } from "../../containers/container";
import InputOptions from "../../inputs/InputOptions";
import { transitOptions, typeOptions } from "../../../config/constants";
import nestedProperty from "nested-property";
import {
  postTitleLength,
  postDescriptionLength,
} from "../../../config/validatorLengths";
import CreatePostButtons from "./CreatePostButtons";
import { createValidatorLength } from "../../../services/validators/validator_helpers";
import { handleSubmit } from "./helpers/create_post_helpers";
import { getInitialValues } from "./helpers/create_post_helpers";
import { setValue, toggleCheckMark } from "../../forms/form_helpers";

const CreatePostInput = (props) => {
  const [initialValues, setInitialValues] = useState({});
  const [buttonHeight, setButtonHeight] = useState({});
  const history = useHistory();

  const { activeNavIndex, editPostId } = useSelector(
    ({ createPostState }) => createPostState
  );

  const navbarHeight = useSelector(
    ({ navbarState }) => navbarState.navbarHeight
  );

  const getPost = async () => {
    try {
      const { data } = await axios.get(`/posts/${props.postID}`);
      if (data) {
        setInitialValues(data.post);
      } else {
        throw new Error();
      }
    } catch (e) {}
  };

  useEffect(() => {
    if (props.createPostType) {
      getPost();
    } else {
      setInitialValues(getInitialValues());
    }
  }, []);

  return (
    <Form
      onSubmit={(values) => handleSubmit(values, props, history)}
      mutators={{ setValue, toggleCheckMark }}
      initialValues={initialValues}
      render={(formProps) => (
        <form onSubmit={formProps.handleSubmit}>
          <InputBox
            borderBottom
            mobileScroll
            customMobileSize
            height={`calc(100vh - var(--vh-offset, 0px) - ${buttonHeight}px - ${navbarHeight}px - ${props.headingHeight}px - 4rem)`}
          >
            {activeNavIndex === 0 && (
              <Field
                name="title"
                component={TextInput}
                validate={(value, allValues, meta) =>
                  validLength(
                    value,
                    meta.name,
                    createValidatorLength(postTitleLength)
                  )
                }
                label="Choose a title for your post"
              />
            )}

            {activeNavIndex === 1 && (
              <Field
                name="description"
                component={TextArea}
                validate={(value, allValues, meta) =>
                  validLength(
                    value,
                    meta.name,
                    createValidatorLength(postDescriptionLength)
                  )
                }
                label="Choose a description for your post"
              />
            )}

            {activeNavIndex === 2 && (
              <InputRange
                label="Choose range of space you need"
                inputLabel="sqft"
                name="space"
                invalid={formProps.invalid}
                error={nestedProperty.get(formProps.errors, "space.min")}
                touched={
                  formProps.touched["space.min"] &&
                  formProps.touched["space.max"]
                }
                validation
              />
            )}

            {activeNavIndex === 3 && (
              <InputRange
                label="Choose the price per square foot range you would like"
                inputLabel="$/mo"
                name="cost"
                invalid={formProps.invalid}
                validation
                touched={
                  formProps.touched["space.min"] &&
                  formProps.touched["space.max"]
                }
                error={nestedProperty.get(formProps.errors, "space.min")}
              />
            )}

            {activeNavIndex === 4 && (
              <InputLocation
                label="Choose the location of the property you would like"
                setLocation={formProps.form.mutators.setValue}
              />
            )}

            {activeNavIndex === 5 && (
              <InputOptions
                label="Choose the type of space you need"
                options={typeOptions}
                type="radio"
                setValue={formProps.form.mutators.setValue}
                name="type"
              />
            )}

            {activeNavIndex === 6 && (
              <InputOptions
                label="Optionally choose any transit options you need"
                options={transitOptions}
                type="checkbox"
                toggleCheckMark={formProps.form.mutators.toggleCheckMark}
                name="transit"
              />
            )}

            {activeNavIndex === 7 && (
              <CreatePostSummary values={formProps.values} />
            )}
          </InputBox>

          <Measure
            bounds
            onResize={(contentRect) => {
              setButtonHeight(contentRect.bounds.height);
            }}
          >
            {({ measureRef }) => (
              <div ref={measureRef}>
                <CreatePostButtons
                  createPostType={props.createPostType}
                  submitting={formProps.submitting}
                  invalid={formProps.invalid}
                />
              </div>
            )}
          </Measure>
        </form>
      )}
    />
  );
};

export default CreatePostInput;
