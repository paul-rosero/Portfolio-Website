import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

const workArray = [
    { startDate: "08/2016", endDate: "Present", companyName: "Center for Pain Relief and Wellness", position: "Licensed Massage Therapist", description1: "Perform customized Swedish and/or Deep Tissue Massage to clients for 50 or 80 min, 4-5 hours straight.", description2: "Increased client re-booking with me on a monthly basis therefore increasing business revenue.", description3: "Maintained a stress-free work environment with the team by helping out everyone when needed or asked.", description4: "Upheld NY State standard of SOAP notes required after each client." },

    { startDate: "08/2015", endDate: "02/2017", companyName: "Massage ENVY", position: "Licensed Massage Therapist", description1: "Performed customized Massage to clients needs for either 50 or 80 min.", description2: "Developed a good client rapport to meet theirs needs for the massage.", description3: "Helped coworkers grab linens, lotion or anything I could help with, when ever I could.", description4: "Upheld NY State standard of SOAP notes required after each client." },

    { startDate: "03/2009", endDate: "06/2012", companyName: "SUFFOLK WESTERN BOCES", position: "Relief Aide/Workshop Paraprofessional", description1: "Worked with a team of three senior staff to ensure the safety of students and staff while in the workshop.", description2: "Managed 30 classes a week, all special education students, teaching them to perform a certain task to prepare them for jobs after school.", description3: "Organized the materials and tools each student needed before the class would arrive.", description4: "Package and label finished product to send back to company." },

    { startDate: "05/2009", endDate: "06/2011", companyName: "OHEKA Castle", position: "Waiter", description1: "", description2: "", description3: "", description4: "" }

]

const renderWork = workArray.map((job, index) => {
    return <Grid id="workExperience-grid" key={ index }>
        <Cell col={ 4 }>
            <p>{ job.startDate } - { job.endDate }</p>
        </Cell>
        <Cell col={ 8 } >
            <h5 style={{ marginTop: '0px', marginBottom: '0.3px' }}>{ job.companyName }</h5>
            <h6 style={{ marginTop: '0px', marginBottom: '0.3px' }}>{ job.position }</h6>
            <ul>
                <li>{ job.description1 }</li>
                <li>{ job.description2 }</li>
                <li>{ job.description3 }</li>
                <li>{ job.description4 }</li>
            </ul>
        </Cell>
    </Grid>
})

class WorkExperience extends Component {
    render() {
        return (
            [renderWork] 
        )
    }
}

export default WorkExperience;
