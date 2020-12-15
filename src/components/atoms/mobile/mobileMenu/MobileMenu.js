import React from "react";
import MobileLogo from "../mobileLogo/MobileLogo";
import Hr from "../../hr/Hr";
import NavBar from "../../navbar/Navbar";
import ButtonX from "../../button/ButtonX";
import { ShopContext } from "../../../../context/ShopContext";
import { StyledMobileMenu } from "../../../../styles/styles";
import styled from "styled-components";
import { theme } from "../../../../data/theme";
import Logo from "../../logo/Logo"

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
         <Logo/>
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
