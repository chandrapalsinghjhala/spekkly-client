import styled from "styled-components";
import is from 'styled-is'
import ImageFadeIn from 'react-image-fade-in'

const getImagesColumns = length => {
    if (length === 1) {
        return 1
    } else if (length % 2 === 0) {
        return 2
    } else {
        return 3
    }
}

export const NewConversationProfileImage = styled.img`
  width: 3.4rem;
  border-radius: 100px;
`

export const MessageImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => getImagesColumns(props.imagesLength)}, 1fr);
  grid-gap: .6rem;
  
  ${is('messagePresent')`
    margin-bottom: .8rem;
  `};
`

export const MessageImageInnerContainer = styled.div`
 
  img {
   width: 40rem;
   border-radius: 10px;
   cursor: pointer;
    
   ${props => getImagesColumns(props.imagesLength) === 2 && "width: 30rem"}
   ${props => getImagesColumns(props.imagesLength) === 3 && "width: 25rem"}
  }
`