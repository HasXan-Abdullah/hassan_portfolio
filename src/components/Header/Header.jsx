import React from 'react'
import logo from '../../images/logo.png'
import {ReactNavbar} from 'overlay-navbar';
import {FaUserAlt} from 'react-icons/fa';

export const Header = () => {
  return <ReactNavbar 
  
  navColor1="black"
  navColor2="rgba(51, 49, 49, 5)"
  burgerColor="grey"
  burgerColorHover="white"
  logo={logo}
  nav2justifyContent="space-around"
  nav3justifyContent="space-around"
  link1Text="Home"
  link2Text="About"
  link3Text="Contact"
  link4Text=""
  link1Color="grey"
  link1ColorHover="white"
  link1Url="/"
  link2Url="/About"
  link3Url="/Contact"
  
  profileIcon={true}
  ProfileIconElement={FaUserAlt}
  profileIconColor="grey"
  profileIconColorHover="white"

  />
}
