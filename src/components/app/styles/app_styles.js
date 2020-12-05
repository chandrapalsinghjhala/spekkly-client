import styled from "styled-components"
import is from "styled-is"

export const AppContainer = styled.div`
  ${is('blurBackground')`
     filter: blur(4px);
  `}
`
