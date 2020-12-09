import Banner from "../atoms/banner/Banner";
import { textData } from "./../../data/textData";
import { ShopContext } from "./../../context/ShopContext";
import SuperNav from "./../atoms/SuperNav";
import Navbar from "./../atoms/navbar/Navbar";
import Text from "./../atoms/text/Text"

const Home = () => (
  <ShopContext.Consumer>
    {(value) => (
      <main>
        <div>
        <Text color="primary" size="S" text="primary s"/>
        <Text color="primary" size="M" text="primary m"/>
        <Text color="primary" size="L" text="primary l"/>
        <Text color="primary" size="XL" text="primary xl"/>
        <Text color="light" size="S" text="light s"/>
        <Text color="light" size="M" text="light m"/>
        <Text color="light" size="L" text="light l"/>
        <Text color="light" size="XL" text="light xl"/>
        <Text color="dark" size="S" text="dark s"/>
        <Text color="dark" size="M" text="dark m"/>
        <Text color="dark" size="L" text="dark l"/>
        <Text color="dark" size="XL" text="dark xl"/>


        </div>

        {/* <Banner /> */}
        {/* <SuperNav /> */}

       {/*  <div>
          <h1>{textData.homepage.title1}</h1>
          <h2>{textData.homepage.title2}</h2>
          <h2>{textData.homepage.title3}</h2>
        </div> */}
        {/* <Navbar type="home" /> */}
      </main>
    )}
  </ShopContext.Consumer>
);

export default Home;
