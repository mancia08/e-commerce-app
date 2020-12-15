import Banner from "../atoms/banner/Banner";
import styled from "styled-components";
import { theme } from "./../../data/theme";
import { Link } from "react-router-dom";
import { textData } from "./../../data/textData";
import { ShopContext } from "./../../context/ShopContext";
import SuperNav from "./../atoms/SuperNav";
import Text from "./../atoms/text/Text";
import Button from "./../atoms/button/Button";

const HomeModal = styled.div`
  background-color: ${theme.colors.dark2};
  z-index: 1;
  width: 100vw;
  height: 150px;
  position: absolute;
  top: 218px;
  padding-left: calc(3 * ${theme.spacer});
  display: ${(p) => (p.isLoginClicked ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${theme.viewport.tablet}) {
    width: 400px;
    left: calc(4 * ${theme.spacer});
    text-align: center;
    display: flex;
  }
`;
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
      <main>
        <Banner />
        <SuperNav type="home" textColor="light" />
        <HomeModal isLoginClicked={value.state.loginIconClicked}>
          <Text color="light" size="XL" text={textData.homepage.title1} />
          <Text color="light" size="S" text={textData.homepage.title2} />
          <Text color="light" size="S" text={textData.homepage.title3} />
        </HomeModal>
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
      </main>
    )}
  </ShopContext.Consumer>
);

export default Home;
