import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: false,
    });
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: true,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });

  test('displays error message when fetching fails', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: new Error('Failed to fetch'),
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('handles user interaction with buttons', () => {
    const mockFn = jest.fn();
    render(
      <CoreFunctionalityComponent
        onButtonClick={mockFn}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('checks accessibility features', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
    expect(button).toHaveFocus();
  });

  test('renders data correctly when fetched successfully', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '123', name: 'Product' }],
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/product/i)).toBeInTheDocument());
  });

  test('handles edge cases with empty data array', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/no products available/i)).toBeInTheDocument());
  });

  test('handles edge cases with large data array', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: Array.from({ length: 100 }, (_, i) => ({ id: `${i}`, name: `Product ${i}` })),
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/product 99/i)).toBeInTheDocument());
  });

  test('handles edge cases with data containing special characters', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '123', name: '<div>Product</div>' }],
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/product/i)).toBeInTheDocument());
  });

  test('handles edge cases with null data', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/no products available/i)).toBeInTheDocument());
  });

});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: false,
    });
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: true,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });

  test('displays error message when fetching fails', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: new Error('Failed to fetch'),
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('handles user interaction with buttons', () => {
    const mockFn = jest.fn();
    render(
      <CoreFunctionalityComponent
        onButtonClick={mockFn}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('checks accessibility features', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
    expect(button).toHaveFocus();
  });

  test('renders data correctly when fetched successfully', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '123', name: 'Product' }],
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/product/i)).toBeInTheDocument());
  });

  test('handles edge cases with empty data array', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/no products available/i)).toBeInTheDocument());
  });

  test('handles edge cases with large data array', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: Array.from({ length: 100 }, (_, i) => ({ id: `${i}`, name: `Product ${i}` })),
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/product 99/i)).toBeInTheDocument());
  });

  test('handles edge cases with data containing special characters', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [{ id: '123', name: '<div>Product</div>' }],
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/product/i)).toBeInTheDocument());
  });

  test('handles edge cases with null data', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      loading: false,
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/no products available/i)).toBeInTheDocument());
  });

});