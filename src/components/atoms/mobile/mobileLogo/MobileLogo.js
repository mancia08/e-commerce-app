import React from 'react';
import { StyledMobileLogo, LogoImg } from "../../../../styles/styles";
import logo from "../../../../styles/images/logonorris.png"

const MobileLogo = props => {
    return(
        <StyledMobileLogo to={props.path} onClick={props.action}>
            <LogoImg src={logo} alt="logo" />
        </StyledMobileLogo>
    )
}

export default MobileLogo;