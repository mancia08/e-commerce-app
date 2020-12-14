import React from "react";
import styled from "styled-components";
import { theme } from "./../../../data/theme";
import { ShopContext } from "../../../context/ShopContext";
import ButtonX from "../../atoms/button/ButtonX";
import { LogoImg } from "./../../../styles/styles";
import logo from "./../../../styles/images/logonorris.png";

const LogoutPopUp = styled.div`
  background-color: ${theme.colors.primary};
  width: ${theme.sizes.modals.mobile.width};
  height: ${theme.sizes.modals.mobile.height};
  z-index: 1;
  position: absolute;
  top: -${theme.spacer};
  left: calc(-100vw + 3 * ${theme.spacer});
`;
const LogoutLogoContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: calc(3 * ${theme.spacer});
`;
const LogoutTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 2 * ${theme.sizes.buttons.XL});
`;
const LogoutModal = () => (
  <ShopContext.Consumer>
    {(value) => (
      <LogoutPopUp>
        <LogoutLogoContainer>
          <LogoImg src={logo} alt="Norris Inc. logo" />
          <ButtonX
            action={value.loginIconToggle}
            size="XL"
            text="X"
            color="light"
          />
        </LogoutLogoContainer>

        <LogoutTextContainer>
          <ButtonX
            action={value.logout}
            size="XL"
            text="Logout"
            color="light"
          />
        </LogoutTextContainer>
      </LogoutPopUp>
    )}
  </ShopContext.Consumer>
);
export default LogoutModal;
