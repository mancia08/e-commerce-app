import React from 'react';
import { StyledTextLogin } from "../../../styles/styles";

const TextLogin = (props) => <StyledTextLogin color={props.color} size={props.size} onClick={props.action}>{props.text}</StyledTextLogin>

export default TextLogin;