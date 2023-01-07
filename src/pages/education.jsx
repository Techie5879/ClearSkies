import React from 'react'
import './education.css'
import background from './pexels-photomix-company-96622.jpg'

const education = () => {

  
  return (
    <div style={{backgroundImage: `url(${background})`, height:"maxHeight",width:"100%",backgroundSize:"cover"}}>
      <section className="container1">

        <div className='text1'>
          <h1>What is AQI?</h1>
          <p>
            Air Quality Index(AQI) is a measure of Air Pollution.
            Think of the AQI as a yardstick that runs from 0 to 500. The higher the AQI value, the greater the level of air pollution and the greater the health concern. 
            The AQI is divided into six categories. Each category corresponds to a different level of health concern. Each category also has a specific color. The color makes it easy for people to quickly determine whether air quality is reaching unhealthy levels in their communities.  
          </p>
        </div>


      </section>

      <section className="container1">
      <div className='text1'>
          <h1>Should you be scared?</h1>
          <p>
            Unfortunately, the answer to the is YES! With increasing AQI's around the world
            not only are vulnerable people at risk healthy people are too. An AQI of 400+ is known to cause problems to healthy people as well.
            But fret not, as long as you take precautions you can defeat the increasing air pollution.
          </p>
        </div>
      </section>

      <section className="container1">
      <div className='text1'>
          <h1>What should you do?</h1>
          <p>
            <ul>
              <li className='list'>Avoid places with high AQI. Studies show that an exposure to AQI 300 for 12 hours is equivalent to smoking 12 cigarettes. PS: You can use our AQI Predictor check such places. </li>
              <li className='list'>Wear Masks! Well COVID-19 has taught us the importance of wearing masks and so will air pollution eventually. Wearing a mask can greatly reduce the amount of particles inhaled</li>
              <li className='list'>Exercising. One might wonder how this helps but exercising strengthens the lungs, heart and overall  making one less vulnerable to pollution</li>
            </ul>
          </p>
        </div>
      </section>

    </div>
  )
}

export default education