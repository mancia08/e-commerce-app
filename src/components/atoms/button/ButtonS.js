import React from "react";
import { StyledBtnS } from "../../../styles/styles";
import Text from "./../atoms/text/Text"

const ButtonS = (props) => <StyledBtnS><Text color="light" size="M" text={props.text}/></StyledBtnS>;

export default ButtonS;
