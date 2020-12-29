import React from "react";
import { Col, Row } from 'react-bootstrap';


function Homepage() {
    return(
        <div className="homepage-greeting" style={{ width: '100%', margin: 'auto'}}>
            <Col className="homepage-grid">
                <Row col={12}>
                    <img src="/images/ProfilePicture.png" alt="avatar" className="avatar-img"/>
                    <div className="banner-text">
                        <h1 className="home-heading">Software Engineer</h1>
                        <h1 className="home-heading">Full Stack Web Developer</h1>
                        <hr/>
                        <div className="social-links">
                            {/*JavaScript icon */}
                            <i className="fab fa-js-square"></i>
                            {/*React.js icon */}
                            <i className="fab fa-react"></i>
                            {/*Ruby icon */}
                            <i className="fas fa-gem"></i>
                            {/*HTML5 icon */}
                            <i className="fab fa-html5"></i>
                            {/*Bootstrap icon */}
                            <i className="fab fa-bootstrap"></i>
                            {/*MongoDB icon */}
                            <i className="fab fa-mdb"></i>
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