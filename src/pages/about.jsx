import React from 'react'
import './about.css'
import background from './pexels-photomix-company-96622.jpg'

const about = () => {
  return (
    <div style={{backgroundImage: `url(${background})`, height:"100vh",width:"100%",backgroundSize:"cover"}}>
      <section className='container1'>
        <h1>What is this about?</h1>
      </section>

      <section className='container1'>
        <div id='no-margin'>
          <h1>Who are we?</h1>
          <ul id='no-bullet'>
            <li>We are the HackStreet Boys!</li>
            <li>This is our first hackathon and our first shot at development</li>
            <li>
              This is us:
              <ul>
                <li>Aritra Bandhopadhyay</li>
                <li>Anubhab Sinha</li>
                <li>Bipradeep Bera</li>
                <li>Raj Shah</li>
              </ul>

            </li>
          </ul>
        </div>
      </section>
      <section className='container1'>
        <div>
          <h1>Project Links</h1>
          
          <a href="https://github.com/Techie5879/ClearSkies" className='plink'target="#"><img src="./github-mark/github-mark.png" alt="" />GitHub link</a>
        </div>
        
      </section>
    </div>
  )
}

export default about