import {useEffect, useState} from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
import {faCcVisa} from '@fortawesome/free-brands-svg-icons'
import {faCcMastercard} from '@fortawesome/free-brands-svg-icons'

const Footer = (props) => {


  return(
    <div className="Footer">

    <div className="newsletter">
      <h1>Sign up for our newsletter</h1>
      <form>
      <input type="email" placeholder="Email address..."/>
      <button onClick={(e) => e.preventDefault()}>Subscribe</button>
      </form>
    </div>

    <div className="products">
      <h4>Products</h4>
      <p>Men</p>
      <p>Women</p>
      <p>Special Offers</p>
    </div>

    <div className="workingHours">
      <h4>Working days</h4>
      <p>Mon-Fri (9:00-20:30)</p>
      <p>Sat (10:30-21:00)</p>
      <p>Sun (11:00-21:00)</p>

      <h5>We accept:</h5>
      <span><FontAwesomeIcon icon={faPaypal} size="lg"/></span>
      <span><FontAwesomeIcon icon={faCcVisa} size="lg"/></span>
      <span><FontAwesomeIcon icon={faCcMastercard} size="lg"/></span>
    </div>
    </div>
  )

}

export default Footer;
