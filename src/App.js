import React, { Component } from 'react';
import Main from './routes/main';
import './App.css';
import NavBar from './layout/NavBar';

class App extends Component  {
    render() {
        return (  
            <div>
                <NavBar/>
                <div className="background-app">
                    <Main />
                </div>
            </div>
        );
    }
}    

export default App;

                    