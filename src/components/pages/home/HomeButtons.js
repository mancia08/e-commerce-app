import React, { useContext } from 'react';
import styled from "styled-components";
import { theme } from "../../../data/theme";
import { Link } from "react-router-dom";
import { textData } from "../../../data/textData"
import { ShopContext } from "../../../context/ShopContext";

import Button from "../../atoms/button/Button";

const StyledHomeButtons = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: ${theme.spacer};
    @media (min-width: ${theme.viewport.tablet}) {
        flex-direction: row;
        justify-content: center;
        gap: ${theme.spacer};
        height: 20vh;
    }
    @media (max-width: ${theme.viewport.mobile}) {
    button {
        line-height: 85px;
    }
  }
  @media (max-width: 340px) {
    button {
        line-height: 72px;
    }
  }
`;

const HomeLink = styled(Link)`
    @media (min-width: ${theme.viewport.tablet}) {
        width: 100%;
    }
`;

const HomeButtons = () => {

const context = useContext(ShopContext);

    return (
        <StyledHomeButtons>
            <HomeLink to="./shop">
                <Button size="XL" text={textData.navbar.first} color="primary" action={context.closeLogin} width="parent" height="parent" />
            </HomeLink>
            <HomeLink to="./map">
                <Button size="XL" text={textData.navbar.second} color="primary" action={context.closeLogin} width="parent" height="parent" />
            </HomeLink>
            <HomeLink to="./contact">
                <Button size="XL" text={textData.navbar.third} color="primary" action={context.closeLogin} width="parent" height="parent" />
            </HomeLink>
        </StyledHomeButtons>
    )
}

export default HomeButtons;