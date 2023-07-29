// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//-----------------------------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login} from './Login/Login';
import {Register} from './Login/Register';
import {Quest} from './Questionnaire/Quest'; 
import {Home} from './Home/Home'; 
import {Profile} from './Profile/Profile.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="quest" element={<Quest />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();