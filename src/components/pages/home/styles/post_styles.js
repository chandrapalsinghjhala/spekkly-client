import styled from "styled-components"
import {createMediaQuery, mediaQueries} from "../../../media/media_helpers";

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
  grid-row-gap: 6rem;
  
  ${createMediaQuery(mediaQueries.tabPortDown)} {
     grid-template-columns: 1fr;
  }
`

export const PostContainer = styled.div`
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`

export const PostTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2.6rem;
`

export const PostDate = styled.div`
  margin-bottom: 3rem;
`


export const RequirementsText = styled.div`
  font-family: Bold;
  margin-bottom: 1.6rem;
`

export const DetailsText = styled.div`
  font-family: Bold;
  margin-bottom: .7rem;
`

export const RequirementsList = styled.div`
  display: grid;
  grid-row-gap: 1.5rem;
`

export const DescriptionText = styled.p`
  margin-bottom: 3rem;
`

export const RequirementsContainer = styled.div`
  margin-bottom: 3.6rem;
  margin-top: auto;
`