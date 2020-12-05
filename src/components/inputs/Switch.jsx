import React from "react";
import SwitchInput from "react-switch";
import InputLabel from "./InputLabel";
import styled from "styled-components";

const Notice = styled.div`
  color: grey;
  font-size: 1.3rem;
  margin-top: 0.4rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const SwitchInputTag = styled(SwitchInput)`
  margin-left: auto;
`;

const Switch = (props) => {
  return (
    <Container>
      <div>
        <InputLabel label={props.label} textLabel />
        <Notice>{props.details}</Notice>
      </div>

      <SwitchInputTag
        onChange={props.input.onChange}
        checked={props.input.value}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor="#467AFF"
      />
    </Container>
  );
};

export default Switch;
