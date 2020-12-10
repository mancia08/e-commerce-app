import React from 'react';
import MobileLogo from "../mobileLogo/MobileLogo";
import SuperNav from "../../SuperNav/SuperNav"
import Hr from "../../hr/Hr"
import NavBar from "../../navbar/Navbar"
import ButtonX from "../../button/ButtonX"
import { ShopContext } from "../../../../context/ShopContext"
import { StyledMobileMenu } from "../../../../styles/styles";

const MobileMenu = (props) =>
<ShopContext.Consumer>
    {value => (
        <StyledMobileMenu>
        <div>
            <MobileLogo path={props.path} action={props.action} />
            <SuperNav color="primary" textColor="light" />
            <ButtonX text="X" color="light" size="L" action={value.toggleMobileMenu}/>
        </div>
        <Hr color="light" />
        <NavBar />
    </StyledMobileMenu>
    )}
</ShopContext.Consumer>

export default MobileMenu;