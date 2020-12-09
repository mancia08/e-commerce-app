import React from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./../../../context/ShopContext";
import { textData } from "./../../../data/textData";
import { LoginPopUp } from "./../../../styles/styles";
import Text from "./../text/Text";
import Logo from "./../logo/Logo"

const LoginModal = () => (
  <ShopContext.Consumer>
    {(value) => (
      <LoginPopUp>
        <Logo/>
        <button onClick={value.loginIconToggle}>X</button>
        <Text color="light" size="XL" text={textData.login.title} />
        {value.state.loginFailed && (
          <Text color="light" size="L" text={textData.login.fail} />
        )}
        <Text color="light" size="L" text={textData.login.user} />
        <input onChange={value.username} value={value.state.username}></input>
        <Text color="light" size="L" text={textData.login.password} />
        <input onChange={value.password} value={value.state.password}></input>
        <button onClick={value.login}>{textData.login.submit}</button>
        <Link to="/contact">
          <Text color="light" size="L" text={textData.login.register} />
        </Link>
        <Link to="/contact">
          <Text color="light" size="L" text={textData.login.user} />
        </Link>
        <a href="https://www.google.com" target="_blank">
          <Text color="light" size="L" text={textData.login.text2} />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <Text color="light" size="L" text={textData.login.text3} />
        </a>
      </LoginPopUp>
    )}
  </ShopContext.Consumer>
);

export default LoginModal;
