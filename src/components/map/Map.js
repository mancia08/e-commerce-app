import React from 'react'
import Navbar from "./../atoms/navbar/Navbar"
import SuperNav from "./../atoms/SuperNav/SuperNav"

const Map = props => (
    <div>
        <SuperNav/>
        <Navbar/>
        <h1>{props.title}</h1>
    </div>
)

export default Map;