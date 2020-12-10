import React from "react";
import { SubMenu } from "./../../../styles/styles";
import HoverMenuContent from "./HoverMenuContent";

const HoverMenu = (props) => (
  <SubMenu onMouseOver={props.over} onMouseOut={props.out}>
    <HoverMenuContent />
  </SubMenu>
);

export default HoverMenu;
