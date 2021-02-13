import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Education from './resumeComponents/education';
import WorkExperience from './resumeComponents/workExperience';
import Skills from './resumeComponents/skills';
import Certificates from './resumeComponents/certificates';

class Resume extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="resume-left-col">
                            <img src="/images/profilePicture.png" alt="avatar" className="avatar-img"/>
                            <h2 style={{paddingTop: '1em'}}>Paul Rosero</h2>
                            <h5>Full Stack Web Developer</h5>
                            <hr style={{ borderTop: '3px solid black', width: '60%'}}/>
                            <p>Full Stack, Front-end or Back-end Web developer with knowledge in Ruby and JavaScript, Sinatra, Rails, React, CSS, HTML5, Bootstrap, SASS and Redux, MongoDB and PostgreSQL databases. My work ethic has improved as a result of working in many different fields with different people in varying situations. It has shaped me to be a well-rounded person and I am excited to help people make their lives easier with my apps/webpages/services.</p>
                            <hr style={{ borderTop: '3px solid black', width: '60%'}}/>
                            <h6>Address:</h6>
                            <p className="side-bar-p">Deer Park, N.Y.</p>
                            <h6>Phone:</h6>
                            <p className="side-bar-p">(631)637-5976</p>
                            <h6>Email:</h6>
                            <p className="side-bar-p">
                                <a href={"mailto: paul.rosero23@gmail.com"} style={{ fontWeight: 'bold'}}>paul.rosero23@gmail.com</a>
                            </p>
                            <h6>Webpages:</h6>
                            <p>
                                <a href="https://www.linkedin.com/in/paul-rosero" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold'}}>My LinkedIn</a><br/>
                                <a href="https://1000hires.com/candidates/paulrosero" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold'}}>My 1000Hires Profile</a><br/>
                                <a href="https://github.com/paul-rosero" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1em', fontWeight: 'bold'}}>My GitHub</a>
                            </p>
                            <hr style={{ borderTop: '3px solid black', width: '60%'}}/>
                            <Skills />  
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className="resume-right-col" style={{ padding: "1em" }}>
                            <Certificates/>
                            <Education/>
                            <WorkExperience/>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Resume;