import React, { useContext } from "react";
import { useGoogleLogin } from "react-google-login";
import { textData } from "../../../../data/textData";

import { LoginContext } from "../../../../context/LoginProvider";

import { ShopContext } from '../../../../context/ShopContext';

// refresh token
import { refreshTokenSetup } from "../../../../utils/refreshToken";

import "./Login.css";

const clientId =
  "589936013492-o5h98211ljn5r09rn4ih54203k4973fm.apps.googleusercontent.com";

const Login = () => {
  const context = useContext(LoginContext);

  const shopContext = useContext(ShopContext);

  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    //alert(`Logged in successfully welcome ${res.profileObj.name} 😍.`);
    refreshTokenSetup(res);
    const name = res.profileObj.name;
    context.setGoogleUser(name);
    context.setSignByGoogle(true);
    shopContext.setState({
      ...shopContext.state,
          isLoggedIn: true,
          user: name,
          loginIconClicked: !shopContext.state.loginIconClicked,
    })
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    //alert(`Failed to login. 😢`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  console.log();

  return (
    <>
      <button onClick={signIn} className="button">
        <img
          src="https://raw.githubusercontent.com/Sivanesh-S/react-google-authentication/9835990bfe7f45a1a14e5854cd57ab715d776b0e/public/icons/google.svg"
          alt="google login"
          className="icon"
        ></img>

        <span className="buttonText">{textData.login.text2}</span>
      </button>
    </>
  );
};

export default Login;
