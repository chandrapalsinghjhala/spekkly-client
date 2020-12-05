import React from "react";
import { InputBox } from "../../../containers/container";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import SubmitButtons from "../SettingsSubmitButtons";
import Loading from "../../../loading/Loading";
import Switch from "../../../inputs/Switch";
import styled from "styled-components";
import { handleSettingsSubmit } from "../settings_helpers";
import { RelativeForm } from "../../../forms/form_styles";

const SettingsNotificationsFieldContainer = styled.div`
  display: grid;
  grid-row-gap: 4rem;
`;

const settingsNotificationsEdit = (props) => {
  const submitOptions = {
    url: "/users/notifications",
    editCompleteText: `Your notifications have been updated`,
  };

  return (
    <Form
      onSubmit={(values) => handleSettingsSubmit(values, props, submitOptions)}
      initialValues={props.userNotifications}
      render={({ handleSubmit, submitting, submitError }) => (
        <RelativeForm onSubmit={handleSubmit}>
          {/* <Loading loading={submitting} /> */}
          <InputBox borderBottom={true}>
            <SettingsNotificationsFieldContainer>
              <Field
                name="newMessages"
                component={Switch}
                label="New Message"
                details="Receive an email notification when you have a new unread message"
              />

              <Field
                name="passwordChanged"
                component={Switch}
                label="Password Changed"
                details="Receive an email notification when your account password is changed"
              />

              <Field
                name="emailChanged"
                component={Switch}
                label="Email Changed"
                details="Receive an email notification when your account email is changed"
              />
            </SettingsNotificationsFieldContainer>
          </InputBox>
          <SubmitButtons
            setEditActive={props.setEditActive}
            error={submitError}
          />
        </RelativeForm>
      )}
    />
  );
};

const mapStateToProps = ({ userState }) => ({
  userNotifications: userState.notifications,
});

export default connect(mapStateToProps)(settingsNotificationsEdit);
