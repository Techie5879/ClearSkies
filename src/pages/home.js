import React from 'react'
import { Button } from '@mui/material'
import background from './pexels-photomix-company-96622.jpg'
import './home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const myStyle={
    backgroundImage:`url(${background})`,
    backgroundSize:"cover",
    height:"91.2vh",
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
      
      <Button color='inherit' id='h_button' onClick={()=>navigate('/education')}>Let's Get Started!</Button>
      
    </span>
    </div>
  )
}

export default Home