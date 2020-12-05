import styled from "styled-components";
import is from 'styled-is'

export const EmojiSelectorContainer = styled.div`
  padding: 1rem;
  background-color: white;
`

export const EmojiSelectorItems = styled.div`
  display: flex;
`

export const EmojiItemsContainer = styled.div`
  overflow: scroll;
  max-height: 38rem;
  display: grid;
  padding: 1.4rem;
  grid-template-columns: repeat(6, 1fr);
`

export const EmojiOuterContainer = styled.div`
  min-width: 30rem;
  min-height: 40rem;
  transition: all linear .1s;
  position: relative;
`

export const EmojiItem = styled.div`
  font-size: 3.2rem;
  max-width: 3.2rem;
  cursor: pointer;
`

export const EmojiSelectorItem = styled.div`
  padding: .2rem 1rem;
  display: flex;
  font-size: 2.1rem;
  cursor: pointer;
  width: 4.1rem;

  ${is('active')`
    background-color: #e9e9e9;
  `}
`

