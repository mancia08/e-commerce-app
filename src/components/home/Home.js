import Banner from "../atoms/banner/Banner";
import { textData} from "./../../data/textData";
import { ShopContext } from "./../../context/ShopContext";
import {HomeModal} from "./../../styles/styles"
import SuperNav from "./../atoms/SuperNav";
import Navbar from "./../atoms/navbar/Navbar";
import Text from "./../atoms/text/Text"


const Home = () => (
  <ShopContext.Consumer>
    {(value) => (
      <main>

        <Banner />
        <SuperNav type="home"/>

        <HomeModal>
        <Text color="light" size="XL" text={textData.homepage.title1}/>
        <Text color="light" size="L" text={textData.homepage.title1}/>
        <Text color="light" size="L" text={textData.homepage.title1}/>
        </HomeModal>
        <Navbar/>
      </main>
    )}
  </ShopContext.Consumer>
);

export default Home;
