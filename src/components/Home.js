import React from 'react'
import {AiFillRightCircle} from 'react-icons/ai'
// import './Home.css'
import './home.css'
function home() {
  return (
    <div className='container'>
        <h1>Runner's Workout</h1>
          <div className='images'>
              <div className='image img1'>
                  <p>STRENGTH <AiFillRightCircle /> </p>
              </div>
              <div className='image img2'>
                  <p>MOBILITY <AiFillRightCircle/> </p>
              </div>
              <div className='image img3'>
                  <p>DRILLS <AiFillRightCircle/> </p>
              </div>
          </div>
          <div className='footer'>
            
          </div>
    </div>
  )
}

export default home