import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from 'react-router-dom';
import Main from './routes/main';
import './App.css';

class App extends Component  {
    render() {
        return (  
            <div className="main-portfolio-page">
                <Layout fixedTabs>
                    <Header title={<Link style={{color: "white", textDecoration: 'none'}} to="/">My Portfolio Page</Link>} style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover', color: 'white'}}>
                        <Navigation>
                            <Link className="link-name" to="/">Homepage</Link>
                            <Link className="link-name" to="/about">About</Link>
                            <Link className="link-name" to="/resume">Resume</Link>
                            <Link className="link-name" to="/projects">Projects</Link>
                            <Link className="link-name" to="/contact">Contact Me</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link style={{color: "grey", textDecoration: 'none'}} to="/">My Portfolio Page</Link>}>
                        <Navigation >
                            <Link to="/">Homepage</Link>
                            <Link to="/about">About</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact Me</Link>
                        </Navigation>
                    </Drawer>
                    <Content 
                        style={{
                            background: '#9CECFB',  /* fallback for old browsers */
                            background: '-webkit-linear-gradient(to top, #0052D4, #65C7F7, #9CECFB)',  /* Chrome 10-25, Safari 5.1-6 */
                            background: 'linear-gradient(to top, #0052D4, #65C7F7, #9CECFB)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%'
                        }}>
                        
                        <Main/>
                       
                    </Content>
                </Layout>
            </div>
        );
    }
}    

export default App;
