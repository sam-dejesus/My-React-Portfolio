import React from 'react';
import "./projects.css"
import BinaryBabel from './portfolio images/BinaryBabel.png';
import CodeQuiz from './portfolio images/Code Quiz.png'
import WorkdayPlanner from './portfolio images/work day planner.png'
import NTA from './portfolio images/Note Taker app.png'
import flightNanny from './portfolio images/flightnanny3-447363e2e71e.herokuapp.com_.png'

const projectData = [
  {
    name: 'Binry Babel',
    link: 'https://binary-babel-47599b309b8f.herokuapp.com/',
    repo: 'https://github.com/sam-dejesus/Tech-Blog-Binary-Babel',
    image: BinaryBabel,
    description: 'Binary Babel is a dynamic CMS tech blog website.'
  },
  {
    name: 'Code Quiz',
    link: 'https://sam-dejesus.github.io/Code-quiz/',
    repo: 'https://github.com/sam-dejesus/Code-quiz',
    image: CodeQuiz,
    description: 'Try this fun coding quiz that uses local storage to save your score'
  },
  {
    name: 'Work Day Planner',
    link: 'https://sam-dejesus.github.io/Workday-planner/',
    repo: 'https://github.com/sam-dejesus/Workday-planner',
    image: WorkdayPlanner,
    description: 'a Work day planner that uses local storage to plan out your day'
  },
  {
    name: 'Note Taker App',
    link: 'https://sdj-note-taker-app.herokuapp.com/',
    repo: 'https://github.com/sam-dejesus/Note-taker-app',
    image: NTA,
    description: 'A note taker app that save all of your notes and organizes them'
  },
  {
    name: 'Flight Nanny',
    link:'https://flightnanny3-447363e2e71e.herokuapp.com/',
    repo: 'https://github.com/Jmussleh/FlightNanny',
    image: flightNanny,
    description: 'an app that allows you to book a nanny while flying'
  }
];

export default function Projects() {
  return (
    <div className='projectDiv'>
      
      <h1 className='col-12 d-flex justify-content-center projectText'>My Projects</h1>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-item col-6 shadow-lg">
            <h2 className='projectName'>{project.name}</h2>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className='mb-2'>
              <img src={project.image} alt={project.name} />
            </a>
            <p className='projectDescription'>{project.description}</p>
            <div>
             <a class="btn btn-primary mb-2 me-2" href={project.repo} target="_blank" rel='noreferrer'>REPO</a>
             <a class="btn btn-success mb-2" href={project.link} target="_blank" rel='noreferrer'>WEBSITE</a>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
}


