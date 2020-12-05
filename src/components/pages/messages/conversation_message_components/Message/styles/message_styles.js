import styled from "styled-components"
import is, {isNot} from 'styled-is'

export const NewConversationText = styled.div`
  font-size: 1.3rem;
  margin-top: 1.2rem;
`

export const MessageStatus = styled.div`
  font-size: 1.2rem;
  color: grey;
  margin-top: .2rem;
  margin-left: auto;
`

export const MessageTimestamp = styled.div`
  color: var(--black-trash-icon);
  font-size: 1.2rem;
`

export const MessageIconContainer = styled.div`
 ${is('authored')`
     margin-left: auto;
  `};
`

export const MessageOptionsContainer = styled.div`

  display: flex;
  flex-direction: column;
  position: relative;

  ${is('authored')`
      order: -1;
      margin-right: 2rem;
  `};
  
  ${isNot('authored')`
      margin-left: 2rem;
  `};
`

const smallBorderRadius = "4px"
const initialBorderRadius = '26px'

export const MessageText = styled.div`
  padding: 1.5rem;
  border-radius: 26px;
  font-size: 1.4rem;
  max-width: 40rem;
  display: inline-block;
  
  ${is('authored', 'previousMessageIsSameAuthor')`
     border-top-right-radius: ${smallBorderRadius};
  `};
  
  ${props => !props.authored && props.previousMessageIsSameAuthor && `border-top-left-radius: ${smallBorderRadius};`}
  
  ${is('authored', 'previousMessageIsSameAuthor', 'timeStampBefore')`
     border-top-right-radius: ${initialBorderRadius};
  `};
  
  ${props => !props.authored && props.previousMessageIsSameAuthor && props.timeStampBefore && `border-top-left-radius: ${initialBorderRadius};`}
  
  ${is('authored', 'nextMessageIsSameAuthor')`
     border-bottom-right-radius: ${smallBorderRadius};
  `};
  
  ${props => !props.authored && props.nextMessageIsSameAuthor && `border-bottom-left-radius: ${smallBorderRadius};`}
  
  ${is('authored', 'nextMessageIsSameAuthor', 'timeStampAfter')`
     border-bottom-right-radius: ${initialBorderRadius};
  `};
   
  ${props => !props.authored && props.nextMessageIsSameAuthor && props.timeStampAfter && `border-top-left-radius: ${initialBorderRadius};`}
  
  ${isNot('authored')`
    background-color: #F1F0F0;
  `};
  
  ${is('authored')`
     background-color: var(--primary-color);
     color: white;
     margin-left: auto;
  `};
`

export const TimeStamp = styled.div`
  text-align: center;
  color: var(--messages-grey-color);
  font-size: 1.3rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

   ${is('firstMessage')`
     margin-top: 0rem;
  `};
`
