import React from "react";
import styled from "styled-components";
import { theme } from "../../../data/theme";

export const StyledBtnX = styled.button`
  height: ${(p) =>
    p.size === "S"
      ? theme.sizes.buttons.S
      : p.size === "M"
      ? theme.sizes.buttons.M
      : p.size === "L"
      ? theme.sizes.buttons.L
      : theme.sizes.buttons.XL};
  color: ${(p) =>
    p.color === "primary"
      ? theme.colors.primary
      : p.color === "light"
      ? theme.colors.light
      : theme.colors.secondary};
  font-size: ${(p) =>
    p.size === "S"
      ? theme.fonts.sizes.S
      : p.size === "M"
      ? theme.fonts.sizes.M
      : p.size === "L"
      ? theme.fonts.sizes.L
      : theme.fonts.sizes.XL};
  line-height: ${(p) =>
    p.size === "S"
      ? theme.sizes.buttons.S
      : p.size === "M"
      ? theme.sizes.buttons.M
      : p.size === "L"
      ? theme.sizes.buttons.L
      : theme.sizes.buttons.XL};
  padding: 0
    ${(p) =>
      p.size === "S"
        ? `${theme.spacernumber}px`
        : p.size === "M"
        ? `${2*theme.spacernumber}px`
        : p.size === "L"
        ? `${3*theme.spacernumber}px`
        : `${4*theme.spacernumber}px`};
  background-color: ${theme.colors.primary};
  border-radius: ${(p) =>
    p.size === "S"
        ? `${theme.spacernumber}px`
        : p.size === "M"
        ? `${2*theme.spacernumber}px`
        : p.size === "L"
        ? `${3*theme.spacernumber}px`
        : `${4*theme.spacernumber}px`};
  border: none;
  :hover {
    color: ${theme.colors.dark};
    background-color: ${theme.colors.light};
    cursor: pointer;
  }
`;

const ButtonX = (props) => (
  <StyledBtnX onClick={props.action} size={props.size} color={props.color}>
    {props.text}
  </StyledBtnX>
);

export default ButtonX;