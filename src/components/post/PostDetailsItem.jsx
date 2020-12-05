import React, { useState } from "react";
import {
  DateAuthorText,
  PostDescriptionContainer,
  PostDetailsContainer,
  PostDetailsSection,
  PostTitle,
  PostTitleContainer,
  PostOptionsContainer,
} from "./styles/postDetailsStyles";
import "../icons/icon_styles.scss";
import PostOptions from "./PostOptions";
import PostRequirements from "./PostRequirements";
import { formatAuthoredDate } from "./helpers/post_details_helpers";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import { RequirementSubHeading } from "./styles/requirements";

import axios from "../../axios";
import { getAuthHeaderWithData } from "../../services/auth_header_services";

const PostDetailsItem = ({
  post,
  postSection,
  anyChange,
  setAnyChange,
  smallContainer,
}) => {
  const [optionsActive, setOptionsActive] = useState(false);
  const isLoggedIn = useSelector(({ sessionState }) => sessionState.isLoggedIn);
  const optionsIcon = useSelector(
    ({ assetState: { OPTIONS_ICON } }) => OPTIONS_ICON
  );

  function postDeleted() {
    setAnyChange(true);
  }

  return (
    <PostDetailsContainer>
      {post.belongsToUser && (
        <div>
          <PostTitleContainer>
            <PostTitle> {post.title} </PostTitle>
            {isLoggedIn && (
              <PostOptionsContainer>
                <ReactSVG
                  src={optionsIcon}
                  onClick={() => setOptionsActive(!optionsActive)}
                  className={`post-options-ignore-click-${post.id}`}
                  beforeInjection={(svg) => {
                    svg.classList.add("standard-icon");
                  }}
                />

                {optionsActive && (
                  <PostOptions
                    post={post}
                    postSection={postSection}
                    outsideClickIgnoreClass={`post-options-ignore-click-${post.id}`}
                    reportedEntityType="post"
                    hideOptions={() => setOptionsActive(false)}
                    postDeleted={postDeleted}
                  />
                )}
              </PostOptionsContainer>
            )}
          </PostTitleContainer>

          <DateAuthorText>
            Posted {formatAuthoredDate(post.createdAt)} by{" "}
            {post.belongsToUser.name}
          </DateAuthorText>

          <PostDetailsSection>
            <RequirementSubHeading>Details</RequirementSubHeading>
            <PostDescriptionContainer>
              {post.description}
            </PostDescriptionContainer>
          </PostDetailsSection>

          <PostDetailsSection>
            <RequirementSubHeading>Location</RequirementSubHeading>
            <div>{post.location}</div>
          </PostDetailsSection>
          <PostRequirements post={post} smallContainer={smallContainer} />
        </div>
      )}
    </PostDetailsContainer>
  );
};

export default PostDetailsItem;
