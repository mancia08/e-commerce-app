import React from 'react';
import { StyledTextCart } from "../../../styles/styles";

const TextCart = (props) => <StyledTextCart color={props.color} size={props.size}>{props.text}</StyledTextCart>

export default TextCart;