import React, { useState, useEffect } from "react";
import { StandardContainer } from "../../containers/container";
import PostDetailsItem from "../../post/PostDetailsItem";
import axios from "../../../axios";
import { getAuthHeaderWithData } from "../../../services/auth_header_services";
import { PostsContainer } from "./styles/styles";
import BottomScrollListener from "react-bottom-scroll-listener";
import NoPosts from "./NoPosts";
import Loading from "../../loading/Loading";
import FullScreenBox from "../../containers/FullScreenBox";

const UserPosts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingError, setLoadingError] = useState("");
  const [hasNextPage, setHasNextPage] = useState(true);
  const [anyChange, setAnyChange] = useState(false);

  const getPosts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "/users/posts",
        getAuthHeaderWithData({ page })
      );
      if (data.success) {
        if (page === 1) {
          setPosts(data.posts);
        } else {
          setPosts([...posts, ...data.posts]);
        }
        setHasNextPage(data.hasNextPage);

        // console.log(data.posts);
      } else {
        throw new Error();
      }
    } catch (e) {
      setLoadingError(
        "Posts could not be loaded right now. Please try again later"
      );
    } finally {
      setLoading(false);
    }
  };

  const setNextPage = () => {
    if (hasNextPage && !loading) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (page === 1) {
      getPosts();
    } else {
      if (hasNextPage) {
        getPosts();
      }
    }
  }, [page]);

  useEffect(() => {
    if (anyChange) {
      if (page === 1) {
        getPosts();
      } else {
        setAnyChange(false);
        setPage(1);
      }
    } else {
    }
  }, [anyChange]);

  return (
    <div>
      {!loadingError && posts.length > 0 && (
        <StandardContainer userPosts>
          <BottomScrollListener onBottom={setNextPage}>
            <PostsContainer>
              {posts.map((post, index) => (
                <PostDetailsItem
                  post={post}
                  smallContainer
                  key={index}
                  setAnyChange={setAnyChange}
                />
              ))}
            </PostsContainer>
          </BottomScrollListener>
        </StandardContainer>
      )}

      {!loadingError && !loading && posts.length === 0 && <NoPosts />}

      {loadingError && (
        <FullScreenBox clearBackground>
          <div>Posts could not be loaded</div>
        </FullScreenBox>
      )}

      {!loadingError && loading && posts.length === 0 && (
        <Loading fillPage clearBackground />
      )}
    </div>
  );
};

export default UserPosts;
