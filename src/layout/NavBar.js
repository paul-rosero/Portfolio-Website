import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
            <Navbar.Brand href="/" style={{ textDecoration: 'none', fontWeight: "bold" }}>My Portfolio Page</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="/" className="link-name" style={{ textDecoration: 'none', color: "white", fontWeight: "bold" }}>Homepage</Nav.Link>

                    <Nav.Link href="/about" className="link-name" style={{ textDecoration: 'none', color: "white", fontWeight: "bold" }}>About</Nav.Link>

                    <Nav.Link href="/resume" className="link-name" style={{ textDecoration: 'none', color: "white", fontWeight: "bold" }}>Resume</Nav.Link>
                    
                    {/* <Nav.Link href="/projects" className="link-name" style={{ textDecoration: 'none', color: "white", fontWeight: "bold" }}>Projects</Nav.Link> */}

                    <Nav.Link href="/contact" className="link-name" style={{ textDecoration: 'none', color: "white", fontWeight: "bold" }}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;