import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';

const Project = ({ projects }) => {
    const project = projects.map( ({ name, language, description, homepage, html_url, updated_at }, i) => { 
    console.log("updated_at", updated_at)      
        return (
            homepage ?
                <Card className="text-center" key={ i }>
                    <Card.Img variant="top" src="holder.js/100px160"/>
                    <Card.Body>
                        <Card.Title>{ name.split("-").join(" ") }</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{ language }</Card.Subtitle>
                        <Card.Text>{ description }</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href={ homepage }>Webpage Link</Card.Link>
                        <Card.Link href={ html_url }>GitHub Link</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Time now - updated_at = last updated time.</small>
                    </Card.Footer>
                </Card>
            : null  
        )     
    })  

    return (
        <CardDeck>
           { project }
        </CardDeck>
    )
}

export default Project;