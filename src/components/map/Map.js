import React from 'react'
import Navbar from "./../atoms/navbar/Navbar";
import MapBox from './mapbox';
const Map = props => (
    <div>
        <Navbar/>
        <h1>{props.title}</h1>
        <MapBox/>
    </div>
)

export default Map;