import styled from "styled-components";

export const SettingsProfileImage = styled.img`
  width: 8rem;
  border-radius: 100px;
  cursor: pointer;
  transition: box-shadow .2s linear;
  
  &:hover {
   box-shadow: 0 2px 10px 1px rgba(57,73,76,0.4), 0 1px 2px rgba(57,73,76,0.25);
  }
`

export const SettingsProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
`