import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FormPresentation } from './FormPresentation';

describe('TestForm', () => {
  const mockOnSubmit = jest.fn();

  it('test', () => {
    const { getByTestId } = render(<FormPresentation onSubmit={mockOnSubmit} />);

    fireEvent.change(getByTestId('firstName'), { target: { value: 'first name' } });
    fireEvent.change(getByTestId('lastName'), { target: { value: 'last name' } });
    fireEvent.submit(getByTestId('form'));

    expect(mockOnSubmit).toBeCalledWith({"firstName": "first name", "lastName": "last name"}, expect.anything(), expect.anything());
  });
});
