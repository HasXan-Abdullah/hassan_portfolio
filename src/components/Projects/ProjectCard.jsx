import { Typography } from '@mui/material'
import React from 'react'
import './ProjectCard.css'
//Card params
 const ProjectCard = ({
    url =` www.youtube.com`,
    title = "Title here",
    image,

 }) => {
  return (
   
    
        <div className="projectcard">
             <a href={url} target="blank">
               <img src = {image} alt="photo" />
               <Typography>{title}</Typography>
             </a>

        </div>
    
    
    )
}
export default  ProjectCard;


