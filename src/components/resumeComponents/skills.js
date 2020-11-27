import React, { Component } from 'react'
import { Cell, Grid, ProgressBar } from 'react-mdl'

const skillsObject = [
    {skillType: "language", skillName: "JavaScript", skillProgress: 75,},
    {skillType: "language", skillName: "Ruby", skillProgress: 50,},
    {skillType: "framework", skillName: "React.Js", skillProgress: 60,},
    {skillType: "framework", skillName: "Node.Js", skillProgress: 50,},
    {skillType: "framework", skillName: "Ruby on Rails", skillProgress: 50,},
    {skillType: "database", skillName: "MongoDb", skillProgress: 60,},
    {skillType: "database", skillName: "PostgresSQL", skillProgress: 50,},
    {skillType: "other", skillName: "HTML5/CSS", skillProgress: 70,},
    {skillType: "other", skillName: "Bootstrap", skillProgress: 55,},
    {skillType: "other", skillName: "Spanish", skillProgress: 100,},
    {skillType: "other", skillName: "Italian", skillProgress: 75,}
]

const renderLanguage = skillsObject.map((skill, index) => {
    if (skill.skillType === "language") {
        return <div key={index} style={{display: 'flex'}}>
            {skill.skillName}
            <ProgressBar style={{ margin: 'auto', width: '75%'}} progress={skill.skillProgress} />
        </div>
    }
    return null
})
    

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                <h6>Languages:</h6>
                {renderLanguage}
                <h6>Frameworks:</h6>
                    
                <h6>Databases:</h6>
                    
                <h6>Other:</h6>   
                </Cell>
            </Grid>
        )
    }
}

export default Skills;
