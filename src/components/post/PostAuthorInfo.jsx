import React from "react";
import nestedProperty from "nested-property";
import dateFormat from "dateformat";
import FilledButton from "../buttons/FilledButton";

import {
  AuthorContainer,
  ProfileDetails,
  ProfileImage,
  NameDateContainer,
  NameText,
  DateText,
} from "./styles/post_author_styles";

class PostAuthorInfo extends React.Component {
  render() {
    return (
      <AuthorContainer>
        <ProfileDetails>
          <ProfileImage
            src={nestedProperty.get(
              this.state.post,
              "belongsToUser.profileImage"
            )}
            alt="Author's profile picture"
          />
          <NameDateContainer>
            <NameText>
              {nestedProperty.get(this.state.post, "belongsToUser.name")}
            </NameText>
            <DateText>
              {dateFormat(this.state.post.createdAt, "mmm d, yyyy")}
            </DateText>
          </NameDateContainer>
        </ProfileDetails>
        <FilledButton buttonText={"Message"} left />
      </AuthorContainer>
    );
  }
}

export default PostAuthorInfo;
