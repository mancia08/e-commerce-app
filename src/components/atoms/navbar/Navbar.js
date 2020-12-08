import React from 'react';
import { ShopContext } from '../../../context/ShopContext';
import { StyledNav, StyledLink, LogoLink } from '../../../styles/styles'


const Navbar = () => (
  <ShopContext.Consumer>
    {value => (
        <StyledNav>
        <LogoLink onClick={value.hideNavbar} to='/home'>Find an image here!</LogoLink>
        <StyledLink onClick={value.hideNavbar}to='/home'>Home</StyledLink>
        <StyledLink onClick={value.showNavbar} to='/shop'>Shop</StyledLink>
        <StyledLink onClick={value.showNavbar} to='/map'>Map</StyledLink>
        <StyledLink onClick={value.showNavbar} to='/contact'>Contact</StyledLink>
      </StyledNav>
    )}
  </ShopContext.Consumer>
)

export default Navbar;