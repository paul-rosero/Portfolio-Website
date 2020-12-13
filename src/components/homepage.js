import React from "react";
import { Grid, Cell } from "react-mdl";


function Homepage() {
    return(
        <div className="homepage-greeting" style={{ width: '100%', margin: 'auto'}}>
            <Grid className="homepage-grid">
                <Cell col={12}>
                    <img src="/images/ProfilePicture.png" alt="avatar" className="avatar-img"/>
                    <div className="banner-text">
                        <h1 className="home-heading">Software Engineer</h1>
                        <h1 className="home-heading">Full Stack Web Developer</h1>
                        <hr/>
                        <div className="social-links">
                            {/*JavaScript icon */}
                            <i class="fab fa-js-square"></i>
                            {/*React.js icon */}
                            <i class="fab fa-react"></i>
                        </div>
                        <hr/>
                        <p className="home-introduction">Creating websites, starting from scratch or renovating already written websites, is something I love to do. As a beginner in the business, this website was created from scratch just so I can showcase my skills and abilities.</p>
                        <div className="social-links">
                            {/*Github icon */}
                            <a href="https://github.com/paul-rosero" target="_blank" rel="noreferrer"><i class="fab fa-github-square"/></a>
                            {/*LinkedIn icon */}
                            <a href="https://www.linkedin.com/in/paul-rosero" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"/></a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Homepage