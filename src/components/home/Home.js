import Button from "./../atoms/button/Button"
import banner from "./../../styles/images/banner.jpg"
import {textData} from "./../../data/textData"
import { Link } from 'react-router-dom';

const Home = () => 
        <main>
            <img src={banner} alt="banner"/>
            <div>
                <h1>{textData.homepage.title1}</h1>
                <h2>{textData.homepage.title2}</h2>
                <h2>{textData.homepage.title3}</h2>
            </div>
            <Link to='/shop'><Button
            text={textData.buttons.homepage.first}/></Link>
            <Link to='/map'><Button
            text={textData.buttons.homepage.second}/></Link>
            <Link to='/contact'><Button
            text={textData.buttons.homepage.third}/></Link>
        </main>

export default Home;