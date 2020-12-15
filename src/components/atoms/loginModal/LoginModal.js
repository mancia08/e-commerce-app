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
  z-index: 1;
  position: absolute;
  top: -${theme.spacer};
  left: calc(-100vw + 3 * ${theme.spacer});
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  @media (min-width: ${theme.viewport.tablet}) {
    width: ${theme.sizes.modals.login.width};
    height: ${theme.sizes.modals.login.height};
    position: sticky;
    right: 0px;
  }
`;
const LoginLogoContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: calc(3 * ${theme.spacer});
  @media (min-width: ${theme.viewport.tablet}) {
    width: ${theme.sizes.modals.login.width};
  }
`;
const LoginTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - ${theme.sizes.buttons.XL});
  @media (min-width: ${theme.viewport.tablet}) {
    height: calc(${theme.sizes.modals.login.width} - ${theme.sizes.buttons.M});
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginInput = styled.input`
  height: calc(1.5 * ${theme.sizes.buttons.S});
  width: 120%;
  margin-top: ${theme.spacer};
  @media (min-width: ${theme.viewport.tablet}) {
    height: ${theme.sizes.buttons.S};
  }
`;
const LoginLinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${theme.viewport.tablet}) {
    justify-content: space-between;
  }
`;
const LoginSpacer = styled.br`
  height: ${theme.spacer};
`;
const LoginLink = styled(Link)`
  text-decoration: none;
`;
const LoginHLink = styled.a`
  text-decoration: none;
`;

const LoginModal = () => (
  <ShopContext.Consumer>
    {(value) => (
      <LoginPopUp>
        <LoginLogoContainer>
          <LogoImg src={logo} alt="Norris Inc. logo" />
          <ButtonX
            action={value.loginIconToggle}
            size="XL"
            text="X"
            color="light"
          />
        </LoginLogoContainer>
        <LoginTextContainer>
          <Text
            type="login"
            color="light"
            size="XL"
            text={textData.login.title}
          />
          <LoginSpacer />
          {value.state.loginFailed && (
            <Text color="light" size="M" text={textData.login.fail} />
          )}
          <LoginForm>
            <Text
              type="login"
              color="light"
              size="S"
              text={textData.login.user}
            />
            <LoginInput
              onChange={value.username}
              value={value.state.username}
            ></LoginInput>
            <Text
              type="login"
              color="light"
              size="S"
              text={textData.login.password}
            />
            <LoginInput
              type="password"
              onChange={value.password}
              value={value.state.password}
            ></LoginInput>
            <LoginSpacer />
            <ButtonX
              action={value.login}
              size="M"
              text={textData.login.submit}
              color="light"
            />
          </LoginForm>
          <LoginLinkContainer>
            <LoginLink to="/contact">
              <Text
                type="login"
                color="light"
                size="M"
                text={textData.login.register}
              />
            </LoginLink>
            <LoginLink to="/contact">
              <Text
                type="login"
                color="light"
                size="M"
                text={textData.login.text1}
              />
            </LoginLink>
            <LoginHLink href="www.google.it" target="_blank">
              <Text
                type="login"
                color="light"
                size="M"
                text={textData.login.text2}
              />
            </LoginHLink>
            <LoginHLink href="www.facebook.it" target="_blank">
              <Text
                type="login"
                color="light"
                size="M"
                text={textData.login.text3}
              />
            </LoginHLink>
          </LoginLinkContainer>
        </LoginTextContainer>
      </LoginPopUp>
    )}
  </ShopContext.Consumer>
);

export default LoginModal;
