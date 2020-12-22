import React, { useContext }  from 'react';
import { LoginContext } from '../../../../context/LoginProvider';
import { ShopContext } from '../../../../context/ShopContext';
import { useGoogleLogout } from 'react-google-login';
import { theme } from '../../../../data/theme';
import { textData } from '../../../../data/textData';

const clientId =
  '589936013492-o5h98211ljn5r09rn4ih54203k4973fm.apps.googleusercontent.com';

const Logout = () => {

  const context = useContext(LoginContext);

  const shopContext = useContext(ShopContext);

  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    // alert('Logged out Successfully ✌');
    context.setGoogleUser('');
    context.setSignByGoogle(false);

 

    shopContext.setState({
      ...shopContext.state,
      isLoggedIn: !shopContext.state.isLoggedIn,
      loginIconClicked: !shopContext.state.loginIconClicked,
    });

    console.log(shopContext.state.loginIconClicked)
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="https://raw.githubusercontent.com/Sivanesh-S/react-google-authentication/9835990bfe7f45a1a14e5854cd57ab715d776b0e/public/icons/google.svg" alt="google login" className="icon"></img>
      <span className="buttonText">{textData.logout.button}</span>
    </button>
  );
}

export default Logout;