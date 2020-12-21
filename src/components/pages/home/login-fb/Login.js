import React, { useState, useEffect } from 'react';
import { accountService } from '../../../../_services/account.service';

const LoginFB = () => {

    const [account, setAccount] = useState(null);

    useEffect(() => {
        accountService.account.subscribe(x => setAccount(x));
    }, []);

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