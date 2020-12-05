import React from "react";
import styled from "styled-components";
import { loadingAnimation } from "./loading_styles";
import is, { isOr } from "styled-is";
import doTimes from "do-times";

const blackLoadingIconWidthHeight = "18px";
const whiteLoadingIconWidthHeight = "15px";

const LoadingSpinner = styled.div`
  position: absolute;

  ${is("insideButtonLoading")`
        top: calc(50% - ${whiteLoadingIconWidthHeight} / 2);
        left: calc(50% - ${whiteLoadingIconWidthHeight} - ${(props) =>
    props.buttonTextWidth}px / 2);
        transform: translateX(-1rem);
    `}

  ${is("leftSideLoading")`
        left: 0;
        top: calc(50% - ${blackLoadingIconWidthHeight} / 2);
        transform: translateX(1.3rem);
    `}
    
    ${is("rightSideLoading")`
        right: 0;
        top: calc(50% - ${blackLoadingIconWidthHeight} / 2);
        transform: translateX(1.3rem);
    `}
`;

const LoadingWheel = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${whiteLoadingIconWidthHeight};
  height: ${whiteLoadingIconWidthHeight};
  border: 2px solid #fff;
  border-radius: 50%;
  animation: ${loadingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;

  ${is("blackLoadingIcon")`
        border: 2px solid rgba(0,0,0,1);
        width: ${blackLoadingIconWidthHeight};
        height: ${blackLoadingIconWidthHeight};
        border-color: rgba(0,0,0,1) transparent transparent transparent;
    `}

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const LoadingButtonSpinner = (props) => {
  const wheels = [];

  {
    doTimes(4, (index) =>
      wheels.push(
        <LoadingWheel
          key={index}
          blackLoadingIcon={props.rightSideLoading || props.leftSideLoading}
        />
      )
    );
  }

  return (
    <LoadingSpinner
      buttonTextWidth={props.buttonTextWidth}
      rightSideLoading={props.rightSideLoading}
      insideButtonLoading={props.insideButtonLoading}
      leftSideLoading={props.leftSideLoading}
    >
      {wheels.map((item) => item)}
    </LoadingSpinner>
  );
};

export default LoadingButtonSpinner;
