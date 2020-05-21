import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('cardsking', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to Cardsking!/i);
  expect(linkElement).toBeInTheDocument();
});
