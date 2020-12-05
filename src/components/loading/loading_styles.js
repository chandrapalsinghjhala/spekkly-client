import styled, {keyframes} from "styled-components"
import is from 'styled-is'

export const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingBackground = styled.div`
  display: block;
  background-color: rgba(255,255,255,0.85);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  
  ${is('fixed')`
      position: fixed;
  `};
  
  ${is('clearBackground')`
      background-color: rgba(255,255,255,0);
  `};
  
  ${is('solidBackground')`
      background-color: rgba(255,255,255,1);
  `};
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;
  height: 100%;  
`

export const LoadingText = styled.div`
  margin-top: 3rem;
`

export const LoadingIcon = styled.div`
  &:before {
  content: '';
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  }
  
  &:not(:required):after {
  content: '';
  display: block;
  font-size: 10px;
  width: 1rem;
  height: 1rem;
  margin-top: -0.5rem;
  animation: ${loadingAnimation} 1500ms infinite linear;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.75) 1.5rem 0 0 0, rgba(0, 0, 0, 0.75) 1.1rem 1.1rem 0 0, rgba(0, 0, 0, 0.75) 0 1.5rem 0 0, rgba(0, 0, 0, 0.75) -1.1rem 1.1rem 0 0, rgba(0, 0, 0, 0.75) -1.5rem 0 0 0, rgba(0, 0, 0, 0.75) -1.1rem -1.1rem 0 0, rgba(0, 0, 0, 0.75) 0 -1.5rem 0 0, rgba(0, 0, 0, 0.75) 1.1rem -1.1rem 0 0;
  
  
  ${is('fillPage')`
    margin-bottom: ${props => props.navbarHeight}px;
  `};
  
   ${is('marginBottom')`
      margin-bottom: ${props => props.marginBottom}px;
   `};
  }
}`