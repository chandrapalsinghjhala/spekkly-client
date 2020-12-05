import styled from "styled-components"
import {createMediaQuery, mediaQueries} from "../../media/media_helpers";

export const PostDetailsContainer = styled.div`
  background-color: white;
  padding: 3rem;
  position: relative;
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  
  ${createMediaQuery(mediaQueries.tabPortDown)} {
    font-size: 3rem;
  }
`

export const PostTitleContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`

export const PostOuterContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1.2fr;
  grid-column-gap: 9rem;
  margin-top: 6rem;
  margin-bottom: 6rem;
  
  ${createMediaQuery(mediaQueries.tabPortDown)} {
        grid-template-columns: 1fr;
        grid-row-gap: 6rem;
        margin-top: 2rem;
        margin-bottom: 6rem;
  }
`

export const PostOptionsContainer = styled.div`
  margin-left: auto;
  margin-top: .2rem;
  position: relative;
`

export const PostDescriptionContainer = styled.div`
  margin-bottom: 4rem;
`

export const SectionTitle = styled.div`
  margin-bottom: .6rem;
`

export const PostDetailsSection = styled.div`
  margin-bottom: 4rem;
`

export const DateAuthorText = styled.div`
  margin-bottom: 4rem;
`