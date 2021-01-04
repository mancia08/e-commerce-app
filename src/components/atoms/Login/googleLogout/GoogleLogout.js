import React, { useContext } from "react";
import { ShopContext } from "../../../../context/ShopContext";
import { useGoogleLogout } from "react-google-login";
import { textData } from "../../../../data/textData";

import styled from "styled-components";
import { theme } from "../../../../data/theme";

import ButtonX from "../../../subatoms/button/ButtonX";

const clientId =
  "589936013492-o5h98211ljn5r09rn4ih54203k4973fm.apps.googleusercontent.com";

const StyledGoogleLogout = styled.div`
  display: flex;
  gap: ${theme.spacer};
  justify-content: center;
  :hover {
    cursor: pointer;
  }
  img {
    width: ${theme.sizes.buttons.M};
    height: ${theme.sizes.buttons.M};
    background-color: ${theme.colors.light};
    border-radius: 50%;
  }
`;

const GoogleLogout = () => {
  const context = useContext(ShopContext);

  //const shopContext = useContext(ShopContext);

  const onLogoutSuccess = (res) => {
    console.log("Logged out Success");
    // alert('Logged out Successfully ✌');
    context.setState({
      ...context.state,
      googleUser: "",
      signByGoogle: false,
      isLoggedIn: !context.state.isLoggedIn,
      loginIconClicked: !context.state.loginIconClicked,
    });
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <StyledGoogleLogout>
      <img
        src="https://raw.githubusercontent.com/Sivanesh-S/react-google-authentication/9835990bfe7f45a1a14e5854cd57ab715d776b0e/public/icons/google.svg"
        alt="google login"
        onClick={signOut}
      />
      <ButtonX
        action={signOut}
        size="M"
        color="light"
        text={textData.logout.button}
      />
    </StyledGoogleLogout>
  );
};

export default GoogleLogout;
