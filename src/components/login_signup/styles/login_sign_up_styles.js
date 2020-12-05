import styled, { css } from "styled-components";
import is from "styled-is";
import { createMediaQuery, mediaQueries } from "../../media/media_helpers";

export const SubmitContainer = styled.div`
  margin-top: 0.8rem;
`;

export const LoginSignUpHeading = styled.h1`
  margin-bottom: 2rem;
  font-size: 3.4rem;
`;

export const LoginSignUpText = styled.div`
  margin-bottom: 3rem;
  font-size: 1.6rem;
`;

export const BtnOuterContainer = styled.div`
  display: grid;
  grid-row-gap: 1.6rem;
  margin-bottom: 2.2rem;
`;

export const LoginSignUpTextButton = styled.span`
  color: var(--primary-color);
  cursor: pointer;
`;

export const LoginSignUpWidthContainer = styled.div`
  text-align: center;

  ${createMediaQuery(mediaQueries.desktopUp)} {
    width: 50%;
  }
`;

export const BottomButtonSpacer = styled.div`
  display: grid;
  grid-row-gap: 2.4rem;
`;

const TermsPrivacyLinkShared = css`
  color: grey;
  font-size: 1.4rem;
`;

export const TermsPrivacyLink = styled.span`
  ${TermsPrivacyLinkShared};
  text-decoration: underline;
  cursor: pointer;
`;

export const LoginSignUpTermsPrivacyText = styled.p`
  ${TermsPrivacyLinkShared};
`;

export const TermsPrivacyLinkContainer = styled.span`
  margin-bottom: 6rem;
`;

export const SubmitErrorContainer = styled.div`
  margin-top: 1.4rem;
  ${is("center")`
     text-align: center;
  `};
`;

export const InputForm = styled.form`
  width: 100%;
  display: grid;
  grid-row-gap: 2.4rem;
  text-align: left;
  margin-bottom: 3rem;
`;
