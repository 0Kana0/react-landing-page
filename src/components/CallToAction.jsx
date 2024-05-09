import React from 'react'
import './CallToAction.css'
import { FiCode } from "react-icons/fi";

const CallToAction = () => {
  return (
    <div className='cta-bg'>
      <div className="overlay"></div>
      <div className="container">
        <div className="cta-text">
          <FiCode className="FiCode"/>
          <h2>We are react dev team</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quasi error adipisci deserunt vero nobis porro minus, corrupti esse earum, dignissimos nemo. Dolorem assumenda id aliquid voluptatem ipsa eaque voluptatum.</p>
          <a href="#" className='cta-btn'>get to know us</a>
        </div>
      </div>
    </div>
  )
}

export default CallToAction