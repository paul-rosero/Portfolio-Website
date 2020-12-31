import React from 'react';
import { Col, Row } from 'react-bootstrap';

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
                <a href={ a } target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold'}}>{title}</a>
        </li>
    );
})                         
                        
function ContactMe() {
    return (
        <Col id="contactMe-grid">
            <Row col={ 6 }>
                <h2>Paul Rosero</h2>
                <img src="/images/ProfilePicture.png" alt="avatar" className="avatar-img" style={{ marginTop: "0px" }}/>
                <p style={{ fontWeight: "bold", margin: "1em 2em 2em 2em",padding: "1em" }}>
                    I want to thank you for taking time to visit my page. If you have any questions, ideas or want to collaborate on some work feel free to message me. I have listed my email address, Github and LinkedIn profile pages so you can reach me faster.
                </p>
            </Row>
            <Row col={ 6 }>
                <h3>Contact Me</h3>
                <hr style={{ borderTop: "5px dotted white", width: "85%", margin: "auto" }}/>
                <ul className="list-unstyled">
                    { renderIcons }
                </ul>
            </Row>
        </Col>
    )
}

export default ContactMe;
