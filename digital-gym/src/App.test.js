import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('should text addition',() => {
  const {getByText} = render(<App />);
  const linkElement = getByText(/Welcome to Digital Gym/)
  expect(linkElement).toBeInTheDocument();
})


