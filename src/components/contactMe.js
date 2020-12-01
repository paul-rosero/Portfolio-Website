import React from 'react';
import { Cell, Grid } from 'react-mdl';

function ContactMe() {
    return (
        <Grid id="contactMe-grid">
            <Cell col={ 6 }>
                <h2>Paul Rosero</h2>
                <img src="/images/ProfilePicture.png" alt="avatar" className="avatar-img" style={{ paddingTop: "0px" }}/>
                <p style={{ fontWeight: "bold", margin: "1em" }}>
                    I want to thank you for taking time to visit my page. If you have any questions, ideas or want to collaborate on some work feel free to message me. I have listed my email address, Github and LinkedIn profile pages so you can reach me faster.
                </p>
            </Cell>
            <Cell col={ 6 }>
            <h1>other side</h1>
            </Cell>
        </Grid>
    )
}

export default ContactMe;
