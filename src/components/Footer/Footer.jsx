import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'; 
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import "./Footer.css";
const  Footer =()=> {
  return (
    <div className='footer'>
        <div>
             <Typography variant='h5'>About Me</Typography>
             <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
               
                 obcaecati quas odit similique nostrum perferendis quos. Tempore, totam.</Typography>
            <Link to="/contact" className = "footerContactBtn">
                <Typography>Contact US</Typography>
            </Link>
        </div>
        <div>
        <Typography variant='h6'>Social Media</Typography>
        <a href="http://" target="blank">
            <BsInstagram/>
            <BsFacebook/>
            <BsGithub/>
            
        </a>


        </div>
         </div>
  )
}

export default Footer