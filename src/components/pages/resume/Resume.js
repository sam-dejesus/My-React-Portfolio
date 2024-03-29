// Importing necessary modules and components
import React from "react";
import {  Row, Col, Button } from "react-bootstrap";
import "./resume.css";
import PDF from "../../../documentation/Samuel Dejesus Resume.pdf";

// Resume component
function Resume() {
  return (
    <div id="resume" className="resume ">
      <div className="resume-section container">
        <div className="row">
          <Col className="text-center">
            <h1 className="resumeText">Resume</h1>
            <hr/>
            <Button variant="success" href={PDF} download className="btn">
              Download Resume
            </Button>
          </Col>
        </div>
        <Row>
          <Col>
            <h3>Technical Skills</h3>
            <hr />
            <ul className="list-inline d-flex flex-column">
              <li className="mb-2">
                <strong>Languages:</strong> JavaScript, HTML, CSS, C#, Python, SQL, TypeScript
              </li>
              <li className="mb-2">
                <strong>Libraries/Frameworks:</strong> React, jQuery, Bootstrap,
                Materialize, Node, Sequilize, Mongoose, Handlebars, Express, GraphQL
              </li>
              <li className="mb-2">
                <strong>Databases:</strong> MongoDB, MySQL
              </li>
              <li className="mb-2">
                <strong>Tools/Software architectural pattern:</strong> Git, GitHub, Heroku, GitLab, MongoDB Compass, GraphQL Playground, Unity, Webkits, Chrome Extensions, MVC paridigm, Client/Server paridigm
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Education</h3>
            <hr/>
            <div >
              <h4>B.S in Software Engineering - student</h4>
              <h5 className="mb-4">Western Govoners University</h5>
              <h4>Certificate in Full-Stack Development</h4>
              <h5 className="mb-4">University of Centeral Florida</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Work Experience</h3>
            <hr />
            <div >
              <h4>Florida Rock and Tank Line</h4>
              <h5> Petroleum Driver 2022-2023</h5>
              <p>
              Transported and unloaded petroleum to multiple locations as efficiently and safely as
              possible while maintaining multiple deadlines throughout the day.
             </p>
               <ul>Key Accomplishments:</ul>
               <li>Accelerated training due to work performance.</li>
               <li>Help train new drivers through mentorship.</li>
               <li>Maintained a high safety record.</li>

            </div>
            <div >
              <h4>Eagle Transport</h4>
              <h5> Petroleum Driver 2021-2022</h5>
              <p>
              Transported and unloaded petroleum to multiple locations as efficiently and safely as possible while
              maintaining multiple deadlines throughout the day.
             </p> 
               <ul>Key Accomplishments:</ul>
               <li>Accomplished senior level delivery times in a few months</li>
               <li>Maintained 100% accuracy in delivery records and paperwork, ensuring compliance
                  with regulations and avoiding fines</li>
               <li>Maintained a high safety record.</li>
      
            </div>
            <div className="mb-5">
              <h4>Swift Transportation</h4>
              <h5> Commercial Driver 2019-2021</h5>
              <p>
              Transported loads all over the U.S and worked with high value clients in special
              accounts
             </p>
               <ul>Key Accomplishments:</ul>
               <li>Secured a special delivery account in less then a year due to performance</li>
               <li>Obtained a promotion in less then a year due to performance</li>
               <li>Obtained performance awards</li>
               <li>Given special assignments based on performance</li>
      
            </div>

          </Col>
        </Row>
      
      </div>
    </div>
  );
}
// Export Resume
export default Resume;