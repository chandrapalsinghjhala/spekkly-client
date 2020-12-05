import styled from "styled-components";
import React from "react";
import edit from "../../assets/icons/edit.svg";
import { connect } from "react-redux";

const IconHeadingContainer = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-bottom: var(--box-border);
  background-color: white;
  position: relative;
  text-align: center;
`;

const Icon = styled.img`
  width: 1.8rem;
`;

const Heading = styled.h1`
  font-size: 1.8rem;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 2.4rem;
  padding: 1rem;
  background-color: #fafafa;
  border-radius: 100px;
  box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
  transition: box-shadow 0.2s linear;
  cursor: pointer;
  top: 21px;

  &:hover {
    box-shadow: 0 2px 10px 1px rgba(57, 73, 76, 0.4),
      0 1px 2px rgba(57, 73, 76, 0.25);
  }
`;

const IconHeadingBox = (props) => {
  return (
    <IconHeadingContainer>
      <Heading> {props.heading} </Heading>
      {props.activeIndex !== 3 && (
        <IconContainer onClick={props.handleClick}>
          <Icon alt="edit button" src={props.editIcon} />
        </IconContainer>
      )}
    </IconHeadingContainer>
  );
};

const mapStateToProps = ({ assetState }) => ({
  editIcon: assetState.SETTINGS_EDIT_ICON,
});

export default connect(mapStateToProps)(IconHeadingBox);
