import Button from "./../atoms/button/Button"
import banner from "./../../styles/images/banner.jpg"
import {textData} from "./../../data/textData"

const Home = () => 
        <main>
            <img src={banner} alt="banner"/>
            <div>
                <h1>{textData.homepage.title1}</h1>
                <h2>{textData.homepage.title2}</h2>
                <h2>{textData.homepage.title3}</h2>
            </div>
            <Button
            text={textData.buttons.homepage.first}/>
            <Button
            text={textData.buttons.homepage.second}/>
            <Button
            text={textData.buttons.homepage.third}/>
        </main>

export default Home;