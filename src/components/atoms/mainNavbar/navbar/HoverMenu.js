import React from "react";
import { SubMenu } from "../../../../styles/styles";
import HoverMenuContent from "./HoverMenuContent";

const HoverMenu = (props) => (
  <SubMenu onMouseOver={props.over} onMouseOut={props.out}>
    <HoverMenuContent action={props.action} />
  </SubMenu>
);

export default HoverMenu;
