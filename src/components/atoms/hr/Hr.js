import React from "react";
import styled from "styled-components";
import { theme } from "../../../data/theme";

export const StyledHr = styled.hr`
  border-top: 2px solid
    ${(p) => (p.color === "light" ? theme.colors.light : theme.colors.primary)};
  margin: ${theme.spacer};
`;

const Hr = (props) => <StyledHr color={props.color} type={props.type} />;

export default Hr;
