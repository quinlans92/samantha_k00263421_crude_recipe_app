import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from "react";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-4 nav-section">
                    <img src="/images/logo.png" alt="Logo" style={{ padding: '10px', height: '200px', width: 'auto', marginTop: '40px' }} />
                </div>
                <Navbar expand="md">
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto" style={{ marginRight: '20px', marginLeft: '20px' }}>
                            <Nav.Link className="navHov" style={{ fontSize: '25px' }}>
                                <Link style={{ textTransform: 'uppercase', textDecoration: 'none', color: 'green' }} to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link className="navHov" style={{ fontSize: '25px' }}>
                                <Link style={{ textTransform: 'uppercase', textDecoration: 'none', color: 'green' }} to="/">Recipes</Link>
                            </Nav.Link>
                            <Nav.Link className="navHov" style={{ fontSize: '25px' }}>
                                <Link style={{ textTransform: 'uppercase', textDecoration: 'none', color: 'green' }} to="/About">About</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>

    );



}
export default NavBar;