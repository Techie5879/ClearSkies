import React from 'react'
import background from './pexels-photomix-company-96622.jpg'
import './home.css'
import { Link } from 'react-router-dom'

const home = () => {

  const myStyle={
    backgroundImage:`url(${background})`,
    backgroundSize:"cover",
    height:"100vh",
    width: "100%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    
  };

  return (
    <div style={myStyle}>
    
    <span style={{display:"flex", justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
      <h1 className='heading'>
        Predicting 
      </h1>
      <h1 className='heading'>
        And 
      </h1>
      <h1 className='heading'>
        Preventing Air Pollution
      </h1>

      <Link to="./education"><button id='h_button'>Let's Get Started!</button></Link>
      
    </span>
    </div>
  )
}

export default home