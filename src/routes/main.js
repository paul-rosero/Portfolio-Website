import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from '../components/homepage'
import About from '../components/about'

function Main() {
    return(
        <Switch>
            <Route exact path="/" component={ Homepage } />
            <Route path="/about" component={ About } />
        </Switch>
    )
    
}

export default Main