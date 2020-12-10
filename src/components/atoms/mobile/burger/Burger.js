import React from 'react';
import { StyledBurger } from "../../../../styles/styles";

const Burger = (props) => {
    return (
        <StyledBurger onClick={props.action}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

export default Burger;