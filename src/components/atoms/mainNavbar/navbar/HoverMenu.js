import React from "react";
import HoverMenuContent from "./HoverMenuContent";
import styled from 'styled-components'
import {theme} from '../../../../data/theme'

export const SubMenu = styled.div`
  display: none;
  background-color: ${theme.colors.primary};
  width: 80vw;
  height: calc(${theme.spacer} * 35);
  z-index: 1;
  position: absolute;
  right: calc(2 * ${theme.sizes.buttons.S});
  top: calc(2 * ${theme.sizes.buttons.S});
  :hover {
    display: block;
    display: flex;
    justify-content: space-around;
    padding: calc(6 * ${theme.spacer});
  }
  @media (max-width: 768px) {
    display: none !important;
  }
`;

const HoverMenu = ({over, out, action}) => (
  <SubMenu {...[over,out]}onMouseOver={over} onMouseOut={out}>
    <HoverMenuContent {...action} action={action} />
  </SubMenu>
);

export default HoverMenu;
