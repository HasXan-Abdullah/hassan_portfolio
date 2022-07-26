import { Typography } from '@mui/material'
import React, { useState } from 'react';
import './Contact.css'
import contactImage from '../../images/contact-banner.jpg'
function Contact() {
  const contactFormHandler = (e)=>{
    e.preventDefault();
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className='conMain'>
        <div className='contact'>
            <Typography>Here you can connect with us</Typography>
        </div>
        <div className="contactContainer">
        <Typography variant='h4'>Contact US</Typography>
            <form className='conForm' onSubmit={contactFormHandler}>
               
                <input
                 type="text"
                 placeholder='Name'
                 value={name}
                 onChange={(e)=>{setName(e.target.value)}}/>
                 <input
                 type="text"
                 placeholder='Email'
                 value={email}
                 onChange={(e)=>{setEmail(e.target.value)}}/>
                 <textarea
                 placeholder='Message'
                 cols="30"
                 rows="10"
                 value={message}
                 onChange={(e)=>{setMessage(e.target.value)}}
                 />
                 <button variant='contained' type='submit'>Send</button>
            

            </form>
            <div className='conImage'>
              <img src={contactImage} alt='contact'/>
            </div>
        </div>
        
    </div>
  )
}

export default Contact