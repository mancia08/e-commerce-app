import React from "react";
import { SubMenu } from "../../../../styles/styles";
import HoverMenuContent from "./HoverMenuContent";

const HoverMenu = ({over, out, action}) => (
  <SubMenu {...[over,out]}onMouseOver={over} onMouseOut={out}>
    <HoverMenuContent {...action} action={action} />
  </SubMenu>
);

export default HoverMenu;
