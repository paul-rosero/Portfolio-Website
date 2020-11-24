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
                    <h5>Full Stack Web Developer</h5>
                    <hr style={{ borderTop: '3px solid black', width: '60%'}} />
                </Cell>
                <Cell col={8} className="resume-right-col">Right Side</Cell>
            </Grid>
            </div>
        )
    }
}

export default Resume;