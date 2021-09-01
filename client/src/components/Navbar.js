import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Tab } from 'react-bootstrap';


const AppNavbar = () => {

    return (
        <>
            <Navbar expand='lg' className='t-nav-bar'>
                <Container fluid>
                    <Navbar.Brand as={Link} to='/' id='t-nav-title'>
                        Chess Tracker
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <Nav className='ml-auto' id='t-navbar-item'>
                            <Nav.Link as={Link} to='/profile' id='t-nav-link-profile'>
                                
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};
export default AppNavbar;