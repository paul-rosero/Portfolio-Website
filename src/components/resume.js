import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import ResumeDetails from './resumeComponents/resumeDetails';
import Skills from './resumeComponents/skills';


class Resume extends Component {
    render() {
        return(
            <div>
            <Grid className="resume-grid">
                <Cell col={4}>
                    <div style={{ textAlign: 'center'}}>
                        <img src="/images/ProfilePicture.png" alt="avatar" className="avatar-img"/>
                    </div>
                    <h2 style={{paddingTop: '1em'}}>Paul Rosero</h2>
                    <h5>Software Engineer</h5>
                    <hr style={{ borderTop: '3px solid black', width: '60%'}}/>
                    <p>Software Engineer looking for positions as Full Stack, Front-end or Back-end Web developer with knowledge in Ruby and JavaScript, Sinatra, Rails, React, CSS, HTML5, Bootstrap, SASS and Redux, MondoDB and PostgresSQL databases. My work ethic has improved as a result of working in many different fields with different people in varying situations. It has shaped me to be a well-rounded person and I am excited to help people make their lives easier with my apps/webpages/services.</p>
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
                </Cell>
                <Cell col={8} className="resume-right-col">
                    <h5>Education</h5>
                    <ResumeDetails
                        startDate={"10/2001"}
                        endDate={"10/2004"}
                        institutionName={"James"}
                        institutionDescription={"description"}
                    />
                    <h5>Work Experience</h5>
                    <ResumeDetails
                        startDate={"10/2005"}
                        endDate={"10/2020"}
                        institutionName={"James"}
                        institutionDescription={"description"}
                    />
                    <h5>Skills</h5>
                    <h6>Languages:</h6>
                    <Skills
                        skill="JavaScript"
                        progress={60}
                    />
                    <Skills
                        skill="Ruby"
                        progress={40}
                    />
                    <h6>Frameworks:</h6>
                    <Skills
                        skill="React.Js"
                        progress={60}
                    />
                    <Skills
                        skill="Node.Js"
                        progress={60}   
                    />
                    <h6>Databases</h6>
                    <Skills
                        skill="MongoDB"
                        progress={50}
                    />
                    <Skills
                        skill="PostgressSQL"
                        progress={50}
                    />
                    <h6>Other:</h6>
                    <Skills
                        skill="HTML5/CSS"
                        progress={60}
                    />
                    <Skills
                        skill="Bootstrap"
                        progress={55}
                    />
                    <Skills
                        skill="Spanish"
                        progress={100}
                    />
                    <Skills
                        skill="Italian"
                        progress={75}
                    />
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Resume;