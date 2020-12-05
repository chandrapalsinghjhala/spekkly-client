import styled, {css} from 'styled-components'
import is from 'styled-is'

const inputBase = css`
  display: block;
  border-radius: 2px;
  border: 1px solid #cbcbcb;
  padding: 1.2rem;
  transition: all .2s linear;
  background-color: white;
  font-size: 1.5rem;
  width: 100%;
  
  &:focus {
    border: 1px solid var(--primary-color);
    box-shadow: var(--inner-box-shadow);
  }
`

const TextInputTag = styled.input`
  ${inputBase}
  
   ${is('reducedWidth')`
     width: 80%;
  `};
   
    ${is('customWidth')`
     width: ${props => props.customWidth};
  `};
   
   ${is('homeSearch')`
       border: none;
       height: 100%;
       font-size: 1.5rem
       
       &:focus {
         border: none;
         box-shadow: none;
       }
   `};
`

const SuggestedTextPopup = styled.div`
  border-left: 1px solid var(--input-border-color);
  border-right: 1px solid var(--input-border-color);
  border-bottom: 1px solid var(--input-border-color);
  transform: translateY(-2px);
  background-color: white;
  z-index: 10;
  
   ${is('homeSearch')`
       position: absolute;
       transform: translateY(0px);
       left: 0;
       right: 0;
  `};
  
  
`

const SuggestedTextPopupText = styled.div`
  font-size: 1.3rem;
  padding: 1rem 1.4rem;
  cursor: pointer;
   
  &:hover {
   background-color: #f8f8f8;
  }
`

export {inputBase, TextInputTag, SuggestedTextPopup, SuggestedTextPopupText}