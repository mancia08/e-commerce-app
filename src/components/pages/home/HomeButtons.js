import styled from "styled-components";
import { theme } from "../../../data/theme";
import { Link } from "react-router-dom";
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
    }
`;

const HomeLink = styled(Link)`
    @media (min-width: ${theme.viewport.tablet}) {
        width: 100%;
    }
`;

const HomeButtons = () => (
    <ShopContext.Consumer>
        {(value) => (
            <StyledHomeButtons>
                <HomeLink to="./shop">
                    <Button size="L" text="SHOP" color="primary" action={value.closeLogin} width="parent" height="parent" />
                </HomeLink>
                <HomeLink to="./map">
                    <Button size="L" text="MAP" color="primary" action={value.closeLogin} width="parent" height="parent" />
                </HomeLink>
                <HomeLink to="./contact">
                    <Button size="L" text="CONTACT" color="primary" action={value.closeLogin} width="parent" height="parent" />
                </HomeLink>
            </StyledHomeButtons>
        )}
    </ShopContext.Consumer>
)

export default HomeButtons;