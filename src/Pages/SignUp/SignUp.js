import React, { useState } from 'react';
import "./SignUp.css"
import './SignUp.css'
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Form } from 'react-bootstrap';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);


    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
        setEmail('');
    };
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
        setPassword('');
    };
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
        setConfirmPassword('');
    };


    const handleCreateUser = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <Form onSubmit={handleCreateUser}>
                <h2 className='form-title'>Sign Up</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" />
                </Form.Group>
                <p style={{ color: "red" }} >{error}</p>

                <input className='form-submit' type="submit" value="Sign Up" />
                <p className='text-center' >
                    Already have an account? <Link to='/login' className='form-link'> Login</Link>
                </p>
                <div className='flex items-center my-3'>
                    <hr className='border-gray-400 h-px w-full mr-2' />
                    <p>or</p>
                    <hr className='border-gray-400 h-px w-full ml-2' />
                </div>
                <button className='google-btn'>Continue with Google</button>
            </Form>
        </div>
    );
};

export default SignUp;