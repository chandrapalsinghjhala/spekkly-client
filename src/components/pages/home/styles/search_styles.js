import styled from "styled-components"
import {createMediaQuery, mediaQueries} from "../../../media/media_helpers";

export const SearchForm = styled.form`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr .2rem 1fr auto;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.16);
  background-color: white;
  
  ${createMediaQuery(mediaQueries.tabPortDown)} {
     grid-template-columns: 1fr auto;
  }
`

export const HomeSearchFormContainer = styled.div`
  
   background-color: var(--background-color);
   
   ${createMediaQuery(mediaQueries.tabLandUp)} {
      position: sticky;
      top: 0;
      z-index: 1;
      padding: 7rem 0; 
  }
  
  ${createMediaQuery(mediaQueries.tabPortDown)} {
      padding-top: 5rem;
      padding-bottom: 7rem;
  }
`

export const HomeSearchInput = styled.input`
  font-size: 1.5rem;
  border: none;
  padding: 2rem;
  height: 100%;
  width: 100%;
`

export const SearchSpacer = styled.div`
  background-color: var(--background-color);
`