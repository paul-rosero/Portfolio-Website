import React from "react";
import { Grid, Cell } from "react-mdl";


function Homepage() {
    return(
        <div className="homepage-greeting" style={{ width: '100%', margin: 'auto'}}>
            <Grid className="homepage-grid">
                <Cell col={12}>
                    
                    <img 
                        src="/images/ProfilePicture.png"
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1 className="home-heading">Software Enginner/Full Stack Web Developer</h1>
                    </div>
                    <p className="home-introduction">My name is Paul Rosero and I'm a Flatiron Bootcamp Alumni. Creating websites, starting from scratch or renovating already written websites, is something I love to do. As a beginner in the business, this website was created from scratch just so I can showcase my skills and abilities.</p>
                </Cell>
            </Grid>
            
            
        </div>
        
    )
}

export default Homepage