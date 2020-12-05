import styled from "styled-components"
import is from 'styled-is'
import {createMediaQuery, mediaQueries} from "../../media/media_helpers";

export const RequirementSubHeading = styled.div`
  font-family: "Bold";
  margin-bottom: .6rem;
`
export const RequirementsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  
  ${is('smallContainer')`
       grid-template-columns: 1fr 1fr;
  `};
  
   ${createMediaQuery(mediaQueries.tabPortDown)} {
       grid-template-columns: 1fr;
   }
`