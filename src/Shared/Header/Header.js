import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'
import "./Header.css"

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <img className='h-12 w-40 pr-10' src={logo} alt="" />
                    <Nav className="me-auto">
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link ' to="/address">Address</Link>
                        <Link className='nav-link' to="/SignUp">Sign Up</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;