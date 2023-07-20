import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const Register = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        navigate("/quest");
    }

    return(
        <div className='auth-form-container'>
            <h2>Register</h2>
        <form className='register-form'  onSubmit={handleSubmit}>
            <label htmlFor='name'>Full name</label>
            <input value={name} name='name' id='name' placeholder='full name'/>
            <label htmlFor='emai'>email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email' />
            <label htmlFor='password'>password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='**********' id='password' name='password' />
            <button type='submit'>Log In</button>
        </form>
        <button className='link-btn' onClick= {() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    );
}