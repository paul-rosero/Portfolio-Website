import React, { useState } from 'react';
import { Card, CardDeck } from 'react-bootstrap';

function Project({ projects }) {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [homepage, setHomepage] = useState('');
    const [langauge, setLanguage] = useState('');
    
    const projected = projects.forEach( project => {
        console.log(project)
        return(
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{ title }</Card.Title>
                        <Card.Text>{ description }</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        )
    }) 

    console.log("projects", projects.description)
    console.log("projected", projected)
    return (
        <div>
            { projected }
        </div>
        
    )
}

export default Project;