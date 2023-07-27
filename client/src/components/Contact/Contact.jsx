import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const Contact = () => {

  function handleClick() {
    alert("Thank You!!! We will get back to you soon...");
  }

  return (
    <div className='contact'>
      <div className="wrapper">
         <span>BE IN TOUCH WITH US : </span>
         <div className="mail">
            <input type="text" placeholder='Enter your E-mail...'/>
            <button onClick={handleClick}>JOIN US</button>
         </div>
         <div className='link-icon'>
          <Link to='https://www.instagram.com/naitik554/'>
            <FacebookIcon className='link-icon-icon'/>
          </Link>
          <Link to='https://www.instagram.com/naitik554/'>
            <InstagramIcon className='link-icon-icon'/>
          </Link>
          <Link to='https://www.instagram.com/naitik554/'>
            <TwitterIcon className='link-icon-icon'/>
          </Link>
          <Link to='https://www.instagram.com/naitik554/'>
            <GoogleIcon className='link-icon-icon'/>
          </Link>
         </div>
      </div>
    </div>
  )
}

export default Contact