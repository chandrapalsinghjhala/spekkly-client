import styled from "styled-components";
import is, { isNot } from "styled-is";

export const BlockedUsersContainer = styled.div`
  grid-row-gap: 2rem;
  height: 40rem;

  ${isNot("loading")`
    height: 100%
    max-height: 40rem;
    overflow: auto;
  `};
`;

export const LoadingError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const BlockedUserImage = styled.img`
  width: 4.6rem;
  border-radius: 100px;
`;

export const BlockedUserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BlockedUserName = styled.div`
  margin-left: 1rem;
  font-size: 1.7rem;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-row-gap: 2rem;
`;

export const BlockButtonContainer = styled.div`
  margin-left: auto;
`;
