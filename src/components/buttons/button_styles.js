import styled, {css} from "styled-components";
import is from 'styled-is';

export const buttonBase = css`
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 5px;
  text-align: center;
  padding: 1.2rem 2.4rem;
  transition: all .1s linear;
  
   &:focus {
    outline: none;
  }
  
   ${is('small')`
     padding: 1rem 1.7rem;
  `}
  
  ${is('stretch')`
    width: 100%;
  `}
  
  ${is('no-stretch')`
    justify-self: center;
    align-self: center;
  `}
  
   ${is('rightMargin')`
     margin-right: 2rem
  `};
`

export const FilledButtonTag = styled.button`
  ${buttonBase};
  color: white;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
 
  &:hover {
    background-color: var(--primary-color-highlighted);
    border: 1px solid var(--primary-color-highlighted);
  }
  
  ${is('warning')`
   border: 1px solid var(--button-warning-color);
   background-color: var(--button-warning-color);
   
   &:hover {
        background-color: var(--button-warning-highlighted);
        border: 1px solid var(--button-warning-highlighted);
      }
  `}
  
  ${is('disabledColor')`
      background-color: var(--disabled-color);
      border: 1px solid var(--disabled-color);

      &:hover {
        background-color: var(--disabled-color-highlighted);
        border: 1px solid var(--disabled-color-highlighted);
      }
  `}
`

export const ButtonText = styled.div`
  display: inline-block;
  color: white;
  
  ${is('small')`
    font-size: 1.5rem;
  `}
`

export const OuterButtonContainer = styled.div`
  display: inline-block;
  
   ${is('stretch')`
        display: block;
   `}
`

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  ${is('mtAuto')`
    margin-top: auto;
  `}
  
   ${is('mlAuto')`
    margin-left: auto;
  `}
   
    ${is('homeSearch')`
    padding: 1rem;
  `}
`