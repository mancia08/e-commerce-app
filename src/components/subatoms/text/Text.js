import React from "react";
/* import { StyledText } from "../../../styles/styles"; */
import styled from 'styled-components'
import {theme} from '../../../data/theme'

const StyledText = styled.p`
  color: ${(p) =>
    p.color === "primary"
      ? theme.colors.primary
      : p.color === "light"
      ? theme.colors.light
      : theme.colors.dark};
  font-size: ${(p) =>
    p.type === "login"
      ? p.size === "S"
        ? "12px"
        : p.size === "M"
        ? "18px"
        : p.size === "L"
        ? "24px"
        : "30px"
      : p.size === "XS"
      ? "12px"
      : p.size === "S"
      ? "18px"
      : p.size === "M"
      ? "24px"
      : p.size === "L"
      ? "30px"
      : "48px"};
  text-align: ${(p) =>
    p.align === "center"
      ? "center"
      : "left"};
  background-color: ${(p) =>
    p.type === "map"
      && theme.colors.primary};
  padding: ${(p) =>
    p.type === "map"
  && theme.spacer};
`;

const Text = (props) => (
  <StyledText {...props}
    color={props.color}
    size={props.size}
    align={props.align}
    type={props.type}
    id={props.id}
  >
    {props.text}
  </StyledText>
);

export default Text;

/* accepted color: primary, dark, light */
/* accepted size: S M L XL */
