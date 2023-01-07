import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import './form.css'


const Form = () => {
  

  return (
    
    <div className='form_container'>
        <div className='test'>
          <form className='form'>
              
            <input type='text' placeholder='City' id="city" autoFocus autoComplete='off' required/>
            <input type='text' placeholder='PM2.5 Concentration' id="pm2_5" autoComplete='off' required/>
            <input type='text' placeholder='PM10 Concentration' id="pm10" autoComplete='off' required/>
            <input type='text' placeholder='NO Concentration' id="NO" required/>
            <input type='text' placeholder='NO2 Concentration' id="NO2" required/>

            {/* {!isPending && <button className='button'>Predict AQI</button>}
            {isPending && <button className='button' disabled>Predicting...</button>} */}
            <button id='button'>Predict</button>
          </form>
          
 
        </div>
    </div>

  )
}

export default Form;
