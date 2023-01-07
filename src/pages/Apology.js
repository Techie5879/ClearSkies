import React from 'react'
import background from './pexels-photomix-company-96622.jpg'
import './apology.css'

const Apology = () => {
  return (
    <div className='nav_apology_container' style={{backgroundImage: `url(${background})`, height:"91.2vh",width:"100%",backgroundSize:"cover"}}>
        
        <div className='apology'>
            <img src="https://api.memegen.link/images/custom/_/invalid_input_bruh.jpg?alt=https://i.imgur.com/CsCgN7Ll.png&width=400" alt='apology'/>
        </div>
    </div>
  )
}

export default Apology