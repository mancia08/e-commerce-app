import React from 'react';
import { StyledNav, StyledLink, LogoLink } from '../../styles/styles'


const Navbar = () => (
  <StyledNav>
    <LogoLink to='/home'><img src='../../../img/logonorris.png' alt='Norris Inc. Logo'></img></LogoLink>
    <StyledLink to='/home'>Home</StyledLink>
    <StyledLink to='/shop'>Shop</StyledLink>
    <StyledLink to='/map'>Map</StyledLink>
    <StyledLink to='/contact'>Contact</StyledLink>
  </StyledNav>
)

export default Navbar;