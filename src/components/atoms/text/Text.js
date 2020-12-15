import React from 'react';
import { StyledText } from "../../../styles/styles";

const Text = (props) => <StyledText color={props.color} size={props.size} align={props.align}>{props.text}</StyledText>

export default Text;

/* accepted color: primary, dark, light */
/* accepted size: S M L XL */