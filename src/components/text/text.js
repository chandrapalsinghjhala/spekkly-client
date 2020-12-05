import styled from "styled-components";
import is from "styled-is";

export const TextGridContainer = styled.div`
  display: grid;
  grid-row-gap: 4rem;
`;

export const TextGridLabel = styled.div`
  margin-bottom: 1rem;
  font-family: "Bold";
`;

export const GreyText = styled.div`
  color: grey;
`;

export const StandardParagraph = styled.p`
  line-height: 2.6rem;
`;

export const LineSpaceText = styled.div`
  white-space: pre-line;
`;

export const BoldText = styled.div`
  font-family: "Bold";

  ${is("clickable")`
    cursor: pointer;
  `}
`;

export const CenteredHeading = styled.h1`
  text-align: center;
  font-size: 3.4rem;
  margin-bottom: 5rem;
`;
