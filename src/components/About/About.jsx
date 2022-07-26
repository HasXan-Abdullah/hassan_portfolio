import React from 'react'
import './About.css';
import Typography from '@mui/material/Typography'



function About() {

  return (
    <div className='about'>
        <div className="aboutContainer">
            <Typography > this sample quote</Typography>
        </div>

        <div className="aboutContainer2">
            <div>
              <img className='aboutAvatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6rPd9hx_fUGzorshx1fG5kzUM5FGCSYmm2YBuLU3uSFFI5BviIWd6hrHbw&s' alt=''/>

              <Typography variant="h4"  
              style={{margin:"1vmax 0",color: "black"}}>Hassan Abdullah</Typography>
              <Typography  >Full Stack Developer</Typography>
              <Typography  >Hassan Abdullah</Typography>
            </div>
            <div>
              <Typography 
               style={
               { textAlign:" right",
                letterSpacing:" 5px",
                wordSpacing: "5px",
                lineHeight: "50px",}
              }>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, neque suscipit illo, tempora maxime dolores nostrum commodi veritatis incidunt amet deserunt iure delectus unde qui, repellendus dolorem et libero vel.
              </Typography>
            </div>
        </div>

    </div>
    
  )
}

export default About