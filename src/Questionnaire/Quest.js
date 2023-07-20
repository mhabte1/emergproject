import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Quest = (props) => {
    const navigate = useNavigate();
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('');
    const [q5, setQ5] = useState('');

    console.log('Quest');

    const handleSubmit = (e) => {
        e.preventDefault();

        //save in local storage
        localStorage.setItem('q1-lookingOutdoorPartners', q1);
        localStorage.setItem('q2-typeOfAdventure', q2);
        localStorage.setItem('q3-skillLevel', q3);
        localStorage.setItem('q4-preference', q4);
        localStorage.setItem('q5-attitude', q5);

        console.log('Retrieving from the local storage');
        console.log(localStorage.getItem('q1-lookingOutdoorPartners'));
        console.log(localStorage.getItem('q2-typeOfAdventure'));
        console.log(localStorage.getItem('q3-skillLevel'));
        console.log(localStorage.getItem('q4-preference'));
        console.log(localStorage.getItem('q5-attitude'));

        navigate("/home")
    }
    
    const launchHome = (e) => {

        console.log('launchHome');
        navigate("/home")
    }

     return(
        <div className='quest auth-form-container'>
            <h2>Questionnaire</h2>
        <form className='quest-form' onSubmit={handleSubmit}>
            <label htmlFor='q1'>Are you looking for Outdoor Partners/Adventurers?</label>
            <input value={q1} onChange={(e) => setQ1(e.target.value)} type='text'  id='q1' name='q1' />
            <label htmlFor='q2'>What type of Adventure you like?</label>
            <input value={q2} onChange={(e) => setQ2(e.target.value)} type='text'  id='q2' name='q2' />
            <label htmlFor='q3'>What is your Skill level?</label>
            <input value={q3} onChange={(e) => setQ3(e.target.value)} type='text'  id='q3' name='q3' />
            <label htmlFor='q4'>Your preferences?</label>
            <input value={q4} onChange={(e) => setQ4(e.target.value)} type='text'  id='q4' name='q4' />
            <label htmlFor='q5'>Your attitude to outdoor activities?</label>
            <input value={q5} onChange={(e) => setQ5(e.target.value)} type='text'  id='q5' name='q5' />
            <button type='submit'>Save</button>
        </form>
        <button className='link-btn' onClick={ () => launchHome()}>Home</button>
        </div>
    );
}