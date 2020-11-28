import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

const educationArray = [
    {startDate: "", endDate: "", schoolName: "", description: ""},
    {startDate: "", endDate: "", schoolName: "", description: ""},
    {startDate: "", endDate: "", schoolName: "", description: ""}
]

const renderEducation = educationArray.map(school => {
    console.log(school)
})

class Education extends Component {
    render() {
        return (
            <Grid id="education-grid">
                <Cell col={4}>
                    <p>{this.props.startDate} - {this.props.endDate}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                    <p>{ this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;
