import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from '../components/homepage';
import About from '../components/about';
import Projects from '../components/projects';
import Resume from '../components/resume';
import ContactMe from '../components/contactMe';

function Main() {
    return(
        <Switch>
            <Route exact path="/" component={ Homepage } />
            <Route path="/about" component={ About } />
            {/* <Route path="/projects" component={ Projects } /> */}
            <Route path="/resume" component={ Resume } />
            <Route path="/contact" component={ ContactMe } />
        </Switch>
    )
    
}

export default Main