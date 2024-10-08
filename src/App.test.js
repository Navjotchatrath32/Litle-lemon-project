// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/welcome to little lemon restaurant/i);
    expect(linkElement).toBeInTheDocument(); 
});


