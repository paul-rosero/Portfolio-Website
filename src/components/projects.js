import React, { Component, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Project from './projectsComponents/project';

const repos = fetch("https://api.github.com/users/paul-rosero/starred")
.then(promise => promise.json())
.then(data => { return data })

console.log(repos)
function ControlledTabs() {
    const [key, setKey] = useState('home');
    return (
        <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="home" title="Home">
                <Project repository={ repos } />
            </Tab>

            <Tab eventKey="profile" title="Profile">
                
            </Tab>

            <Tab eventKey="contact" title="Contact" disabled>
               
            </Tab>
        </Tabs>
    );
}
    
class Projects extends Component {
    
    render() {
        return (
            <div>
                <h1>Under Construction, come back soon to check it out.</h1>
                <ControlledTabs />
            </div>    
        );
    }
}

export default Projects;


