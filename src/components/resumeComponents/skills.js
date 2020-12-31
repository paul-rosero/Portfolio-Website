import React, { Component } from 'react';
import { Col, Row, ProgressBar, Container } from 'react-bootstrap';

const renderLanguage = [], renderFramework = [], renderDatabase = [], renderOther = []

const allSkills = [
    {skillType: "language", skillName: "JavaScript", skillProgress: 75,},
    {skillType: "language", skillName: "Ruby", skillProgress: 50,},
    {skillType: "language", skillName: "Linux/Unix", skillProgress: 50,},
    {skillType: "framework", skillName: "React.Js", skillProgress: 60,},
    {skillType: "framework", skillName: "Node.Js", skillProgress: 50,},
    {skillType: "framework", skillName: "Ruby on Rails", skillProgress: 50,},
    {skillType: "database", skillName: "MongoDb", skillProgress: 60,},
    {skillType: "database", skillName: "PostgreSQL", skillProgress: 50,},
    {skillType: "other", skillName: "HTML5/CSS", skillProgress: 70,},
    {skillType: "other", skillName: "Git/GitHub", skillProgress: 70,},
    {skillType: "other", skillName: "Bootstrap", skillProgress: 55,},
    {skillType: "other", skillName: "Spanish", skillProgress: 100,},
    {skillType: "other", skillName: "Italian", skillProgress: 75,}
]

const mappedSkills = allSkills.map( (skill, index) =>{
    return(
        <Row itemID={ skill.skillType } key={ index } style={{ display: 'flex' }}>
            <Col xs={5}>
                { skill.skillName }
            </Col>
            <Col xs={ 7 }>
                <ProgressBar now={ skill.skillProgress } label={ `${skill.skillProgress}%` }/>
            </Col>
        </Row>
    );
})

mappedSkills.forEach(function(skill) {
    if (skill.props.itemID === "language") {
        return renderLanguage.push(skill) 
    } else if (skill.props.itemID === "framework") {
        return renderFramework.push(skill)
    } else if (skill.props.itemID === "database") {
        return renderDatabase.push(skill)
    } else {
        return renderOther.push(skill)
    }
})

class Skills extends Component {
    render() {
        return (
            <Container style={{ padding: 0, margin: "0px 0px 15px 0px" }}>
                <h3>Skills</h3>
                <h5 className="language-h5">Languages:</h5>
                    { renderLanguage } 
                <h6>Frameworks:</h6>
                    { renderFramework }
                <h6>Databases:</h6>
                    { renderDatabase }
                <h6>Other:</h6>
                    { renderOther }
            </Container>
        )
    }
}

export default Skills;
