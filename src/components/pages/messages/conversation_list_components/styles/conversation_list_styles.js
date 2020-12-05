import styled from "styled-components"
import is, {isNot} from 'styled-is'
import {ReactSVG} from 'react-svg'


export const ConversationOptionContainer = styled.div`

  position: fixed;
  top: calc(${props => props.conversationOptionsIconBounds.top}px + 2.6rem);
  z-index: 10;
  left: calc(${props => props.conversationOptionsIconBounds.left}px + ${props => props.conversationOptionsBounds.width}px);

  ${isNot('conversationOptionsAreVisible')`
      top: calc(${props => props.conversationOptionsIconBounds.top}px - .4rem - ${props => props.conversationOptionsBounds.height}px);
  `};
`

export const MuteIcon = styled(ReactSVG)`
  transform: translateY(.2rem);
`

export const ConversationListContainer = styled.div`
  background-color: white;
  position: relative;
  height: calc(100vh - ${props => props.conversationSearchContainerHeight}px - var(--messages-navbar-offset) - ${props => props.navbarHeight}px);
  overflow: scroll;
`

export const NoConversationsText = styled.div`
  font-size: 1.3rem;
  
  ${is('marginBottom')`
      margin-bottom: ${props => props.marginBottom}px;
  `};
`

export const ConversationContainer = styled.div`
  background-color: var(--background-color);
  height: 100%;
  overflow: scroll;
`

export const ConversationSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: white;
`

export const ConversationSearchInput = styled.input`
  background-color: #f5f5f5;
  width: 100%;
  padding: 1.4rem 1.6rem;
  border: none;
  font-size: 1.4rem;
  
  &::placeholder {
    color: #999999;
  }
`