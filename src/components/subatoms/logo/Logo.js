import React from "react";
import styled from "styled-components";
import logo from "../../../styles/images/logonorris.png";
import { theme } from "../../../data/theme";

export const LogoImg = styled.img`
  width: ${(p) => (p.type === "footer" ? "100px" : "auto")};
  margin-top: ${theme.spacer};
  margin: ${(p) => p.type === "footer" && "0 auto"};
  height: ${(p) => (p.type === "footer" ? "100px" : theme.sizes.navbar)}
`;

const Logo = (props) => (
  <LogoImg type={props.type} src={logo} alt="Norris Inc. logo" />
);

export default Logo;
