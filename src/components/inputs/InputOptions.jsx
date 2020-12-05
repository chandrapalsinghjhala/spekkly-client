import React from 'react'
import {Field} from 'react-final-form'
import CheckBoxInput from "./CheckBox"
import InputLabel from "./InputLabel"
import styled from "styled-components"
import {notBlank} from "../../services/validators/validators";

const CheckBoxContainerOuterContainer = styled.div`
  &:not(:last-child) { 
    margin-bottom: 1.2rem;
  }
`

const InputOptions = props => (
    <div>
        <InputLabel for={props.name}
                    label={props.label}/>

        {props.options.map((value, index) => (
            <CheckBoxContainerOuterContainer key={index}>
                <Field name={props.name}
                       label={value}
                       type={props.type}
                       value={value}
                       whiteInput={props.whiteInput}
                       validate={props.type === "radio" ? notBlank : false}
                       handleToggle={() => props.type === "radio" ? props.setValue(value, props.name, props.allowNull) : props.toggleCheckMark(value, props.name)}
                       component={CheckBoxInput}
                />
            </CheckBoxContainerOuterContainer>
        ))}
    </div>
)


export default InputOptions