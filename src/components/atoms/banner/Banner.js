import React from 'react';
import banner from "./../../../styles/images/banner.jpg"
import styled from "styled-components"

const StyledBanner = styled.div`
background:url(${banner}) no-repeat center center;
background-size: cover;
width:100%;
height:400px;
`
const Banner = () => <StyledBanner />

export default Banner;