import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

const educationArray = [
    { startDate: "11/14/2018", endDate: "05/27/2020", name: "Flatiron School", degree: "Certificate of Completion Self-Paced Online Software Engineer" },
    { startDate: "", endDate: "", name: "", degree: "" },
    { startDate: "", endDate: "", name: "", degree: "" }
]

const renderEducation = educationArray.map((school, index) => {
    console.log(school)
    return <Grid id="education-grid" key={ index }>
        <Cell col={ 4 }>
            <p>{ school.startDate } - { school.endDate }</p>
        </Cell>
        <Cell col={ 8 }>
            <h4 style={{ marginTop: '0px' }}>{ school.name }</h4>
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
