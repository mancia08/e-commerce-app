import React from "react";
import { SubMenu } from "./../../../styles/styles";
import HoverMenuContent from "./HoverMenuContent";
import styled from "styled-components"
import {theme} from "../../../data/theme"

const HoverMenu = (props) => (
  <SubMenu onMouseOver={props.over} onMouseOut={props.out}>
    <HoverMenuContent action={props.action}/>
  </SubMenu>
);

export default HoverMenu;
