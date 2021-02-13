import React from "react";
import { Col } from 'react-bootstrap';

const allTags = [
    { name: "fab fa-js-square" },
    { name: "fab fa-react" },
    { name: "fas fa-gem" },
    { name: "fab fa-html5" },
    { name: "fab fa-bootstrap" },
    { name: "fab fa-mdb" }
]

const renderTags = allTags.map(( {name}, index ) => {
    return <i key={ index } className={ name }/>
})

function Homepage() {
    return(
        <Col className="homepage-grid">
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
        </Col>
    )
}

export default Homepage