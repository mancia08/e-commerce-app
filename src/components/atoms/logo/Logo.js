import React from 'react';
import styled from "styled-components"
import logo from "../../../styles/images/logonorris.png"
import {theme} from "../../../data/theme"

export const LogoImg = styled.img`
  width: auto;
  margin-top:${theme.spacer};
  height:${theme.sizes.navbar}px
`;

const Logo = (props) => <LogoImg type={props.type} src={logo} alt="Norris Inc. logo" />

export default Logo;