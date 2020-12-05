import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  TextGridContainer,
  TextGridLabel,
  StandardParagraph,
} from "../../../text/text";
import { InputBox } from "../../../containers/container";
import UpdateSuccessful from "../UpdateSuccessful";
import { settingsEditComplete } from "../../../../redux/actions/settings_actions";

const InfoNote = styled.div`
  margin-top: 1rem;
  font-size: 1.3rem;
  color: grey;
`;

const SettingsInfoShow = (props) => {
  return (
    <div>
      <InputBox borderBottom>
        <TextGridContainer>
          <div>
            <TextGridLabel>Name</TextGridLabel>
            <div>{props.name}</div>
          </div>
          <div>
            <TextGridLabel>Email</TextGridLabel>
            <div>{props.email}</div>
            <InfoNote>Your email is private</InfoNote>
          </div>

          {props.jobTitle && (
            <div>
              <TextGridLabel>Job Title</TextGridLabel>
              <div>{props.jobTitle}</div>
            </div>
          )}

          {props.bio && (
            <div>
              <TextGridLabel>Bio</TextGridLabel>
              <StandardParagraph>{props.bio}</StandardParagraph>
            </div>
          )}
        </TextGridContainer>
      </InputBox>
    </div>
  );
};

const mapStateToProps = ({ userState }) => ({
  name: userState.name,
  email: userState.email,
  jobTitle: userState.jobTitle,
  bio: userState.bio,
});

export default connect(mapStateToProps)(SettingsInfoShow);
