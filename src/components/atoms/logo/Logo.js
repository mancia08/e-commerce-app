import React from 'react';
import styled from "styled-components"
import logo from "../../../styles/images/logonorris.png"

export const LogoImg = styled.img`
  width: auto;
  height: var(--height-nav);
`;

const Logo = () => <LogoImg src={logo} alt="Norris Inc. logo" />

export default Logo;