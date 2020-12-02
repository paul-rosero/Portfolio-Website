import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import Project from './projectsComponents/project';
class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    render() {
        return (
            <div>
                <Tabs className="projects-tabs" activeTab={ this.state.activeTab } onChange={ (tabId) => this.setState({ activeTab: tabId }) } ripple>
                    <Tab>Starks</Tab>
                    <Tab>Lannisters</Tab>
                    <Tab>Targaryens</Tab>
                </Tabs>
                <section className="tab-content">
                    <Project activeTab={ this.state.activeTab } />
                </section>
            </div>    
        );
    }
}

export default Projects;