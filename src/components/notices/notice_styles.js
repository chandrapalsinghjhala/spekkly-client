import styled from "styled-components";
import is from "styled-is";

export const NoticeText = styled.p`
  margin-bottom: 5rem;

  ${is("smallBottomSpace")`
       margin-bottom: 3rem;
  `};

  ${is("noBottomMargin")`
       margin-bottom: 0rem;
  `};
`;

export const NoticeHeading = styled.h1`
  margin-bottom: 2rem;
  font-size: 3rem;
`;
