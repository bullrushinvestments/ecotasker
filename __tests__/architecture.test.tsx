import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DesignArchitecture from './DesignArchitecture'; // Assuming this is the component file

// Mocking external dependencies
jest.mock('./api', () => ({
  fetchDesigns: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockFetchDesigns = require('./api').fetchDesigns;

  beforeEach(() => {
    mockFetchDesigns.mockClear();
  });

  test('renders DesignArchitecture component without crashing', () => {
    render(<DesignArchitecture />);
    expect(screen.getByText(/design architecture/i)).toBeInTheDocument();
  });

  test('displays loading state while fetching designs', async () => {
    mockFetchDesigns.mockResolvedValueOnce([]);
    render(<DesignArchitecture />);
    const spinner = await screen.findByRole('status');
    expect(spinner).toBeInTheDocument();
  });

  test('renders error message when fetch fails', async () => {
    mockFetchDesigns.mockRejectedValue(new Error('Failed to load designs'));
    render(<DesignArchitecture />);
    const errorMessage = await screen.findByText(/failed to load designs/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays designs on successful fetch', async () => {
    mockFetchDesigns.mockResolvedValueOnce([
      { id: '1', name: 'Modern Design' },
      { id: '2', name: 'Vintage Design' },
    ]);
    render(<DesignArchitecture />);
    const designNames = await screen.findAllByRole('listitem');
    expect(designNames).toHaveLength(2);
  });

  test('handles user interaction with design items', async () => {
    mockFetchDesigns.mockResolvedValueOnce([
      { id: '1', name: 'Modern Design' },
      { id: '2', name: 'Vintage Design' },
    ]);
    render(<DesignArchitecture />);
    const modernDesign = await screen.findByText(/modern design/i);
    fireEvent.click(modernDesign);
    expect(mockFetchDesigns).toHaveBeenCalledTimes(2); // Assuming there's a re-fetch on click
  });

  test('ensures accessibility features are implemented', () => {
    mockFetchDesigns.mockResolvedValueOnce([
      { id: '1', name: 'Modern Design' },
      { id: '2', name: 'Vintage Design' },
    ]);
    render(<DesignArchitecture />);
    const designList = screen.getByRole('list');
    expect(designList).toHaveAttribute('aria-label', /designs/i);
  });

  test('handles edge cases such as empty designs array', async () => {
    mockFetchDesigns.mockResolvedValueOnce([]);
    render(<DesignArchitecture />);
    const noDesignMessage = await screen.findByText(/no designs available/i);
    expect(noDesignMessage).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DesignArchitecture from './DesignArchitecture'; // Assuming this is the component file

// Mocking external dependencies
jest.mock('./api', () => ({
  fetchDesigns: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockFetchDesigns = require('./api').fetchDesigns;

  beforeEach(() => {
    mockFetchDesigns.mockClear();
  });

  test('renders DesignArchitecture component without crashing', () => {
    render(<DesignArchitecture />);
    expect(screen.getByText(/design architecture/i)).toBeInTheDocument();
  });

  test('displays loading state while fetching designs', async () => {
    mockFetchDesigns.mockResolvedValueOnce([]);
    render(<DesignArchitecture />);
    const spinner = await screen.findByRole('status');
    expect(spinner).toBeInTheDocument();
  });

  test('renders error message when fetch fails', async () => {
    mockFetchDesigns.mockRejectedValue(new Error('Failed to load designs'));
    render(<DesignArchitecture />);
    const errorMessage = await screen.findByText(/failed to load designs/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays designs on successful fetch', async () => {
    mockFetchDesigns.mockResolvedValueOnce([
      { id: '1', name: 'Modern Design' },
      { id: '2', name: 'Vintage Design' },
    ]);
    render(<DesignArchitecture />);
    const designNames = await screen.findAllByRole('listitem');
    expect(designNames).toHaveLength(2);
  });

  test('handles user interaction with design items', async () => {
    mockFetchDesigns.mockResolvedValueOnce([
      { id: '1', name: 'Modern Design' },
      { id: '2', name: 'Vintage Design' },
    ]);
    render(<DesignArchitecture />);
    const modernDesign = await screen.findByText(/modern design/i);
    fireEvent.click(modernDesign);
    expect(mockFetchDesigns).toHaveBeenCalledTimes(2); // Assuming there's a re-fetch on click
  });

  test('ensures accessibility features are implemented', () => {
    mockFetchDesigns.mockResolvedValueOnce([
      { id: '1', name: 'Modern Design' },
      { id: '2', name: 'Vintage Design' },
    ]);
    render(<DesignArchitecture />);
    const designList = screen.getByRole('list');
    expect(designList).toHaveAttribute('aria-label', /designs/i);
  });

  test('handles edge cases such as empty designs array', async () => {
    mockFetchDesigns.mockResolvedValueOnce([]);
    render(<DesignArchitecture />);
    const noDesignMessage = await screen.findByText(/no designs available/i);
    expect(noDesignMessage).toBeInTheDocument();
  });
});