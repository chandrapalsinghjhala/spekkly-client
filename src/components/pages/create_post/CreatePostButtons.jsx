import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "../../../axios";
import { useHistory } from "react-router-dom";
import { createPostNavTitles } from "../../../config/constants";

import HollowButton from "../../buttons/HollowButton";
import { FlexContainer } from "../../containers/container";
import FilledButton from "../../buttons/FilledButton";
import { activeNavIndex } from "../../../redux/actions/create_post_actions";
import { getAuthHeader } from "../../../services/auth_header_services";
import InputError from "../../inputs/InputError";
import { InputBox } from "../../containers/container";

const CreatePostButtons = (props) => {
  const history = useHistory();
  const navLength = createPostNavTitles.length - 1;

  const handleBackButtonClick = () => {
    props.activeNavIndexProp === 0
      ? history.push("/")
      : props.activeNavIndex(props.activeNavIndexProp - 1);
  };

  return (
    <InputBox>
      <FlexContainer>
        <HollowButton
          buttonText="Back"
          rightMargin
          onClick={handleBackButtonClick}
        />
        {props.activeNavIndexProp === navLength && (
          <FilledButton
            buttonText={
              props.createPostType === "edit" ? "Update Post" : "Create Post"
            }
            rightSideLoading
            loading={props.submitting}
            type={"submit"}
          />
        )}
        {props.activeNavIndexProp !== navLength && (
          <FilledButton
            buttonText="Continue"
            disabled={props.invalid}
            disabledColor={props.invalid}
            onClick={() => props.activeNavIndex(props.activeNavIndexProp + 1)}
            type={"button"}
          />
        )}

        <InputError error={props.error} />
      </FlexContainer>
    </InputBox>
  );
};

const mapStateToProps = ({ createPostState }) => ({
  activeNavIndexProp: createPostState.activeNavIndex,
  currentPageIsValid: createPostState.currentPageIsValid,
  editPostId: createPostState.editPostId,
});

const mapDispatchToProps = () => ({
  activeNavIndex,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(CreatePostButtons);
