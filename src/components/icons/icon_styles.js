import styled from "styled-components";

export const IconContainer = styled.div`
  height: ${(props) =>
    props.svgContainerHeight > 0
      ? `calc(${props.svgContainerHeight}px - 4px)`
      : `100%`};
`;
