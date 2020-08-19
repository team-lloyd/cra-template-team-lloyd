import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { title } from './App.json';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(title);
  expect(headerElement).toBeInTheDocument();
});
