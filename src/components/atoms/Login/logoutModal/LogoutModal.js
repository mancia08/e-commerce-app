import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../data/theme";
import { ShopContext } from "../../../../context/ShopContext";
import ButtonX from "../../../subatoms/button/ButtonX";
import { LogoImg } from "../../mainNavbar/navbar/Navbar";
import logo from "./../../../../styles/images/logonorris.png";
import { textData } from "../../../../data/textData";
import GoogleLogout from "../googleLogout/GoogleLogout";
import FacebookLogout from "../logout-fb/FacebookLogout";

const LogoutPopUp = styled.div`
  background-color: ${theme.colors.primary};
  width: ${theme.sizes.modals.mobile.width};
  height: ${theme.sizes.modals.mobile.height};
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  top: ${(p) => p.type === "home" && `-${theme.spacer}`};
  left: ${(p) => p.type === "home" && `calc(-100vw + 3 * ${theme.spacer})`};
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  @media (min-width: ${theme.viewport.tablet}) {
    width: ${theme.sizes.modals.login.width};
    height: ${theme.sizes.modals.login.height};
    position: sticky;
    right: 0px;
    position: ${(p) => p.type !== "home" && "absolute"};
    left: ${(p) => p.type !== "home" && "auto"};
    right: ${(p) => p.type !== "home" && "0"};
    top: ${(p) => p.type !== "home" && `calc(14 * ${theme.spacer})`};
    box-sizing: border-box;
    border: 4px solid ${theme.colors.dark};
    border-radius: ${theme.spacer};
  }
`;
const LogoutLogoContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${theme.spacer};
  @media (min-width: ${theme.viewport.tablet}) {
    width: ${theme.sizes.modals.login.width};
    height: ${theme.spacer};
  }
`;
const LogoutTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - ${theme.sizes.buttons.XL});
  justify-content: center;
  @media (min-width: ${theme.viewport.tablet}) {
    height: calc(${theme.sizes.modals.login.width} - ${theme.sizes.buttons.M});
  }
`;

const LogoutModal = (props) => {
  const context = useContext(ShopContext);

  return (
    <LogoutPopUp type={props.type}>
      <LogoutLogoContainer>
        <LogoImg src={logo} alt="Norris Inc. logo" />
        <ButtonX
          action={context.loginIconToggle}
          size="XL"
          text="X"
          color="light"
        />
      </LogoutLogoContainer>
      <LogoutTextContainer>
        {context.state.signByGoogle && <GoogleLogout />}
        {context.state.signByFB && <FacebookLogout/>}
        {!context.state.signByGoogle && !context.state.signByFB && (
          <ButtonX
            action={context.logout}
            size="XL"
            text={textData.logout.button}
            color="light"
          />
        )}
      </LogoutTextContainer>
    </LogoutPopUp>
  );
};

export default LogoutModal;
