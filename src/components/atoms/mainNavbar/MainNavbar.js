import React from "react";
import MobileLogo from "../mobile/mobileLogo/MobileLogo";
import SuperNav from "../SuperNav/SuperNav";
import Burger from "../mobile/burger/Burger";
import MobileMenu from "../../atoms/mobile/mobileMenu/MobileMenu";
import Hr from "../../atoms/hr/Hr";
import Navbar from "../../atoms/navbar/Navbar";
import { ShopContext } from "../../../context/ShopContext";
import styled from "styled-components";
import { theme } from "../../../data/theme";

const MobileMainNavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${theme.colors.light};
  z-index: 10;
  @media (min-width: ${theme.viewport.tablet}) {
    display: none;
    padding: 0 ${theme.spacer};
  }
`;

const SuperNavToggleContainer = styled.div`
  display: none;
  @media (min-width: ${theme.viewport.tablet}) {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: ${theme.colors.light};
    padding: 0 ${theme.spacer};
    display:block
  }
`;
const NavContainer = styled.div`
  display: none;
  @media (min-width: ${theme.viewport.tablet}) {
    padding: 0 ${theme.spacer};
    z-index: 10;
    position: sticky;
    top: calc(4 * ${theme.spacer});
    display:block
  }
`;

const MainNavbar = () => {
  return (
    <ShopContext.Consumer>
      {(value) =>
        !value.state.paymentOpen && (
          <>
            <MobileMainNavContainer>
              <MobileLogo path="/home" action={value.closeLogin} />
              <SuperNav type="mobile" />
              <Burger action={value.toggleMobileMenu} />
              {value.state.mobileMenu && (
                <MobileMenu path="/home" action={value.closeLogin} />
              )}
            </MobileMainNavContainer>
            <SuperNavToggleContainer>
              <SuperNav />
              <Hr />
            </SuperNavToggleContainer>
            <NavContainer>
              <Navbar />
            </NavContainer>
          </>
        )
      }
    </ShopContext.Consumer>
  );
};

export default MainNavbar;
