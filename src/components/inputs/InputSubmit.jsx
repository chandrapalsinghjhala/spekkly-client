import styled from "styled-components";
import React from "react";

import { filledButtonCSS } from "../buttons/FilledButton";

const InputSubmitTag = styled.input`
  ${filledButtonCSS};
`;

class InputSubmit extends React.Component {
  render() {
    return (
      <InputSubmitTag
        stretch={this.props.stretch}
        type="submit"
        disabled={this.props.disabled}
        value={this.props.btnText}
      />
    );
  }
}

export default InputSubmit;
