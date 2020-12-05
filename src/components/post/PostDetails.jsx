import React, { useState, useEffect } from "react";
import { StandardContainer } from "../containers/container";
import axios from "../../axios";
import SideProfileInfo from "./SideProfileInfo";
import { PostOuterContainer } from "./styles/postDetailsStyles";
import PostDetailsItem from "./PostDetailsItem";
import Loading from "../loading/Loading";
import FullScreenBox from "../containers/FullScreenBox";

const PostDetails = (props) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  // console.log(props.params);
  // const [anyChange, setAnyChange] = useState(true);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const {
        data: { post },
      } = await axios.get(`/posts/${props.params.match.params.id}`);
      setPost(post);
    } catch (e) {
      setLoadingError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
    // setAnyChange(false);
  }, []);

  return (
    <div>
      {loading && <Loading fillPage clearBackground />}

      {!loadingError && !loading && (
        <StandardContainer post>
          <PostOuterContainer>
            <PostDetailsItem post={post} postSection={props.postSection} />
            <SideProfileInfo post={post} />
          </PostOuterContainer>
        </StandardContainer>
      )}

      {loadingError && (
        <FullScreenBox clearBackground>
          <div>This post could not be loaded right now</div>
        </FullScreenBox>
      )}
    </div>
  );
};

export default PostDetails;
