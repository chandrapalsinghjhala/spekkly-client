import React, { useEffect, useState } from "react";
import axios from "../../../axios";
import useDeepCompareEffect from "use-deep-compare-effect";
import isObjectEmpty from "is-object-empty";
import { useSelector, useDispatch } from "react-redux";
import isEmptyObject from "is-object-empty";

import { StandardContainer } from "../../containers/container";
import HomeSearch from "./HomeSearch";
import HomeFilters from "./HomeFilters";
import HomePostsList from "./HomePostsList";
import {
  isLoginOpen,
  isResetPasswordOpen,
} from "../../../redux/actions/login_actions";
import { setNextPage } from "../../../services/load_data_services";
import nestedProperty from "nested-property";
import { HomeMainContainer } from "./styles/home_styles";

const Home = (props) => {
  const [filters, setFilters] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterPostsVersion, setFilterPostsVersion] = useState(0);

  const [postsLoadingError, setPostsLoadingError] = useState("");
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [totalDocs, setTotalDocs] = useState(0);

  const userId = useSelector(({ userState: { userId } }) => userId);
  const dispatch = useDispatch();

  const getPosts = async () => {
    try {
      setLoading(true);

      const params = {
        userId,
        filters,
        page,
      };

      const { data } = await axios.get("/posts", { params });

      setPosts([...posts, ...data.posts]);
      setHasNextPage(data.hasNextPage);
      setTotalDocs(data.totalDocs);
      if (posts.length === 0 && data.posts.length === 0) {
        if (isObjectEmpty(filters)) {
          setPostsLoadingError("There are no posts yet on Spekkly");
        } else {
          setPostsLoadingError("No posts matched your filters");
        }
      } else {
        setPostsLoadingError("");
      }
    } catch (e) {
      setPostsLoadingError(
        "Posts could not be loaded right now. Please try again later"
      );
    } finally {
      setLoading(false);
    }
  };

  const clearFilter = useSelector(
    ({ homeState: { clearFilters } }) => clearFilters
  );

  useEffect(() => {
    if (props.resetPassword) {
      dispatch(isResetPasswordOpen(true));
      dispatch(isLoginOpen(true));
    }
  });

  useEffect(() => {
    if (clearFilter > 0) {
      setFilters({});
    }
  }, [clearFilter]);

  useEffect(() => {
    if (hasNextPage) {
      getPosts();
    }
  }, [page, filterPostsVersion]);

  useDeepCompareEffect(() => {
    setPage(1);
    setHasNextPage(true);
    setPosts([]);
    setFilterPostsVersion(filterPostsVersion + 1);
  }, [filters, nestedProperty.get(filters, "transit.length")]);

  return (
    <StandardContainer home>
      <HomeSearch filters={filters} setFilters={setFilters} />
      <HomeMainContainer>
        <HomeFilters filters={filters} setFilters={setFilters} />
        <HomePostsList
          loading={loading}
          posts={posts}
          totalDocs={totalDocs}
          hasFilters={!isEmptyObject(filters)}
          setNextPage={() => setNextPage(hasNextPage, loading, setPage, page)}
          postsLoadingError={postsLoadingError}
        />
      </HomeMainContainer>
    </StandardContainer>
  );
};

export default Home;
