import React from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';

function ContactMe() {
    return (
        <Grid id="contactMe-grid">
            <Cell col={ 6 }>
                <h2>Paul Rosero</h2>
                <img src="/images/ProfilePicture.png" alt="avatar" className="avatar-img" style={{ marginTop: "0px" }}/>
                <p style={{ fontWeight: "bold", margin: "1em 2em 2em 2em",padding: "1em" }}>
                    I want to thank you for taking time to visit my page. If you have any questions, ideas or want to collaborate on some work feel free to message me. I have listed my email address, Github and LinkedIn profile pages so you can reach me faster.
                </p>
            </Cell>
            <Cell col={ 6 }>
                <h3>Contact Me</h3>
                <hr style={{ borderTop: "5px dotted white", width: "75%", margin: "auto" }}/>
                <div className="icon-list">
                    <List>
                        <ListItem>
                            <ListItemContent id="icon">
                                <i class="fas fa-mobile-alt"></i>
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent id="icon">
                                <i class="fas fa-envelope-square"></i>
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent id="icon">

                            </ListItemContent>
                        </ListItem>
                    </List>
                </div>
            </Cell>
        </Grid>
    )
}

export default ContactMe;
