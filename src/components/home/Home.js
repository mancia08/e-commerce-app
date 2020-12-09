import Banner from "../atoms/banner/Banner";
import { textData } from "./../../data/textData";
import { ShopContext } from "./../../context/ShopContext";
import SuperNav from "./../atoms/SuperNav";
import Navbar from "./../atoms/navbar/Navbar";

const Home = () => (
  <ShopContext.Consumer>
    {(value) => (
      <main>
        <Banner />
        <SuperNav />

        <div>
          <h1>{textData.homepage.title1}</h1>
          <h2>{textData.homepage.title2}</h2>
          <h2>{textData.homepage.title3}</h2>
        </div>
        <Navbar type="home" />
      </main>
    )}
  </ShopContext.Consumer>
);

export default Home;
