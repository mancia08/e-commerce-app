import React from "react";
import { StyledBtnX } from "../../../styles/styles";

const ButtonX = (props) => <StyledBtnX onClick={props.action} size={props.size} color={props.color}>{props.text}</StyledBtnX>;

export default ButtonX;

    // <ButtonX action={value.myMethod} size="S" text="X" color="light" />
    // <ButtonX action={value.myMethod} size="M" text="X" color="light" />
    // <ButtonX action={value.myMethod} size="L" text="X" color="light" />
    // <ButtonX action={value.myMethod} size="XL" text="X" color="light" />