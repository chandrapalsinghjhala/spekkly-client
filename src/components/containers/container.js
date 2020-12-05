import styled, {css} from 'styled-components'
import is from 'styled-is'
import {createMediaQuery, mediaQueries} from "../media/media_helpers";


export const StandardContainer = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 2rem;
  padding-left: 2rem;
  display: block;
  max-width: 115rem;
  position: relative;

  ${is('nav')`
    z-index: 11;
    max-width: var(--nav-container);
  `};
  
   ${is('userPosts')`
    max-width: 120rem;
  `};
   
  ${is('text')`
    max-width: 90rem;
  `};
  
  ${is('messages')`
    margin-top: 4rem;
    max-width: 170rem;
    height: calc(100vh - var(--vh-offset, 0px) - var(--messages-navbar-offset) - ${props => props.navbarHeight}px)
  `};
  
   ${is('post')`
    max-width: 130rem;
  `};
  
   ${is('home')`
    max-width: 150rem;
  `};
`

export const OverflowContainer = styled.div`
  overflow-y: auto;
`

export const SideNavContainer = styled.div`
  display: grid;
  grid-column-gap: 2rem;
   margin-top: 4rem;
  
  
   ${createMediaQuery(mediaQueries.tabLandUp)} { 
      grid-template-columns: .4fr 1fr;
      margin-bottom: 6rem;
     
  }
`

export const ContentSection = styled.div`
    background-color: var(--background-color);
    position: relative;
`

export const InputBoxBase = css`
  padding: var(--input-box-padding);
  background-color: white;
  position: relative;
  
  ${is('center')`
    display: flex;
    flex-direction: column;
    align-items: center;
  `};
   
   ${is('clearBackground')`
      background-color: rgba(255,255,255,0);
  `};
   
  ${is('borderBottom')`
    border-bottom: 2px solid var(--background-color);
  `};
  
  ${is('extraPadding')`
    padding: 4rem
  `};
  
  ${is('textCenter')`
    text-align: center;
  `};
  
  ${is('borderTop')`
    border-top: 2px solid var(--background-color);
  `};
    
  ${is('belowSiblings')`
       z-index: 0;
  `};
`


export const InputBox = styled.div`
    ${InputBoxBase};
    
     ${is('emptyBox')`
        height: 6rem;
     `}
     
      ${is('mobileScroll')`
       ${createMediaQuery(mediaQueries.tabPortDown)} { 
            overflow: auto;
        }
     `}
     
     ${is('smallPadding')`
       padding: 1.3rem 2rem;
     `}
    
    ${is('navbarBottomMargin')`
        margin-bottom: ${props => (props.navbarHeight)}px;
    `};
    
    ${is('customSize')`
         ${is('width')`
            width: ${props => (props.width)};
        `};
    
        ${is('height')`
             height: ${props => (props.height)};
        `};
    `};
    
    
    ${is('customMobileSize')`
      ${createMediaQuery(mediaQueries.tabPortDown)} { 
           ${is('width')`
            width: ${props => (props.width)};
        `};
    
        ${is('height')`
             height: ${props => (props.height)};
        `};
      }
    `};
    
    
    
    ${is('center')`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
  `};
`

export const RelativePositionContainer = styled.div`
  position: relative;

  ${is('inline')`
       display: inline-block;
       margin-right: 2rem;
  `};
`

export const FlexContainer = styled.div`
  display: flex;
  
  ${is('alignCenter')`
       align-items: center;
  `};
`

export const TextContainerInner = styled.div`
  margin-top: 8rem;
  margin-bottom: 6rem;
  background-color: white;
  padding: 4rem;
  
  ${createMediaQuery(mediaQueries.tabPortDown)} {
      padding: 2rem;
  }
  
  ${createMediaQuery(mediaQueries.phoneDown)} {
    margin: 4rem 0;
  }
`

export const FullHeightContainer = styled.div`
  height: 100%;
`
