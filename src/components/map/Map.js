import React from 'react'
import Navbar from "./../atoms/navbar/Navbar"

const Map = props => (
    <div>
        <Navbar/>
        <h1>{props.title}</h1>
    </div>
)

export default Map;