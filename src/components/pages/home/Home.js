import SuperNav from "../../atoms/SuperNav";
import HomeImg from "../../atoms/images/HomeImg";
import HomeButtons from "./HomeButtons.js";

const Home = () => (
  <>
    <HomeImg />
    <SuperNav type="home" textColor="light" />
    <HomeButtons />
  </>
);

export default Home;
