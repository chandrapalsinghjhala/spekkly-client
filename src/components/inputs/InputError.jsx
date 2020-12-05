import styled from 'styled-components'
import React from 'react';
import is from 'styled-is'

const Error = styled.p`
  margin-top: .6rem;
  font-size: 1.25rem;
  color: var(--red-error-color);
  
   ${is('loginSignUpError')`
      margin-bottom: 2rem;
      margin-top: -1rem;
  `};
`;

const InputError = props => (
    <Error loginSignUpError={props.loginSignUpError}>{props.error}</Error>
)

export default InputError;
