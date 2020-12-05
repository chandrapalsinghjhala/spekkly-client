import styled from "styled-components";
import React from "react";
import is from "styled-is";

const InputLabelTag = styled.label`
  display: block;
  font-family: "Bold";
  margin-bottom: 1rem;

  ${is("textLabel")`
         margin-bottom: .6rem;
    `};

  ${is("extraLabelSpace")`
         margin-bottom: 1.4rem;
    `};
`;

class InputLabel extends React.Component {
  render() {
    return (
      <InputLabelTag
        extraLabelSpace={this.props.extraLabelSpace}
        textLabel={this.props.textLabel}
        htmlFor={this.props.for}
      >
        {" "}
        {this.props.label}{" "}
      </InputLabelTag>
    );
  }
}

export default InputLabel;
