import styled from "styled-components"
import is from 'styled-is'
import Truncate from "react-truncate";

const selectedColor = '#F5F5F5'

export const ConversationDate = styled.div`
  margin-left: auto;
  color: #a0a0a0;
  font-size: 1.3rem;
`

export const ConversationItemInnerContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ConversationOnlineIndicator = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #27C589;
  position: absolute;
  right: 0;
  bottom: -4px;
  border-radius: 100px;
  border: .3rem solid white;
  
   ${is('selected')`
     border: .3rem solid ${selectedColor};
  `};
   
   ${is('headingIndicator')`
     right: 9px;
  `};



`

export const ConversationThumbnail = styled.img`
  width: 6rem;
  border-radius: 100px;
`

export const ConversationPreviewText = styled.div`
  width: 100%;
  
  span {
    color: #a0a0a0;
    font-size: 1.3rem;
    margin-top: .3rem;
    
    ${is('unreadMessages')`
     color: black;
     font-family: "Bold";
  `};
  }
`

export const ConversationRecipientContainer = styled.div`
  margin-left: 1rem;
  width: 100%;
`

export const ConversationItemContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: white;
  
  ${is('selected')`
    background-color: ${selectedColor};
  `};
`

export const ConversationNameText = styled.div`
   ${is('unreadMessages')`
     font-family: "Bold";
  `};
`
