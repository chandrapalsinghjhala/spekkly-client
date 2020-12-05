import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { clearFiltersDispatch } from "../../../redux/actions/home_actions";

const PostOptionsContainer = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

const Heading = styled.div`
  font-family: "Bold";
  margin-bottom: 0.4rem;
`;

const ClearFiltersButton = styled.span`
  margin-left: auto;
  color: var(--primary-color);
  cursor: pointer;
`;

const HomePostOptions = ({ postsLength }) => {
  const clearFilter = useSelector(
    ({ homeState: { clearFilters } }) => clearFilters
  );
  const dispatch = useDispatch();

  const handleClearFilter = () => {
    dispatch(clearFiltersDispatch(clearFilter + 1));
  };

  return (
    <PostOptionsContainer>
      <span>
        <Heading>Showing:</Heading> {postsLength} filtered results
      </span>
      <ClearFiltersButton onClick={handleClearFilter}>
        Clear Filters
      </ClearFiltersButton>
    </PostOptionsContainer>
  );
};

export default HomePostOptions;
