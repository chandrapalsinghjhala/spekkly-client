import styled from "styled-components"
import is from 'styled-is'

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${is('fixed')`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `}
  
  ${is('fillPage')`
       height: calc(100vh - ${props => (props.navbarHeight)}px);
  `}
  
  ${is('flexDirectionRow')`
        flex-direction: row;
  `}
  
   ${is('fillContentPage')`
    justify-content: center;
   `}
 
   ${is('vertical')`
    justify-content: center;
  `}
   
   ${is('w100')`
    width: 100%
  `}
   
    ${is('textCenter')`
        text-align: center;
  `}
   
   ${is('mtAuto')`
    margin-top: auto;
  `}
   
    ${is('h100')`
    height: 100%
  `}
`