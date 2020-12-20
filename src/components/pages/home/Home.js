import SuperNav from "../../atoms/mainNavbar/SuperNav/SuperNav";
import HomeImg from "../../subatoms/images/HomeImg";
import HomeButtons from "./HomeButtons.js";
const Home = () => (

      <>
        <HomeImg>
        </HomeImg>
        <SuperNav type="home" textColor="light" />
        <HomeButtons />
        </>
);

export default Home;
