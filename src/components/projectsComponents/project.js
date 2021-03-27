import React from 'react';
import { CardDeck, Card, Row, Col } from 'react-bootstrap';
import moment from 'moment';

const setProfilePic = (name) => {
    const myProfilePic = '/images/myProfilePage.png';
    const wysProfilePic = '/images/marisolProfile.png';
    if (name === "Whats-Your-Story-Website") {
        return <Card.Img id="project-avatar" variant="top" src={ wysProfilePic }/>;
    } else if (name === "Portfolio-Website") {
        return <Card.Img id="project-avatar" variant="top" src={ myProfilePic }/>;
    } else {
        return null;
    }
}        

const Project = ({ projects }) => {
    const project = projects.map( ({ name, language, description, homepage, html_url, updated_at }, i) => {
        return (
            homepage ?
                <Col key={ i }>
                    <Card id="project-card" className="text-center" border="primary" style={{ width: '40vmax' }}>
                    { setProfilePic(name)}
                        <Card.Body>
                            <Card.Title>{ name.split("-").join(" ") }</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{ language }</Card.Subtitle>
                            <Card.Text>{ description }</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href={ homepage } target="_blank" rel="noopener noreferrer">Webpage Link</Card.Link>
                            <Card.Link href={ html_url } target="_blank" rel="noopener noreferrer">GitHub Link</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Updated { moment(updated_at).fromNow() }</small>
                        </Card.Footer>
                    </Card>
                </Col>
            : null  
        )     
    })  

    return (
        <CardDeck className="container" id="projects-deck">
            <Row xs={ 1 } md={ 2 } lg={ 2 }>
                { project }
            </Row>
           
        </CardDeck>
    )
}

export default Project;