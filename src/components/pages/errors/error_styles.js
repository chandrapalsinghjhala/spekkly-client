import styled from "styled-components";
import is from 'styled-is';

export const NoMatchMainTitle = styled.h1`
    font-size: 10rem;
    text-align: center;
    color: #afafaf;
    margin-bottom: 2.4rem;
`

export const NoMatchText = styled.p`
  font-size: 1.8rem;
  text-align: center;
  width: 80%;
`

export const NoMatchLink = styled.div`
   color: #2A5DB0;
   
    ${is('middleLink')`
        margin-bottom: .7rem;
        margin-top: .7rem;
    `};
`

export const NoMatchLinkContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  width: 80%;
`
