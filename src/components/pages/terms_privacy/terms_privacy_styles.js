import styled from "styled-components";
import is from 'styled-is';

export const TermsPrivacyTitle = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  width: 70%;
`

export const TermsPrivacyDate = styled.div`
  font-family: "Bold";
  margin-bottom: 3rem;
`

export const SectionHeading = styled.h4`
  font-size: 1.7rem;
  font-family: "Bold";
  margin-bottom: .6rem;
  
  ${is('larger')`
      font-size: 2rem;
      margin-bottom: 2rem;
  `};
`

export const TermsPrivacyLink = styled.a`
  color: #2A5DB0;
`
