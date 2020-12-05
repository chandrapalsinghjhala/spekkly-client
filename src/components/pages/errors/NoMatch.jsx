import React from "react";
import {
  StandardContainer,
  TextContainerInner,
} from "../../containers/container";
import {
  NoMatchMainTitle,
  NoMatchText,
  NoMatchLink,
  NoMatchLinkContainer,
} from "./error_styles";

import { BoldText } from "../../text/text";

import { Link } from "react-router-dom";
import { Center } from "../../alignment/Center";

class NoMatch extends React.Component {
  render() {
    return (
      <StandardContainer text>
        <TextContainerInner>
          <NoMatchMainTitle>404</NoMatchMainTitle>
          <Center>
            <NoMatchText>
              We're sorry but we could not find that page. Perhaps you're
              looking for one of the pages below?
            </NoMatchText>
          </Center>
          <Center>
            <NoMatchLinkContainer>
              <div>
                <BoldText>Post</BoldText>
                <Link to="/">
                  <NoMatchLink middleLink> View Public Posts </NoMatchLink>
                </Link>
                <Link to="/create-post">
                  <NoMatchLink> Create Post </NoMatchLink>
                </Link>
              </div>
              <div>
                <BoldText>Account</BoldText>
                <Link to="/posts">
                  <NoMatchLink middleLink> My Posts </NoMatchLink>
                </Link>
                <Link to="/messages">
                  <NoMatchLink middleLink> Messages </NoMatchLink>
                </Link>
                <Link to="/settings">
                  <NoMatchLink> Settings </NoMatchLink>
                </Link>
              </div>
              <div>
                <BoldText>Company</BoldText>
                <Link to="/about">
                  <NoMatchLink middleLink> About </NoMatchLink>
                </Link>
                <Link to="/terms-of-service">
                  <NoMatchLink middleLink> Terms of Service </NoMatchLink>
                </Link>
                <Link to="/privacy-policy">
                  <NoMatchLink> Privacy Policy </NoMatchLink>
                </Link>
              </div>
            </NoMatchLinkContainer>
          </Center>
        </TextContainerInner>
      </StandardContainer>
    );
  }
}

export default NoMatch;
