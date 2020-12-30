import React from "react";
import { Col, Row } from 'react-bootstrap';

const allTags = [
    {id: 1, name: "fab fa-js-square"},
    {id: 2, name: "fab fa-react"},
    {id: 3, name: "fas fa-gem"},
    {id: 4, name: "fab fa-html5"},
    {id: 5, name: "fab fa-bootstrap"},
    {id: 6, name: "fab fa-mdb"}
]

const renderTags = allTags.map(({ id, name }) => {
    return <i key={ id } className={ name }></i>
})

function Homepage() {
    return(
        <div className="homepage-greeting">
            <Col className="homepage-grid">
                <Row >
                    <img src="/images/ProfilePicture.png" alt="avatar" className="avatar-img"/>
                    <div className="banner-text">
                        <h1 className="home-heading">Software Engineer</h1>
                        <h1 className="home-heading">Full Stack Web Developer</h1>
                        <hr/>
                        <div className="social-links">
                            { renderTags }
                        </div>
                        <hr/>
                        <p className="home-introduction">Creating websites, starting from scratch or renovating already written websites, is something I love to do. As a beginner in the business, this website was created from scratch just so I can showcase my skills and abilities.</p>
                        <div className="social-links">
                            {/*Github icon */}
                            <a href="https://github.com/paul-rosero" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" style={{ color: "white" }}/></a>
                            {/*LinkedIn icon */}
                            <a href="https://www.linkedin.com/in/paul-rosero" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" style={{ color: "white" }}/></a>
                        </div>
                    </div>
                </Row>
            </Col>
        </div>
    )
}

export default Homepage