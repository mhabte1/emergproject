import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import {useNavigate} from "react-router-dom";

import App from './App';
import {Register} from './Login/Register';

describe("useNavigate() tests ", () => {
  xit("Renders the Register component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    render(<App />);
    const button = screen.getByText(/Register here/i);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});

test('renders Login Page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Login with Register link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Register here/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Login with Email field', () => {
  render(<App />);
  const linkElement = screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Login with Password link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Password/i);
  expect(linkElement).toBeInTheDocument();
});

xtest('renders Register', () => {
  render(<App />);
  const button = screen.getByText(/Register here/i);
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});

// test('renders Register screen', () => {
//   render(<Register />);
//   const linkElement = screen.getByText(/Register/i);
//   const registerButton  = screen.getByRole('button',{name: "Don't have an account? Register here"})
//   fireEvent.click(registerButton);
//   expect(screen.getByText('Register')).toBeInTheDocument()
// });
