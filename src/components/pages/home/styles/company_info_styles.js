import styled from "styled-components"

export const CompanyInfoText = styled.div`
  font-size: 1.3rem;
  color: #646464;
`

export const CopyrightText = styled(CompanyInfoText)`
  grid-column: 1 / 4;
`

export const CompanyInfoContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1.4rem;
  margin-top: 4rem;
`
