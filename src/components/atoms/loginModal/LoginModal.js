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
  @media (min-width: ${theme.viewport.tablet}){
    width: ${theme.sizes.modals.login.width};
    height: ${theme.sizes.modals.login.height};
  }
`;
const LoginLogoContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: calc(3 * ${theme.spacer});
`;
const LoginTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 2 * ${theme.sizes.buttons.XL});
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
`;
const LoginLinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
const LoginSpacer = styled.br`
  height: ${theme.spacer};
`;
const LoginLink = styled(Link)`
text-decoration:none;
`

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
          <Text color="light" size="XL" text={textData.login.title} />
          {value.state.loginFailed && (
            <Text color="light" size="M" text={textData.login.fail} />
          )}
          <LoginForm>
            <Text color="light" size="S" text={textData.login.user} />
            <LoginInput
              onChange={value.username}
              value={value.state.username}
            ></LoginInput>
            <Text color="light" size="S" text={textData.login.password} />
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
              <Text color="light" size="M" text={textData.login.register} />
            </LoginLink>
            <LoginLink to="/contact">
              <Text color="light" size="M" text={textData.login.text1} />
            </LoginLink>
            <LoginLink to="/google">
              <Text color="light" size="M" text={textData.login.text2} />
            </LoginLink>
            <LoginLink to="/facebook">
              <Text color="light" size="M" text={textData.login.text3} />
            </LoginLink>
          </LoginLinkContainer>
        </LoginTextContainer>
      </LoginPopUp>
    )}
  </ShopContext.Consumer>
);

export default LoginModal;
