import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import Education from './resumeComponents/education';
import WorkExperience from './resumeComponents/workExperience';
import Skills from './resumeComponents/skills';
import Certificates from './resumeComponents/certificates';

class Resume extends Component {
    render() {
        return(
            <Grid className="resume-grid">
                <Cell col={4} className="resume-left-col">
                    <div style={{ textAlign: 'center'}}>
                        <img src="/images/ProfilePicture.png" alt="avatar" className="avatar-img"/>
                    </div>
                    <h2 style={{paddingTop: '1em'}}>Paul Rosero</h2>
                    <h5>Software Engineer</h5>
                    <hr style={{ borderTop: '3px solid black', width: '60%'}}/>
                    <p>Software Engineer looking for positions as Full Stack, Front-end or Back-end Web developer with knowledge in Ruby and JavaScript, Sinatra, Rails, React, CSS, HTML5, Bootstrap, SASS and Redux, MongoDB and PostgreSQL databases. My work ethic has improved as a result of working in many different fields with different people in varying situations. It has shaped me to be a well-rounded person and I am excited to help people make their lives easier with my apps/webpages/services.</p>
                    <hr style={{ borderTop: '3px solid black', width: '60%'}}/>
                    <h6>Address:</h6>
                    <p className="side-bar-p">Deer Park, N.Y.</p>
                    <h6>Phone:</h6>
                    <p className="side-bar-p">(631)637-5976</p>
                    <h6>Email:</h6>
                    <p className="side-bar-p">
                        <a id="email" href={"mailto: paul.rosero23@gmail.com"} style={{ fontWeight: 'bold'}}>paul.rosero23@gmail.com</a>
                    </p>
                    <h6>Webpages:</h6>
                    <p>
                        <a href="https://github.com/paul-rosero" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1em', fontWeight: 'bold'}}>My GitHub</a>
                        <a href="https://www.linkedin.com/in/paul-rosero" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold'}}>My LinkedIn</a>
                    </p>
                    <hr style={{ borderTop: '3px solid black', width: '60%'}}/>
                    <h5>Skills</h5>
                    <Skills />  
                </Cell>

                <Cell col={8} className="resume-right-col">
                    <h5>Certificates</h5>
                    <Certificates/>
                    <h5>Education</h5>
                    <Education/>
                    <h5>Work Experience</h5>
                    <WorkExperience/>
                </Cell>
            </Grid>
        )
    }
}

export default Resume;