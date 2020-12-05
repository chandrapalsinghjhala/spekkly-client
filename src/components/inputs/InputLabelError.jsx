import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import InputError from "./InputError";
import React from "react";

class InputLabelError extends React.Component {
  render() {
    return (
      <div>
        <InputLabel for={this.props.for} label={this.props.label} />
        <TextInput
          type={this.props.type || "text"}
          value={this.props.value}
          onInputChange={this.props.handleInputChange}
        />
        <InputError error={this.props.error} />
      </div>
    );
  }
}

export default InputLabelError;
