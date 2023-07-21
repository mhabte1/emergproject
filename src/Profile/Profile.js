import React from 'react';


export const Profile = (props) => {

    return(
        <div className='profile auth-form-container'>
            <img width="100" height="200" src="https://picsum.photos/200/301"></img>
            <h2>John Doe</h2>
            <body className='Profile-Page'>
            <h2>Adventure Preferences: </h2>
            <p>I enjoy running, swimming, and most importantly mountain climbing. If you live in the Atlanta Area, contact me!</p>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
            <p><button>Contact Me</button></p>
            </body>
        </div>
    );
}
