import React from "react";
import HomePostOptions from "./HomePostOptions";
import { useHistory } from "react-router-dom";
import BottomScrollListener from "react-bottom-scroll-listener";
import HomePostListItem from "./HomePostListItem";
import { Center } from "../../alignment/Center";

import { RelativePositionContainer } from "../../containers/container";

import { PostsContainer } from "./styles/post_styles";
import Loading from "../../loading/Loading";

const HomePostsList = (props) => {
  const history = useHistory();

  const handlePostClick = (postId) => {
    history.push(`/posts/${postId}`);
  };

  const isValidPost = (post) => {
    if (post.belongsToUser) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <RelativePositionContainer>
      {props.loading && props.posts.length === 0 && <Loading clearBackground />}

      {props.hasFilters && <HomePostOptions postsLength={props.totalDocs} />}

      {props.postsLoadingError && (
        <Center h100 vertical>
          <div> {props.postsLoadingError} </div>
        </Center>
      )}

      {props.posts.length > 0 && (
        <BottomScrollListener onBottom={props.setNextPage}>
          <PostsContainer>
            {props.posts.map((post) => {
              return (
                <HomePostListItem
                  post={post}
                  key={post.id}
                  handlePostClick={() => handlePostClick(post.id)}
                />
              );
            })}
          </PostsContainer>
        </BottomScrollListener>
      )}
    </RelativePositionContainer>
  );
};

export default HomePostsList;
