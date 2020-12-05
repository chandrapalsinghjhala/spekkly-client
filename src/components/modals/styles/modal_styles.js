import styled, { keyframes } from "styled-components";
import is from "styled-is";
import { createMediaQuery, mediaQueries } from "../../media/media_helpers";

const grow = keyframes`
  from {transform: scale(0);}
  to {transform: scale(1);}
`;

export const ModalContainerTag = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.86);
  animation: ${grow} 0.1s linear forwards;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalInnerContainer = styled.div`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  width: auto;
  padding: 3rem;
  position: relative;
  animation: ${grow} 0.05s linear;
  overflow: scroll;

  ${is("stretch")`
    width: 40%;
    height: 50%;
    overflow: scroll;
  `}

  ${is("large")`
    width: 80%;
    max-width: 80%;
    padding: 6rem 10rem;
  `}
   
   ${is("medium")`
    width: 60%;
    max-width: 60%;
    padding: 10rem;
  `}
   
  ${createMediaQuery(mediaQueries.desktopUp)} {
    max-height: 80vh;
    min-width: 20%;
    max-width: 200rem;
  }

  ${createMediaQuery(mediaQueries.desktopWideUp)} {
    padding: 14rem;
  }

  ${createMediaQuery(mediaQueries.tabLandDown)} {
    max-width: 100%;
    width: 90%;
    padding: 8rem 6rem;
    height: calc(94vh - var(--vh-offset, 0px));
  }

  ${createMediaQuery(mediaQueries.phoneDown)} {
    padding: 8rem 4rem;
  }
`;

export const ModalHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.4rem;
`;

export const ModalText = styled.p`
  margin-bottom: 3rem;
`;

export const ModalFormContainer = styled.div`
  margin-bottom: 2rem;
`;

export const ConfirmAlertWithTextFieldContainer = styled.div`
  margin-bottom: 2rem;
`;

export const CloseButtonImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const CloseButtonContainer = styled.button`
  padding: 1.2rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`;
