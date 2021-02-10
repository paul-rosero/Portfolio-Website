import React from 'react';
import { Card } from 'react-bootstrap';

function DisplayProject({ project }) {
    console.log(project)
    return (
        <div>
            <Card className="text-center">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Language</Card.Subtitle>
                    <Card.Text>Description</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="/">Portfolio Link</Card.Link>
                    <Card.Link href="/">GitHub Link</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Time now - updated_at = last updated time.</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default DisplayProject;
