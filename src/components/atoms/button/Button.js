import React from "react";
import { StyledBtn } from "../../../styles/styles";

const Button = (props) => <StyledBtn id={props.id} onClick={props.action} size={props.size} color={props.color}>{props.text}</StyledBtn>;

export default Button;

    // <Button action={value.myMethod} size="S" text="Button" color="primary" />
    // <Button action={value.myMethod} size="M" text="Button" color="primary" />
    // <Button action={value.myMethod} size="L" text="Button" color="primary" />
    // <Button action={value.myMethod} size="XL" text="Button" color="primary" />

