import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

const allIcons = [
    { iTag: "fab fa-twitter-square", a: "https://twitter.com/paulrosero33", title: "My Twitter" },
    { iTag: "fas fa-envelope-square", a: "mailto: paul.rosero23@gmail.com", title: "My Email" },
    { iTag: "fab fa-facebook-square", a: "https://www.facebook.com/paul.rosero.98", title: "My Facebook" },
    { iTag: "fab fa-github-square", a: "https://github.com/paul-rosero", title: "My GitHub" },
    { iTag: "fab fa-linkedin", a: "https://www.linkedin.com/in/paul-rosero", title: "My LinkedIn" }
]

const renderIcons = allIcons.map( ({ iTag, a, title }, index) => {
    return(
        <li id="icon" key={ index } >
            <i className={ iTag }/>
            <a href={ a } target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: "white", padding: "0px 0px 0px 10px" }}>{title}</a>
        </li>
    );
})                         
                        
function ContactMe() {
    return (
        <Container>
            <Row className="contactMe-grid">
                <Col>
                    <h2>Paul Rosero</h2>
                    <img src="/images/profilePicture.png" alt="avatar" className="avatar-img"/>
                    <p style={{ fontWeight: "bold", padding: "1em" }}>
                        I want to thank you for taking time to visit my page. If you have any questions, ideas or want to collaborate on some work feel free to message me. I have listed my email address, Github and LinkedIn profile pages so you can reach me faster.
                    </p>
                </Col>
                <Col>
                    <h3>Contact Me</h3>
                    <hr style={{ borderTop: "5px dotted white", width: "85%", margin: "auto" }}/>
                    <ul className="list-unstyled" style={{ contentAlign: "left" }}>
                        { renderIcons }
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactMe;
