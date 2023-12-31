import React from 'react';
import './home.css'
import Profile from '../../../images/profile.jpeg'

export default function Home() {
  return (
    <div className='homeDiv d-flex flex-column'>

      <h1 className='homeText d-flex justify-content-center mt-5 mb-5'>Hey, im Samuel Dejesus <span  className="hand ms-5 ">✋🏼</span></h1>

      <div className=' d-flex mb-5 align-items-center homeBody'>

        <img src={Profile} alt='me' className='Profile shadow'/>

        <div className='  '>
        <div className=" text-black sum shadow">
        <h5 className=" d-flex justify-content-center myStory">My story</h5>
         <p>Hello, Im a Full Stack Developer leveraging backgrounds in Logistics and Security to provide unique perspectives on how the end-users could interact with the websites and software platforms. Earned a certificate in Full Stack Development from The University of Centeral Florida. Innovative problem-solver who is passionate about developing apps, websites and software. Strengths in creativity, agile Methodologies, and building projects from ideation to execution.

         </p>
          </div>
          <div className='mt-3'>
            <ul className='list'>
              <li> 📍 Orlando, Florida</li>
              <li>💻 Full Stack Developer</li>
              <li>📚 MERN Stack</li>
            </ul>
          </div>
        </div>
      </div>
      
      
     
    </div>
  );
}
