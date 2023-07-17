import React from 'react';
import '../../style/home.css'
import Profile from '../../images/profile.jpeg'

export default function Home() {
  return (
    <div className='homeDiv d-flex flex-column mb-5'>

      <h1 className='homeText border d-flex justify-content-center mt-5 mb-5'>About Me</h1>
      <div className='col-12 d-flex justify-content-around'>
        <img src={Profile} alt='me' className='Profile rounded'/>
        <div className='mt-5 sum card'>
        <div class="card-body text-black">
        <h5 class="card-title">My story</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      
      
     
    </div>
  );
}
