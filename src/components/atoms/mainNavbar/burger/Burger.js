import React from "react";
import styled from "styled-components";
import { theme } from"../../../../data/theme";

const StyledBurger = styled.button`
  @media (max-width: ${theme.viewport.tablet}) {
    height: calc(4 * ${theme.spacer});
    width: calc(4 * ${theme.spacer});
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: none;
    cursor: pointer;
    background: transparent;
    margin-right: calc(2 * ${theme.spacer});
    margin-right: ${theme.spacer};
    div {
      width: 80%;
      height: calc(0.5 * ${theme.spacer});
      background-color: ${theme.colors.dark};
      border-radius: calc(1.5 * ${theme.spacer});
    }
  }
`;

const Burger = (props) => {
  return (
    <StyledBurger onClick={props.action}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
