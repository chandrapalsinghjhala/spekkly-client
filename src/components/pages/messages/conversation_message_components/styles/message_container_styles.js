import styled from "styled-components"
import is, {isNot} from 'styled-is'
import {InputBoxBase} from "../../../../containers/container";
import {createMediaQuery, mediaQueries} from "../../../../media/media_helpers";

const messageProfileImage = "3.2rem"
const messageProfileImageRightMargin = "1rem"

export const MessageListContainer = styled.div`
  ${InputBoxBase};
  height: calc(100vh - ${props => props.offsetHeight}px - var(--messages-navbar-offset) - ${props => props.navbarHeight}px);
  overflow: scroll;
`

export const EmptyConversationContainer = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   height: 100%;
   
   ${is('noConversation')`
     justify-content: center;
  `};
`

export const MessageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: .2rem;
  
  ${is('isLastMessageInSeries')`
      margin-bottom: 2rem;
  `};
  
  ${is('isLastMessage')`
      margin-bottom: 0;
  `};
`

export const MessageProfileImage = styled.img`
  width: ${messageProfileImage};
  border-radius: 100px;
  margin-right: ${messageProfileImageRightMargin};
`

export const MessagesInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  
   ${isNot('authored', 'isLastMessageInSeries')`
      margin-left: calc(${messageProfileImage} + ${messageProfileImageRightMargin});
  `};
  
  ${is('authored')`
      margin-left: auto;
      margin-right: 1.8rem;
  `};
  
  ${is('images')`
      margin-bottom: 1rem;
      margin-top: 1rem;
  `};
  
   ${isNot('authored', 'isLastMessageInSeries')`
      margin-left: calc(${messageProfileImage} + ${messageProfileImageRightMargin});
  `};
   
   ${props => !props.authored && props.isLastMessageInSeries ? 'margin-bottom: 0' : ''}
   
`

export const MessagesOuterContainer = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: .4fr 1fr;
  height: 100%;
  
  ${createMediaQuery(mediaQueries.tabPortDown)} {
     grid-template-columns: 1fr;
  }
`

export const MessagesContainer = styled.div`
  width: calc(100% + var(--standard-scroll-bar-width));
  
   ${isNot('scrolledToBottom')`
     visibility: hidden;
  `};
`
