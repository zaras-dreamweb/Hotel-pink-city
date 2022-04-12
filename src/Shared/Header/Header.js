import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.jpg'
import "./Header.css"

const Header = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, []);

    const handleLogOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <img className='h-12 w-40 pr-10' src={logo} alt="" />
                    <Nav className="me-auto">
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link ' to="/address">Address</Link>
                        {
                            user.uid
                                ?
                                <button onClick={handleLogOut} className='text-white'>LogOut</button>
                                :
                                <Link className='nav-link' to="/login">Login</Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;