import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

const workArray = [
    {startDate: "08/2016", endDate: "Present", companyName: "Center for Pain Relief and Wellness", jobPosition: "Licensed Massage Therapist", jobDescription1: "Perform customized Swedish and/or Deep Tissue Massage to clients for 50 or 80 min, 4-5 hours straight.", jobDescription2: "Increased client re-booking with me on a monthly basis therefore increasing business revenue.", jobDescription3: "Maintained a stress-free work environment with the team by helping out everyone when needed or asked.", jobDescription4: "Upheld NY State standard of SOAP notes required after each client."},

    {startDate: "08/2015", endDate: "02/2017", companyName: "Massage ENVY", jobPosition: "Licensed Massage Therapist", jobDescription1: "Performed customized Massage to clients needs for either 50 or 80 min.", jobDescription2: "Developed a good client rapport to meet theirs needs for the massage.", jobDescription3: "Helped coworkers grab linens, lotion or anything I could help with, when ever I could.", jobDescription4: "Upheld NY State standard of SOAP notes required after each client."},

    {startDate: "03/2009", endDate: "06/2012", companyName: "SUFFOLK WESTERN BOCES", jobPosition: "Relief Aide/Workshop Paraprofessional", jobDescription1: "Worked with a team of three senior staff to ensure the safety of students and staff while in the workshop.", jobDescription2: "Managed 30 classes a week, all special education students, teach them to perform a certain task to prepare them for jobs after school.", jobDescription3: "Organized the materials and tools each student needed before the class would arrive.", jobDescription4: ""},

    {startDate: "05/2009", endDate: "06/2011", companyName: "OHEKA Castle", jobPosition: "Waiter", jobDescription1: "", jobDescription2: "", jobDescription3: "", jobDescription4: ""}

]

const renderWork = workArray.map((job, index) => {
    return <Grid id="workExperience-grid" key={index}>
        <Cell col={4}>
            <p>{job.startDate} - {job.endDate}</p>
        </Cell>
        <Cell col={8} >
            <h4 style={{marginTop: '0px', marginBottom: '0.3px'}}>{job.companyName}</h4>
            <h5 style={{marginTop: '0px', marginBottom: '0.3px'}}>{job.jobPosition}</h5>
            <ul>
                <li>{ job.jobDescription1}</li>
                <li>{ job.jobDescription2}</li>
                <li>{ job.jobDescription3}</li>
                <li>{ job.jobDescription4}</li>
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
