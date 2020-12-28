import React from "react";
import styled from "styled-components";
import { theme } from "../../../data/theme";

export const StyledBtn = styled.button`
  width: ${(p) => (p.width === "parent" ? "100%" : "auto")};
  height: ${(p) =>
    p.size === "S"
      ? theme.sizes.buttons.S
      : p.size === "M"
      ? theme.sizes.buttons.M
      : p.size === "L"
      ? theme.sizes.buttons.L
      : theme.sizes.buttons.XL};
  height: ${(p) => p.height === "parent" && "100%"};
  color: ${(p) =>
    p.color === "primary"
      ? theme.colors.primary
      : p.color === "light"
      ? theme.colors.light
      : theme.colors.dark};
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
        ? theme.spacer
        : p.size === "M"
        ? `calc(2 * ${theme.spacer})`
        : p.size === "L"
        ? `calc(3 * ${theme.spacer})`
        : `calc(4 * ${theme.spacer})`};
  background-color: ${theme.colors.secondary};
  border-radius: ${(p) =>
    p.size === "S"
      ? theme.spacer
      : p.size === "M"
      ? `calc(2 * ${theme.spacer})`
      : p.size === "L"
      ? `calc(3 * ${theme.spacer})`
      : `calc(4 * ${theme.spacer})`};
  border: 1px solid ${theme.colors.primary};
  :hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.light};
    cursor: pointer;
  }
`;

const Button = ({id, action, size, color, width, height, text}) => (
  <StyledBtn
    {...[size, color, width, height]}
    id={id}
    onClick={action}
    size={size}
    color={color}
    width={width}
    height={height}
  >
    {text}
  </StyledBtn>
);

export default Button;
