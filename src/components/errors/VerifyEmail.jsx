import React from "react";
import { StandardContainer } from "../containers/container";
import { InputBox } from "../containers/container";
import { Center } from "../alignment/Center";
import axios from "../../axios";
import queryString from "query-string";
import { connect } from "react-redux";
import FilledButton from "../buttons/FilledButton";
import { withRouter } from "react-router-dom";

import { NoticeText, NoticeHeading } from "../notices/notice_styles";
import Loading from "../loading/Loading";
import { getUserInfo } from "../../services/load_data_services";

class VerifyEmail extends React.Component {
  state = { validDate: false, loading: true };

  async componentDidMount() {
    const { emailVerificationToken } = queryString.parse(
      window.location.search
    );

    // console.log(emailVerificationToken);
    const { data } = await axios.post("/users/verify_email", {
      emailVerificationToken,
    });
    if (data.success) {
      await getUserInfo();

      this.setSuccessMessage();
    } else {
      this.setFailureMessage();
    }

    this.setState({ loading: false });

    // console.log(this.state.loading);
  }

  setSuccessMessage() {
    const heading = "Email Verified";
    const text = "Your email has been verified. You can close this page.";
    this.setState({ heading, text });
  }

  setFailureMessage() {
    const heading = "Something Went Wrong";
    const text = `We were unable to verify your email. Please try resending the link from your account settings. You can close this page.`;
    this.setState({ heading, text });
  }

  closePage() {
    this.props.history.push("/");
  }

  render() {
    return (
      <StandardContainer>
        <Center vertical navbarHeight={this.props.navbarHeight} fillPage>
          <InputBox
            center
            navbarBottomMargin
            navbarHeight={this.props.navbarHeight}
            width="60%"
            height="22rem"
            customSize
          >
            <Center>
              <NoticeHeading>{this.state.heading}</NoticeHeading>
              <NoticeText smallBottomSpace> {this.state.text} </NoticeText>
              <FilledButton
                btnText="Close"
                onClick={this.closePage.bind(this)}
              />
              {this.state.loading && (
                <Loading
                  solidBackground
                  loading={this.state.loading}
                  loadingText="Verifying Email"
                />
              )}
            </Center>
          </InputBox>
        </Center>
      </StandardContainer>
    );
  }
}

const mapStateToProps = ({ navbarState }) => ({
  navbarHeight: navbarState.navbarHeight,
});

export default withRouter(connect(mapStateToProps)(VerifyEmail));
