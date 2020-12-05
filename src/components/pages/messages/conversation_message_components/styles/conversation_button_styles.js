import styled from "styled-components"
import TextareaAutosize from "react-textarea-autosize";
import is, {isNot} from 'styled-is'

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

export const ConversationButtonIcon = styled.img`
  width: 2.5rem;
  cursor: pointer;
`

export const AttachedImagePreview = styled.div`
  width: 10rem;
  height: 10rem;
`

export const AttachedImageContainer = styled.div`
  display: flex;
`

export const SubmitMessageForm = styled.form`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto auto;
  grid-column-gap: 2rem;
  width: 100%;
  
  ${is('alignCenter')`
     align-items: center;
  `}
  
  ${isNot('alignCenter')`
     align-items: end;
  `}
`

export const RemoveAttachedImageIcon = styled.img`
  width: 1.8rem;
  position: absolute;
  right: .6rem;
  top: .6rem;
  cursor: pointer;
  display: none;
`

export const AttachedImagePreviewItem = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

export const AttachedImageItemContainer = styled.div`
  margin-bottom: 1rem;
  margin-right: 1rem;
  position: relative;
`

export const InputArea = styled(TextareaAutosize)`
  padding: 1.2rem;
  height: auto;
  font-size: 1.6rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  width: 100%;
`
