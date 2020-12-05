import styled from "styled-components";
import {createMediaQuery, mediaQueries} from "../../../media/media_helpers";
import is from 'styled-is'

export const HomeMainContainer = styled.div`
  display: grid;
  grid-template-columns: .35fr 1fr;
  grid-column-gap: 6rem;
  margin-bottom: 6rem;
  
  ${createMediaQuery(mediaQueries.tabPortDown)} {
     grid-template-columns: 1fr;
     grid-row-gap: 5rem;
  }
`

export const HomeSidePanelForm = styled.form`
  display: grid;
  grid-row-gap: 4rem;
  
   ${createMediaQuery(mediaQueries.tabLandUp)} {
      position: sticky;
      top: 20rem;
  }
`

export const ToggleFiltersButton = styled.div`
  color: var(--primary-color);
  
    ${is('showFilters')`
       margin-bottom: 4rem;
  `};
`
