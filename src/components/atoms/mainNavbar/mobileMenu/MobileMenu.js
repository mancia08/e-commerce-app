import React from "react";
import Hr from "../../../subatoms/hr/Hr";
import NavBar from "../navbar/Navbar";
import ButtonX from "../../../subatoms/button/ButtonX";
import { ShopContext } from "../../../../context/ShopContext";
import styled from "styled-components";
import { theme } from "../../../../data/theme";
import Logo from "../../../subatoms/logo/Logo";

const StyledMobileMenu = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.primary};
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
  div {
    display: flex;
  }
`;

const MobileLogoContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: calc(3 * ${theme.spacer});
  @media (min-width: ${theme.viewport.tablet}) {
    width: ${theme.sizes.modals.login.width};
  }
`;

const MobileMenu = (props) => (
  <ShopContext.Consumer>
    {(value) => (
      <StyledMobileMenu>
        <MobileLogoContainer>
          <Logo type="mobile" />
          <ButtonX
            text="X"
            color="light"
            size="L"
            action={value.toggleMobileMenu}
          />
        </MobileLogoContainer>
        <Hr color="light" />
        <NavBar />
      </StyledMobileMenu>
    )}
  </ShopContext.Consumer>
);

export default MobileMenu;
