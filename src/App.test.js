import React from "react";
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import {useNavigate} from "react-router-dom";

import App from './App';
import {Register} from './Login/Register';
import {Quest} from './Questionnaire/Quest'; 
import {Home} from './Home/Home'; 
import {Profile} from './Profile/Profile';

describe("useNavigate() tests ", () => {
  it("Renders the Register component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    render(
      <BrowserRouter>
     <App />
    </BrowserRouter>);
    const button = screen.getByText(/Register here/i);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});

test('renders Login Page', () => {
  render(
    <BrowserRouter>
   <App />
  </BrowserRouter>);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Login with Register link', () => {
  render(
    <BrowserRouter>
   <App />
  </BrowserRouter>);
  const linkElement = screen.getByText(/Register here/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Login with Email field', () => {
  render(
    <BrowserRouter>
   <App />
  </BrowserRouter>);
  const linkElement = screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Login with Password link', () => {
  render(
    <BrowserRouter>
   <App />
  </BrowserRouter>);
  const linkElement = screen.getByText(/Password/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Register', () => {
  render(
    <BrowserRouter>
   <App />
  </BrowserRouter>);
  const button = screen.getByText(/Register here/i);
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  const linkElement = screen.getByText(/Full/i)
  expect(linkElement).toBeInTheDocument();
});

test('renders Questionnaire', () => {
  render(
    <BrowserRouter>
   <Quest />
  </BrowserRouter>);
  const linkElement = screen.getByText(/Save/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Profile page', () => {
  render(
    <BrowserRouter>
   <Profile />
  </BrowserRouter>);
  const linkElement = screen.getByText(/Username:/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Home page', () => {
  render(
    <BrowserRouter>
   <Home />
  </BrowserRouter>);
  const linkElement = screen.getByText(/Swipe Left/i);
  expect(linkElement).toBeInTheDocument();
});

