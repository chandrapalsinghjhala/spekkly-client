import React from "react";
import {
  DescriptionText,
  PostContainer,
  PostDate,
  PostTitle,
  RequirementsContainer,
  RequirementsList,
} from "./styles/post_styles";
import { formatAuthoredDate } from "../../post/helpers/post_details_helpers";
import FilledButton from "../../buttons/FilledButton";
import Truncate from "react-truncate";
import { RequirementSubHeading } from "../../post/styles/requirements";

const HomePostListItem = ({ post, handlePostClick }) => {
  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostDate>
        Posted {formatAuthoredDate(post.createdAt)} by {post.belongsToUser.name}
      </PostDate>
      <DescriptionText>
        <Truncate lines={3}>{post.description}</Truncate>
      </DescriptionText>
      <RequirementsContainer>
        <RequirementsList>
          <div>
            <RequirementSubHeading>Location:</RequirementSubHeading>{" "}
            {post.location}
          </div>
          <div>
            <RequirementSubHeading>Space:</RequirementSubHeading>{" "}
            {post.space.min} to {post.space.max} sqft
          </div>
          <div>
            <RequirementSubHeading>Cost:</RequirementSubHeading> $
            {post.cost.min} to ${post.cost.max} / mo
          </div>
          <div>
            <RequirementSubHeading>Type:</RequirementSubHeading> {post.type}{" "}
          </div>
        </RequirementsList>
      </RequirementsContainer>
      <FilledButton onClick={handlePostClick} buttonText="Learn More" stretch />
    </PostContainer>
  );
};

export default HomePostListItem;
