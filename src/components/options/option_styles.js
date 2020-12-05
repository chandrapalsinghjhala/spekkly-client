import styled, { css } from "styled-components";
import is, { isNot } from "styled-is";

const optionsArrow = css`
  &:after,
  &:before {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
    top: -8px;
    content: "";
    position: absolute;

    ${is("bottomArrow")`
         top: initial;
         left: 0;
         bottom: -8px;
         transform: rotate(180deg);
    `}
  }

  &:before {
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #cecece;

    ${is("bottomArrow")`
         top: initial;
         bottom: -8px;
         transform: translateY(1px) rotate(180deg);
    `}

    ${isNot("bottomArrow")`
         transform: translateY(-1px);
    `}
     
    margin-left: -1px;
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 4px;
  right: 1.2rem;
  padding: 0.4rem 0;
  z-index: 100;
  transition: top linear 0.1s;

  ${is("profileOptions")`
    top: 2.8rem;
  `};

  ${is("conversationOptions")`
         ${optionsArrow}
      
     &:after,
     &:before {
        left: 13%;
     }
  `};

  ${is("emojiContainer")`
      ${optionsArrow}
      padding: 0;
      right: -2rem
      top: calc(-2rem - ${(props) => props.height}px);
     
      
      &:after,
      &:before {
        left: 88%;
      }
   `};

  ${is("messageOptions")`
    ${optionsArrow}
    right: -1.4rem;
    top: -3.4rem;
    
     &:after,
     &:before {
        left: 64%;
     }
  `};

  ${is("fixed")`
    position: fixed;
  `};
`;

export const Option = styled.div`
  white-space: nowrap;
  font-size: 1.4rem;
  padding: 0.8rem 2rem;
  cursor: pointer;
  transition: background-color 0.1s linear;

  &:hover {
    background-color: #e6e6e6;
  }
`;
