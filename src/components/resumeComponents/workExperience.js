import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class WorkExperience extends Component {
    render() {
        return (
            <Grid id="workExperience-grid">
                <Cell col={4}>
                    <p>{this.props.startDate} - {this.props.endDate}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px', marginBottom: '0.3px'}}>{this.props.jobName}</h4>
                    <h5 style={{marginTop: '0px', marginBottom: '0.3px'}}>{this.props.jobTitle}</h5>
                    <ul>
                        <li>{ this.props.jobDescription1}</li>
                        <li>{ this.props.jobDescription2}</li>
                        <li>{ this.props.jobDescription3}</li>
                        <li>{ this.props.jobDescription4}</li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default WorkExperience;
