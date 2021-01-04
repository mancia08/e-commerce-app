import React from "react";
import styled from "styled-components";
import logo from "../../../styles/images/logonorris.png";
import { theme } from "../../../data/theme";

export const LogoImg = styled.img`
  /* width: ${(p) => (p.type === "footer" ? "100px" : "auto")}; */
  width: auto;
  margin-top: ${theme.spacer};
  margin: ${(p) => p.type === "footer" && "0 0"};
  height: ${(p) => (p.type === "footer" ? "60px" : theme.sizes.navbar)};
`;

const Logo = ({type}) => (
  <LogoImg {...type} type={type} src={logo} alt="Norris Inc. logo" />
);

export default Logo;
