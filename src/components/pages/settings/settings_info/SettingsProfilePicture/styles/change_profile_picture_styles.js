import styled from "styled-components"

export const ChooseProfilePictureContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
`
export const UploadButton = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
`

export const ProfilePictureHeading = styled.div`
  font-size: 1.8rem;
  font-family: "Bold";
  margin-bottom: 3rem;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProfileFormatted = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 100px;
  margin-bottom: 3rem;
`

export const CropNotice = styled.div`
  font-size: 1.3rem;
  text-align: center;
  margin-top: .8rem;
  color: #9a9a9a;
`

export const SubmitButtonContainer = styled.div`
  display: flex;
`
