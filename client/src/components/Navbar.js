import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Tab } from 'react-bootstrap';
import Auth from '../utils/auth';


const AppNavbar = () => {
    const [showModal, setShowModal] = useState(false);

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
                                Profile
                            </Nav.Link>
                            {Auth.loggedIn() ? (
                                <>
                                    <Nav.Link as={Link} to='/userprofile' id="t-nav-link-profile">
                                        Profile
                                    </Nav.Link>
                                    <Nav.Link onClick={Auth.logout} id="t-nav-link">Log Out</Nav.Link>
                                </>
                            ) : (
                                <Nav.Link onClick={() => setShowModal(true)} id="t-nav-link">Log In/Sign Up</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='signup-modal'>
                {/* tab container to do either signup or login component */}
                <Tab.Container defaultActiveKey='login'>
                    <Modal.Header closeButton>
                        <Modal.Title id='signup-modal'>
                            <Nav variant='pills'>
                                <Nav.Item>
                                    <Nav.Link eventKey='login' id="login-modal">Log In</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='signup' id="signup-modal">Sign Up</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='login'>
                                <LoginForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                            <Tab.Pane eventKey='signup'>
                                <SignUpForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </>
    )
};
export default AppNavbar;