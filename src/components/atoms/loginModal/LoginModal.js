import React from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./../../../context/ShopContext";
import { textData } from "./../../../data/textData";
import logo from "./../../../styles/images/logo.jpg";

const LoginModal = () => (
  <ShopContext.Consumer>
    {value => 
      <div>
        <img src={logo} alt="logo" />
        <button onClick={value.loginIconToggle}>X</button>
        <h1>{textData.login.title}</h1>
        {value.state.loginFailed && <p>{textData.login.fail}</p>}
        <p>{textData.login.user}</p>
        <input onChange={value.username} value={value.state.username}></input>
        <p>{textData.login.password}</p>
        <input onChange={value.password} value={value.state.password}></input>
        <button onClick={value.login}>{textData.login.submit}</button>
        <Link to="/contact">
          <h5>{textData.login.register}</h5>
        </Link>
        <Link to="/contact">
          <h5>{textData.login.text1}</h5>
        </Link>
        <a href="https://www.google.com" target="_blank">
          <h5>{textData.login.text2}</h5>
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <h5>{textData.login.text3}</h5>
        </a>
      </div>
    }
  </ShopContext.Consumer>
);

export default LoginModal;
