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
                </Container>
            </Navbar>
        </>
    )
};
export default AppNavbar;