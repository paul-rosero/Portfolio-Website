import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

const workArray = [
    { startDate: "08/2016", endDate: "Present", companyName: "Center for Pain Relief and Wellness", position: "Licensed Massage Therapist", description: ["Perform customized Swedish and/or Deep Tissue Massage to clients for 50 or 80 min, 4-5 hours straight.", "Increased client re-booking with me on a monthly basis therefore increasing business revenue.", "Maintained a stress-free work environment with the team by helping out everyone when needed or asked.", "Upheld NY State standard of SOAP notes required after each client."] },

    { startDate: "08/2015", endDate: "02/2017", companyName: "Massage ENVY", position: "Licensed Massage Therapist", description: ["Performed customized Massage to clients' needs for either 50 or 80 min.", "Developed a good client rapport to meet their needs for the massage.", "Helped coworkers grab linens, lotion or anything I could help with, whenever I could.", "Upheld NY State standard of SOAP notes required after each client."] },

    { startDate: "03/2009", endDate: "06/2012", companyName: "SUFFOLK WESTERN BOCES", position: "Relief Aide/Workshop Paraprofessional", description: ["Worked with a team of three senior staff to ensure the safety of students and staff while in the workshop.", "Managed 30 classes a week, all special education students, teaching them to perform a certain task to prepare them for jobs after school.", "Organized the materials and tools each student needed before the class would arrive.", "Package and label finished product to send back to company."] },

    { startDate: "05/2009", endDate: "06/2011", companyName: "OHEKA Castle", position: "Waiter", description: ["Started as a waiter, learning from scratch how to interact with guests.", "Eventually was promoted to become one of 3 managers in charge of a group of employees to set up and break down the decorations for the party.", "After a year, I was promoted to oversee the private dining of the owners friends."] }

]

const renderWork = workArray.map((job, index) => {
    return(
        <Row id="workExperience-grid" key={ index }>
            <Col >
                <p>{ job.startDate } - { job.endDate }</p>
            </Col>
            <Col xs={ 8 }>
                <h5 style={{ marginTop: '0px', marginBottom: '0.3px' }}>{ job.companyName }</h5>
                <h6 style={{ marginTop: '0px', marginBottom: '0.3px' }}>{ job.position }</h6>
                {job.description.map((sentence, index) => {
                    return <ul key={index}>
                        <li>{ sentence }</li>
                    </ul>
                })}
            </Col>
        </Row>
    );
})

class WorkExperience extends Component {
    render() {
        return (
            <Container fluid>
                <h5>Work Experience</h5>
                { renderWork }
            </Container>
        )
    }
}

export default WorkExperience;
