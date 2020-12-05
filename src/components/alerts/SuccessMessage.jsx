import React from "react"
import {TextContainer, SuccessIcon} from "./alert_styles"
import successIcon from "../../assets/icons/success.svg"

const SuccessMessage = props => (
    <TextContainer largeMarginBottom={props.largeMarginBottom}>
        <SuccessIcon src={successIcon} alt='success icon'/>
        <div> {props.message}</div>
    </TextContainer>
)


export default SuccessMessage
