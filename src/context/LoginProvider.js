import React, { useState } from 'react';

export const LoginContext = React.createContext();

const LoginProvider = (props) => {

    const [googleUser, setGoogleUser] = useState('');
    const [signByGoogle, setSignByGoogle] = useState(false);

    const [signByFB, setSignByFB] = useState(false);

    return (
        <LoginContext.Provider value={{
            googleUser,
            setGoogleUser,
            signByGoogle,
            setSignByGoogle,
            signByFB,
            setSignByFB
        }}>
            {props.children}
        </LoginContext.Provider>
    );
}
export default LoginProvider;