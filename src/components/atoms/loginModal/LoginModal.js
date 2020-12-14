import React from "react";
import styled from "styled-components";
import { theme } from "./../../../data/theme";
import { Link } from "react-router-dom";
import { ShopContext } from "./../../../context/ShopContext";
import { textData } from "./../../../data/textData";
import { LogoImg } from "./../../../styles/styles";
import Text from "./../text/Text";
import logo from "./../../../styles/images/logonorris.png";
import ButtonX from "../../atoms/button/ButtonX";

const LoginPopUp = styled.div`
  background-color: ${theme.colors.primary};
  width: ${theme.sizes.modals.mobile.width};
  height: ${theme.sizes.modals.mobile.height};
  z-index: 2;
  position: absolute;
  top:-${theme.spacer};
  left: calc(-100vw + 3 * ${theme.spacer})
`;

const LoginModal = () => (
  <ShopContext.Consumer>
    {(value) => (
      <LoginPopUp>
        <LogoImg src={logo} alt="Norris Inc. logo" />
        <ButtonX
          action={value.loginIconToggle}
          size="XL"
          text="X"
          color="light"
        />
        <Text color="light" size="L" text={textData.login.title} />
        {value.state.loginFailed && (
          <Text color="light" size="M" text={textData.login.fail} />
        )}
        <Text color="light" size="M" text={textData.login.user} />
        <input onChange={value.username} value={value.state.username}></input>
        <Text color="light" size="M" text={textData.login.password} />
        <input onChange={value.password} value={value.state.password}></input>
        <ButtonX
          action={value.login}
          size="M"
          text={textData.login.submit}
          color="light"
        />
        <Link to="/contact">
          <Text color="light" size="M" text={textData.login.register} />
        </Link>
        <Link to="/contact">
          <Text color="light" size="M" text={textData.login.user} />
        </Link>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <Text color="light" size="M" text={textData.login.text2} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <Text color="light" size="M" text={textData.login.text3} />
        </a>
      </LoginPopUp>
    )}
  </ShopContext.Consumer>
);

export default LoginModal;
