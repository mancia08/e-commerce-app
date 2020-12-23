import React, { useState, useEffect, useContext } from 'react';
import { accountService } from '../../../../_services/account.service';
import { ShopContext } from '../../../../context/ShopContext';
import { textData } from '../../../../data/textData'

import './LoginFB.css';

const LoginFB = () => {

    const context = useContext(ShopContext);

    const [account, setAccount] = useState(null);

    useEffect(() => {
        accountService.account.subscribe(x => setAccount(x));
    }, []);

    if (account) {
        context.setState({
            ...context.state,
            signByFB: true,
            isLoggedIn: !context.state.isLoggedIn,
            user: account.name,
            loginIconClicked: !context.state.loginIconClicked
        });
    }

    return (
        <>
            <button onClick={accountService.login} className="button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png" alt="facebook login" className="icon"></img>
                <span className="buttonText">{textData.login.text3}</span>
            </button>
        </>
    );
}

export default LoginFB;