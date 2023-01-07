import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import './form.css'


const Form = () => {
  const [title, setTitle] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  // Handling of submission of form
  const movie_submit = {title};
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    // console.log(movie_submit);

    fetch('/predictor', {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(movie_submit)
    }).then((response) => {
      if (response.status !== 200) {
        navigate("/apology");
        // return {}
      }
      if (response.status === 200) {
        return response.json();
      }
    }).then((data) => {
      // console.log(data);
      title ? (navigate('/predict', { state: { wasFetched: true, resp_data: data} })) : (navigate('/apology'));
      setIsPending(false);
    })

  }

  

  // Autocomplete on escaped regex string, matches returns matched array
  const onChangeHandler = (title) => {

    setTitle(title);
  }
  

  return (
    
    <div className='form_container'>
        <div className='test'>
          <form className='form' onSubmit={handleSubmit}>
              
            <input type='text' placeholder='City' id="city" autoFocus
            autoComplete='off' value={title} onChange={(e)=>{ setTitle(e.target.value); onChangeHandler(e.target.value) }}/>
            <input type='text' placeholder='PM2.5 Concentration' id="pm2_5"
            autoComplete='off' value={title} onChange={(e)=>{ setTitle(e.target.value); onChangeHandler(e.target.value) }}/>
            <input type='text' placeholder='PM10 Concentration' id="pm10" 
            autoComplete='off' value={title} onChange={(e)=>{ setTitle(e.target.value); onChangeHandler(e.target.value) }}/>
            <input type='text' placeholder='NO Concentration' id="NO" 
            autoComplete='off' value={title} onChange={(e)=>{ setTitle(e.target.value); onChangeHandler(e.target.value) }}/>
            <input type='text' placeholder='NO2 Concentration' id="NO2" 
            autoComplete='off' value={title} onChange={(e)=>{ setTitle(e.target.value); onChangeHandler(e.target.value) }}/>

            {!isPending && <button className='button'>Predict AQI</button>}
            {isPending && <button className='button' disabled>Predicting...</button>}
          </form>
          
 
        </div>
    </div>

  )
}

export default Form;
