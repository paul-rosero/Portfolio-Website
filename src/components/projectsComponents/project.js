import React, { useState, useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';
import DisplayProject from './DisplayProject';

const Project = ({ projects }) => {

    const [title, setTitle] = useState('');
    const [langauge, setLanguage] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [homepage, setHomepage] = useState('');
    const [id, setID] = useState(0);
    const [updated, setUpdated] = useState(0)

    
    useEffect(() => {
        console.log(projects)
        setData(projects)
    })
    
    const setData = () => projects.forEach( (project, i) => {
            return(
                console.log("project", project),
                project
            )   
        }) 

    return (
        <CardDeck>
           <DisplayProject />     
        </CardDeck>
    )
}

export default Project;