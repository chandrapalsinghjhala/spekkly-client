import styled from "styled-components";
import is from 'styled-is';

export const AboutMainImage = styled.div`
  margin-bottom: 9rem;
  
   ${is('lastImage')`
    margin-bottom: 0;
  `};
`

export const AboutParagraph = styled.p`
  margin-bottom: 3.4rem;
  line-height: 2.4rem;
  
   ${is('subParagraph')`
    margin-bottom: 6rem;
  `};
   
    ${is('lastParagraph')`
    margin-bottom: 0;
  `};
   
`

export const AboutHeading = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
`
