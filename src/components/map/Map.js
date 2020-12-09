import React from 'react'
import Navbar from "./../atoms/navbar/Navbar"
import SuperNav from "./../atoms/SuperNav/SuperNav"
import MapBox from './mapbox';
import Banner from "./../atoms/banner/Banner"
import Text from "./../atoms/text/Text"
import Hr from "../atoms/text/Hr"

const Map = props => (
    <div>
        <SuperNav/>
        <Hr />
        <Navbar/>
        <Banner/>
        <MapBox/>
        <Text color="dark" size="L" text="        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quasi incidunt ducimus fugiat quam unde, laboriosam voluptates doloribus voluptatibus! Amet rerum optio explicabo. Minus repellendus mollitia quo totam nobis a, inventore nisi adipisci fugit, dolores qui et officia numquam repudiandae laudantium quisquam exercitationem possimus modi in ad id. Tempore, maxime.   "/>
    </div>
)

export default Map;

