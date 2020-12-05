import React from "react";
import { NoPostsHeading, NoPostsParagraph } from "./styles/styles";
import { Link } from "react-router-dom";
import FilledButton from "../../buttons/FilledButton";
import FullScreenBox from "../../containers/FullScreenBox";

const NoPosts = () => (
  <FullScreenBox>
    <NoPostsHeading>You Don't Have Any Posts</NoPostsHeading>
    <NoPostsParagraph>
      It looks like you haven't created any posts yet. Click the button below to
      create your first one.
    </NoPostsParagraph>
    <Link to="/post">
      <FilledButton buttonText="Create Post" />
    </Link>
  </FullScreenBox>
);

export default NoPosts;
