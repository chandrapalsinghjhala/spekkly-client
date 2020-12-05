import styled from "styled-components";
import React from "react";
import is from "styled-is";

const ViewBoxHeadingTag = styled.h1`
  text-align: center;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
  font-size: 1.8rem;
  border-bottom: var(--box-border);
  background-color: white;

  ${is("emptyConversation")`
     height: 6rem;
  `}
`;

const ViewBoxHeading = (props) => (
  <ViewBoxHeadingTag emptyConversation={props.emptyConversation}>
    {" "}
    {props.heading}{" "}
  </ViewBoxHeadingTag>
);

export default ViewBoxHeading;
