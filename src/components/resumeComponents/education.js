import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

const educationArray = [
    { startDate: "01/2012", endDate: "12/2013", name: "New York College of Health Professions", degree: "Associates Degree in Occupational Studies" },
    { startDate: "09/2002", endDate: "6/2006", name: "Stony Brook University", degree: "Bachelor's Degree in Biology" }
]

const renderEducation = educationArray.map( (school, index) => {
    return(
        <Row id="education-grid" key={ index }>
            <Col col={ 4 }>
                <p>{ school.startDate } - { school.endDate }</p>
            </Col>
            <Col col={ 8 }>
                <h6 style={{ marginTop: '0px', fontWeight: 'bold' }}>{ school.name }</h6>
                <p>{ school.degree }</p>
            </Col>
        </Row>
    );
})

class Education extends Component {
    render() {
        return (
            <Container>
                <h5>Education</h5>
                { renderEducation }
            </Container>
           
        )
    }
}

export default Education;
