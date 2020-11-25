import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';


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
                    <p>adress.</p>
                    <h6>Phone:</h6>
                    <p>phone</p>
                    <h6>Email:</h6>
                    <p>paul.rosero23@gmail.com</p>
                    <hr style={{ borderTop: '3px solid black', width: '60%'}}/>
                </Cell>
                <Cell col={8} className="resume-right-col">
                    
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Resume;