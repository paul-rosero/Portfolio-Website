import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from 'react-router-dom';
import Main from './routes/main';
import './App.css';

class App extends Component  {
  render() {
    return (  
        <div className="main-portfolio-page">
        <Layout>
            <Header title="My Portfolio Page" style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover', color: 'white'}}>
                <Navigation>
                    <Link className="link-name" to="/">Homepage</Link>
                    <Link className="link-name" to="/about">About</Link>
                    <Link className="link-name" to="/resume">Resume</Link>
                    <Link className="link-name" to="/projects">Projects</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation >
                    <Link to="/">Homepage</Link>
                    <Link to="/about">About</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content">
                     <Main/>
                </div>
            </Content>
        </Layout>
</div>
    );
  }
}    

export default App;
