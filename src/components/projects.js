import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Project from './projectsComponents/project';

// function ControlledTabs() {
//     const [key, setKey] = useState('home');
//     return (
//         <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
//             <Tab eventKey="home" title="Home">
//                 <Sonnet/>
//             </Tab>

//             <Tab eventKey="profile" title="Profile">
//                 <Sonnet/>
//             </Tab>

//             <Tab eventKey="contact" title="Contact" disabled>
//                 <Sonnet/>
//             </Tab>
//         </Tabs>
//     );
// }
    
class Projects extends Component {
    
    render() {
        return (
            <div>
                <h1>Under Construction, come back soon to check it out.</h1>
                {/* <ControlledTabs /> */}
            </div>    
        );
    }
}

export default Projects;


