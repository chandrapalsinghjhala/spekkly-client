import styled from "styled-components"
import is from 'styled-is'

export const ForgotPasswordText = styled.div`
  margin-bottom: 5rem;
`

export const SuccessIcon = styled.img`
  width: 2.5rem;
  margin-right: 1rem;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  
  ${is('center')`
    justify-content: center;
  `};
  
   ${is('largeMarginBottom')`
      margin-bottom: 5rem;
  `};
`