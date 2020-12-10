import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

const educationArray = [
    { startDate: "11/14/2018", endDate: "05/27/2020", name: "Flatiron School", degree: "Certificate of Completion Self-Paced Online Software Engineer" },

    { startDate: "01/2012", endDate: "12/2013", name: "New York College of Health Professions", degree: "Associates Degree in Occupational Studies" },

    { startDate: "09/2002", endDate: "6/2006", name: "Stony Brook University", degree: "Bachelor's Degree in Biology" }
]

const renderEducation = educationArray.map((school, index) => {
    return <Grid id="education-grid" key={ index }>
        <Cell col={ 4 }>
            <p>{ school.startDate } - { school.endDate }</p>
        </Cell>
        <Cell col={ 8 }>
            <h6 style={{ marginTop: '0px', fontWeight: 'bold' }}>{ school.name }</h6>
            <p>{ school.degree }</p>
        </Cell>
    </Grid>
})

class Education extends Component {
    render() {
        return (
            [renderEducation]
        )
    }
}

export default Education;
