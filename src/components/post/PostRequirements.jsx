import React from "react";
import nestedProperty from "nested-property";

import {
  RequirementSubHeading,
  RequirementsContainer,
} from "./styles/requirements";

const PostRequirements = ({ post, smallContainer }) => (
  <div>
    {post.space && post.cost && (
      <RequirementsContainer smallContainer={smallContainer}>
        <div>
          <RequirementSubHeading>Space</RequirementSubHeading>
          <div>
            {post.space.min} to {post.space.max} sqft
          </div>
        </div>

        <div>
          <RequirementSubHeading>Cost</RequirementSubHeading>
          <div>
            ${post.cost.min} to ${post.cost.max} / month
          </div>
        </div>

        <div>
          <RequirementSubHeading>Type</RequirementSubHeading>
          <div>{post.type}</div>
        </div>

        <div>
          <RequirementSubHeading>Transit</RequirementSubHeading>
          {post.transit &&
            post.transit.map((item, index) => <div key={index}>{item}</div>)}
        </div>
      </RequirementsContainer>
    )}
  </div>
);

export default PostRequirements;
