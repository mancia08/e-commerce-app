import React, { useState, useEffect, useContext } from 'react';
import { accountService } from '../../../../_services/account.service';
import { LoginContext } from '../../../../context/LoginProvider';

import './LoginFB.css';

const LoginFB = () => {

    const context = useContext(LoginContext);

    const [account, setAccount] = useState(null);

    useEffect(() => {
        accountService.account.subscribe(x => setAccount(x));
    }, []);

    if(account) {
        context.setFBUser(account.name);
        context.setSignByFB(true);
    } else {
        context.setFBUser('');
        context.setSignByFB(false);
    }

    return (
        <>
            <button className="btn btn-facebook" onClick={accountService.login}>
                <i className="fa fa-facebook mr-1"></i>
                        Login with Facebook
        </button>
            <p>{account && account.name}</p>
            <button className="btn btn-link nav-item nav-link" onClick={accountService.logout}>Logout</button>
        </>
    );
}

export default LoginFB;