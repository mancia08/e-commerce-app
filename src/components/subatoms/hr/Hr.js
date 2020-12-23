import React from "react";
import styled from "styled-components";
import { theme } from "../../../data/theme";

export const StyledHr = styled.hr`
  border-top: 2px solid
    ${(p) => (p.color === "light" ? theme.colors.light : theme.colors.primary)};
  margin: ${theme.spacer};
`;

const Hr = ({color, type}) => <StyledHr {...[color, type]} color={color} type={type} />;

export default Hr;
