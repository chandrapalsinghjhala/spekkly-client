import styled from "styled-components"
import is from 'styled-is'
import {ReactSVG} from 'react-svg'
import {createMediaQuery, mediaQueries} from "../../media/media_helpers";


export const ProfileImage = styled.img`
  border-radius: 100px;
  width: 3.8rem;
  margin-right: 1rem;
  
  ${is('profileModal')`
    width: 11rem;
    margin-right: 2rem
  `}
`

export const ProfileName = styled.div`
  font-family: "Bold";
  
   ${is('profileModal')`
    font-size: 2.4rem
    margin-bottom: .6rem
  `}
`

export const ProfileDetailsContainer = styled.div`
  display: grid;
  grid-row-gap: 3rem;
`

export const ProfileNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  ${is('profileModal')`
    margin-top: 4rem;
    margin-bottom: 5rem;
  `}
`

export const SideProfileOptionsContainer = styled(ReactSVG)`
  margin-left: auto;
  align-items: center;
  display: flex;
`

export const BioContainer = styled.div`
  margin-bottom: 2rem;
`

export const SideProfileContainer = styled.div`
  ${createMediaQuery(mediaQueries.tabLandUp)} {
    margin-top: 10rem;
    position: sticky;
  }
`

export const ReadMoreText = styled.div`
  color: grey;
  font-size: 1.4rem;
  margin-top: 1rem;
  cursor: pointer;
`
