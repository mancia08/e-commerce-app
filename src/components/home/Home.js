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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-around;
  height: calc(3 * ${theme.sizes.buttons.XL} + 4 * ${theme.spacer});
  width: 100vw;
  flex-direction: column;
  align-items: center;
`;

const Home = () => (
  <ShopContext.Consumer>
    {(value) => (
      <main>
        <Banner />
        <SuperNav type="home" />

        <HomeModal>
          <Text color="light" size="XL" text={textData.homepage.title1} />
          <Text color="light" size="L" text={textData.homepage.title1} />
          <Text color="light" size="L" text={textData.homepage.title1} />
        </HomeModal>
        <ButtonsWrap>
          <Link to="./shop">
            <Button size="XL" text="SHOP" color="primary" />
          </Link>
          <Link to="./map">
            <Button size="XL" text="MAP" color="primary" />
          </Link>
          <Link to="./contact">
            <Button size="XL" text="CONTACT" color="primary" />
          </Link>
        </ButtonsWrap>
      </main>
    )}
  </ShopContext.Consumer>
);

export default Home;
