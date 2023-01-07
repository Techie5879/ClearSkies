import React from 'react'
import { Form } from '../components'
import './predictor.css'
import background from './pexels-photomix-company-96622.jpg'
const Predictor = () => {
  return (
    <div style={{backgroundImage: `url(${background})`, height:"91.2vh",width:"100%",backgroundSize:"cover"}}>
      
      <Form></Form>
    </div>
  )
}

export default Predictor