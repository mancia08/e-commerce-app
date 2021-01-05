import React from "react";
import styled from "styled-components";
import { theme } from "../../../data/theme";

export const StyledText = styled.p`
  display: ${(p) => p.type === "mobileHover" && "none"};
  color: ${(p) =>
    p.color === "primary"
      ? theme.colors.primary
      : p.color === "light"
      ? theme.colors.light
      : theme.colors.dark};
  font-size: ${(p) =>
    p.type === "login"
      ? p.size === "S"
        ? theme.fonts.sizes.XS
        : p.size === "M"
        ? theme.fonts.sizes.S
        : p.size === "L"
        ? theme.fonts.sizes.M
        : theme.fonts.sizes.L
      : p.size === "XS"
      ? theme.fonts.sizes.XS
      : p.size === "S"
      ? theme.fonts.sizes.S
      : p.size === "M"
      ? theme.fonts.sizes.M
      : p.size === "L"
      ? theme.fonts.sizes.L
      : theme.fonts.sizes.XL};
  text-align: ${(p) => (p.align === "center" ? "center" : "left")};
  background-color: ${(p) =>
    p.type === "map"
      ? theme.colors.primary
      : p.type === "closing"
      ? theme.colors.secondary
      : "transparent"};
  padding: ${(p) => p.type === "map" && theme.spacer};
  @media (min-width: ${theme.viewport.tablet}) {
    display: block;
  }
`;

const Text = ({ type, color, size, align, id, text }) => (
  <StyledText
    {...[type, color, size, align, id]}
    color={color}
    size={size}
    align={align}
    type={type}
    id={id}
  >
    {text}
  </StyledText>
);

export default Text;

/* accepted color: primary, dark, light */
/* accepted size: S M L XL */
