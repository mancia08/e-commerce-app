import styled from "styled-components";
import { theme } from "../../../data/theme";
import { Link } from "react-router-dom";
import { textData } from "../../../data/textData";
import { ShopContext } from "../../../context/ShopContext";

import SuperNav from "../../atoms/SuperNav";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import HomeImg from "../../atoms/images/HomeImg"

const ButtonsWrap = styled.div`
  display: ${(p) => (p.isLoginClicked ? "none" : "flex")};
  justify-content: space-around;
  height: calc(3 * ${theme.sizes.buttons.L} + 4 * ${theme.spacer});
  width: 100vw;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${theme.viewport.tablet}) {
    height: calc(100vh - 400px);
    flex-direction: row;
    display: flex;
  }
`;

const Home = () => (
  <ShopContext.Consumer>
    {(value) => (
      <>
        <HomeImg>
        </HomeImg>
        <SuperNav type="home" textColor="light" />
        <ButtonsWrap isLoginClicked={value.state.loginIconClicked}>
          <Link to="./shop">
            <Button size="L" text="SHOP" color="primary" />
          </Link>
          <Link to="./map">
            <Button size="L" text="MAP" color="primary" />
          </Link>
          <Link to="./contact">
            <Button size="L" text="CONTACT" color="primary" />
          </Link>
        </ButtonsWrap>
      </>
    )}
  </ShopContext.Consumer>
);

export default Home;
