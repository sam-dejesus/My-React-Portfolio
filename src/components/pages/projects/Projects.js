import React from 'react';
import "./projects.css"

import BinaryBabel from './portfolio images/BinaryBabel.png';
import CodeQuiz from './portfolio images/Code Quiz.png'
import WorkdayPlanner from './portfolio images/work day planner.png'
import NTA from './portfolio images/Note Taker app.png'
import Password from './portfolio images/Password-Generator.png'
import weather from './portfolio images/weather-dashboard.html.png'
import social from './portfolio images/Social media back-end.png'
import employee from './portfolio images/employee.png'
// import flightNanny from './portfolio images/flightnanny3-447363e2e71e.herokuapp.com_.png'

const projectDataFrontEnd = [
  {
    name: 'Code Quiz',
    link: 'https://sam-dejesus.github.io/Code-Quiz2/',
    repo: 'https://github.com/sam-dejesus/Code-Quiz2',
    image: CodeQuiz,
    description: 'Try this engaging coding quiz that features three exciting difficulty settings and uses local storage to save your score and unlock achievements'
  },
  {
    name: 'Work Day Planner',
    link: 'https://sam-dejesus.github.io/Workday-planner/',
    repo: 'https://github.com/sam-dejesus/Workday-planner',
    image: WorkdayPlanner,
    description: 'A work day planner that uses local storage to plan out your day'
  },
  {
    name: 'Weather Dashboard',
    link: 'https://sam-dejesus.github.io/Weather-Dashboard2/',
    repo: 'https://github.com/sam-dejesus/Weather-Dashboard2',
    image: weather,
    description: 'A weather dashboard that has a clean UX and UI design '
  },
  {
    name: 'Password Generator',
    link:'https://sam-dejesus.github.io/Password-generator/',
    repo: 'https://github.com/sam-dejesus/Password-generator',
    image: Password,
    description: 'An app that helps you generate a random password'
  }
];

const projectDataBackEnd = [
  {
    name: 'Social Network Back-End',
    Demo:'https://drive.google.com/file/d/1KBNRHmjOck8Guk1THne5yq-zSS4JZOM7/view',
    repo: 'https://github.com/sam-dejesus/Social-network-back-end',
    image: social,
    description: 'A social network backend to showcase the power and flexibility of MongoDB, Mongoose, and Nodejs'
  },
  {
    name: 'Employee Tracker App',
    Demo:'https://drive.google.com/file/d/13otBgCQZsQJt792jjg8ezpPvd0MuazYj/view',
    repo: 'https://github.com/sam-dejesus/Employee-tracker-app',
    image: employee,
    description: 'CLI that tracks employee data such salary, dempartment, title and also provides CRUD functionality'
  }

]

const projectDataFullStack = [
  {
    name: 'Binry Babel',
    link: 'https://binary-babel-47599b309b8f.herokuapp.com/',
    repo: 'https://github.com/sam-dejesus/Tech-Blog-Binary-Babel',
    image: BinaryBabel,
    description: 'Binary Babel is a dynamic CMS tech blog website.'
  },
  {
    name: 'Note Taker App',
    link: 'https://sdj-note-taker-app.herokuapp.com/',
    repo: 'https://github.com/sam-dejesus/Note-taker-app',
    image: NTA,
    description: 'Note taker app that save all of your notes and organizes them'
  },
]

export default function Projects() {
  return (
    <div className='projectDiv'>
      
      <h1 className='col-12 d-flex justify-content-center projectText'>My Projects</h1>
      
      <h4 className='d-flex justify-content-center projectTitle'>Front-End</h4>
      <div className="project-list">
        {projectDataFrontEnd.map((project, index) => (
          <div key={index} className="project-item col-6 shadow-lg">
            <h4 className='projectName'>{project.name}</h4>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className='mb-2'>
              <img src={project.image} alt={project.name} />
            </a>
            <p className='projectDescription'>{project.description}</p>
            <div>
             <a className="btn btn-primary mb-2 me-2" href={project.repo} target="_blank" rel='noreferrer'>REPO</a>
             <a className="btn btn-success mb-2" href={project.link} target="_blank" rel='noreferrer'>WEBSITE</a>
            </div>

          </div>
        ))}
        </div>
         <h4 className='d-flex justify-content-center projectTitle'>Back-End</h4>

        <div className="project-list ">
        {projectDataBackEnd.map((project, index) => (
          <div key={index} className="project-item col-6 shadow-lg">
            <h4 className='projectName'>{project.name}</h4>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className='mb-2'>
              <img src={project.image} alt={project.name} />
            </a>
            <p className='projectDescription'>{project.description}</p>
            <div>
             <a className="btn btn-primary mb-2 me-2" href={project.repo} target="_blank" rel='noreferrer'>REPO</a>
             <a className="btn btn-success mb-2" href={project.link} target="_blank" rel='noreferrer'>DEMO</a>
            </div>

          </div>
        ))}
        </div>

        <h4 className='d-flex justify-content-center projectTitle'>Full Stack</h4>
        <div className="project-list">

         {projectDataFullStack.map((project, index) => (
          <div key={index} className="project-item col-6 shadow-lg">
            <h4 className='projectName'>{project.name}</h4>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className='mb-2'>
              <img src={project.image} alt={project.name} />
            </a>
            <p className='projectDescription'>{project.description}</p>
            <div>
             <a className="btn btn-primary mb-2 me-2" href={project.repo} target="_blank" rel='noreferrer'>REPO</a>
             <a className="btn btn-success mb-2" href={project.link} target="_blank" rel='noreferrer'>WEBSITE</a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}


