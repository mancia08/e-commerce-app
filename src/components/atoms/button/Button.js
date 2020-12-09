import React from "react";
import Text from "../text/Text"
import { StyledBtn } from "../../../styles/styles";

const Button = (props) => <StyledBtn onClick={props.action} size={props.size}><Text color="primary"  size={props.size} text={props.text} hoverColor={props.hoverColor}/></StyledBtn>;

export default Button;

{/* <Button action={value.myMethod} size="S" text="Button" hoverColor="light" />
    <Button action={value.myMethod} size="M" text="Button" hoverColor="light" />
    <Button action={value.myMethod} size="L" text="Button" hoverColor="light" />
    <Button action={value.myMethod} size="XL" text="Button" hoverColor="light" /> */}
