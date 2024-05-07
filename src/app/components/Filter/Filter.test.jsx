import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Filter } from './Filter';

describe('Filter', () => {
  test('renders filter component', () => {
    render(<Filter />);
    const filterElement = screen.getByTestId('filter-component');
    expect(filterElement).toBeInTheDocument();
  });

  test('handles property type change', () => {
    render(<Filter />);
    const propertyTypeSelect = screen.getByLabelText('Tip proprietate');
    fireEvent.change(propertyTypeSelect, { target: { value: '1' } });
    expect(propertyTypeSelect.value).toBe('1');
  });

  test('handles transaction type change', () => {
    render(<Filter />);
    const transactionTypeSelect = screen.getByLabelText('Tip tranzactie');
    fireEvent.change(transactionTypeSelect, { target: { value: '1' } });
    expect(transactionTypeSelect.value).toBe('1');
  });

  test('handles zone change', () => {
    render(<Filter />);
    const zoneInput = screen.getByPlaceholderText('Zona');
    fireEvent.change(zoneInput, { target: { value: 'Example Zone' } });
    expect(zoneInput.value).toBe('Example Zone');
  });

  test('handles min price change', () => {
    render(<Filter />);
    const minPriceInput = screen.getByPlaceholderText('Pret minim');
    fireEvent.change(minPriceInput, { target: { value: '100000' } });
    expect(minPriceInput.value).toBe('100000');
  });

  test('handles max price change', () => {
    render(<Filter />);
    const maxPriceInput = screen.getByPlaceholderText('Pret maxim');
    fireEvent.change(maxPriceInput, { target: { value: '200000' } });
    expect(maxPriceInput.value).toBe('200000');
  });

  test('handles number of rooms change', () => {
    render(<Filter />);
    const roomInput = screen.getByLabelText('Numar de camere');
    fireEvent.click(roomInput);
    expect(roomInput.checked).toBe(true);
  });

  test('handles apply filter button click', () => {
    render(<Filter />);
    const applyFilterButton = screen.getByText('Aplica filtre');
    fireEvent.click(applyFilterButton);
    // Add your assertions here
  });

  test('handles reset filters button click', () => {
    render(<Filter />);
    const resetFiltersButton = screen.getByText('Sterge filtre');
    fireEvent.click(resetFiltersButton);
    // Add your assertions here
  });
});