import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Project from './projectsComponents/project';
class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    render() {
        return (
            <div>
                <h1>Under Construction, come back soon to check it out.</h1>
                {/* <Tabs className="projects-tabs" activeTab={ this.state.activeTab } onChange={ (tabId) => this.setState({ activeTab: tabId }) } ripple>
                    <Tab>Starks</Tab>
                    <Tab>Lannisters</Tab>
                    <Tab>Targaryens</Tab>
                </Tabs>
                <section className="tab-content">
                    <Grid className="content-grid">
                        <Cell col={ 12 }>
                            <Project activeTab={ this.state.activeTab } />
                        </Cell>
                    </Grid>
                </section> */}
            </div>    
        );
    }
}

export default Projects;