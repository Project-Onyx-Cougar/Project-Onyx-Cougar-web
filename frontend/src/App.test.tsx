import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The Main app', () => {

  it('should render the Orders link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });

  it('should render the Payment link', () => {
    render(<App />);
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  it('should render the Home header', () => {
    render(<App />);
    // expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

});
