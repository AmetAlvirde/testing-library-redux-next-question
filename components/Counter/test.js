import React from 'react';
import { render, fireEvent, act, cleanup } from '../../test-utils';
import Counter from './index';

describe('Counter works properly', () => {
  test('it should increment count when +1 button is clicked', async () => {
    await act(async () => {
      const { findByText } = render(<Counter />);
      const initialCount = await findByText('0');
      expect(initialCount).toBeInTheDocument();
      const incrementButton = await findByText('+');

      fireEvent.click(incrementButton);
      const incrementedCount = await findByText('1');
      expect(incrementedCount).toBeInTheDocument();

      cleanup();
    });
  });

  test.skip('it should decrement count when -1 button is clicked', async () => {
    await act(async () => {
      const { findByText } = render(<Counter />);
      const initialCount = await findByText('0');
      expect(initialCount).toBeInTheDocument();
      const decrementButton = await findByText('-');

      fireEvent.click(decrementButton);
      const decrementedCount = await findByText('-1');
      expect(decrementedCount).toBeInTheDocument();
      cleanup();
    });
  });
});
