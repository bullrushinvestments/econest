import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenClicked()
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchProductData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/load products/i)).toBeInTheDocument();
  });

  test('fetches product data on load', async () => {
    const mockFetchProductData = (await import('./api')).fetchProductData;
    mockFetchProductData.mockResolvedValueOnce({ products: [{ id: '1' }] });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(mockFetchProductData).toHaveBeenCalled());
  });

  test('displays loading state while fetching data', async () => {
    const mockFetchProductData = (await import('./api')).fetchProductData;
    mockFetchProductData.mockResolvedValueOnce({ products: [{ id: '1' }] });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message on fetch failure', async () => {
    const mockFetchProductData = (await import('./api')).fetchProductData;
    mockFetchProductData.mockRejectedValueOnce(new Error('Network error'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/error fetching data/i)).toBeInTheDocument());
  });

  test('allows user to add product to cart', async () => {
    const mockFetchProductData = (await import('./api')).fetchProductData;
    mockFetchProductData.mockResolvedValueOnce({ products: [{ id: '1' }] });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/add to cart/i));
    await waitFor(() => expect(screen.getByText(/added to cart/i)).toBeInTheDocument());
  });

  test('handles edge case of empty product list', async () => {
    const mockFetchProductData = (await import('./api')).fetchProductData;
    mockFetchProductData.mockResolvedValueOnce({ products: [] });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/no products available/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are in place', () => {
    const { container } = render(<CoreFunctionalityComponent />);
    expect(container).toHaveAccessibleRole('main');
    expect(screen.getByText(/add to cart/i)).toBeVisible();
    expect(screen.getByText(/add to cart/i)).toHaveAttribute('aria-label', 'Add product to cart');
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenClicked()
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchProductData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/load products/i)).toBeInTheDocument();
  });

  test('fetches product data on load', async () => {
    const mockFetchProductData = (await import('./api')).fetchProductData;
    mockFetchProductData.mockResolvedValueOnce({ products: [{ id: '1' }] });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(mockFetchProductData).toHaveBeenCalled());
  });

  test('displays loading state while fetching data', async () => {
    const mockFetchProductData = (await import('./api')).fetchProductData;
    mockFetchProductData.mockResolvedValueOnce({ products: [{ id: '1' }] });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message on fetch failure', async () => {
    const mockFetchProductData = (await import('./api')).fetchProductData;
    mockFetchProductData.mockRejectedValueOnce(new Error('Network error'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/error fetching data/i)).toBeInTheDocument());
  });

  test('allows user to add product to cart', async () => {
    const mockFetchProductData = (await import('./api')).fetchProductData;
    mockFetchProductData.mockResolvedValueOnce({ products: [{ id: '1' }] });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/add to cart/i));
    await waitFor(() => expect(screen.getByText(/added to cart/i)).toBeInTheDocument());
  });

  test('handles edge case of empty product list', async () => {
    const mockFetchProductData = (await import('./api')).fetchProductData;
    mockFetchProductData.mockResolvedValueOnce({ products: [] });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/no products available/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are in place', () => {
    const { container } = render(<CoreFunctionalityComponent />);
    expect(container).toHaveAccessibleRole('main');
    expect(screen.getByText(/add to cart/i)).toBeVisible();
    expect(screen.getByText(/add to cart/i)).toHaveAttribute('aria-label', 'Add product to cart');
  });
});