import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchComponent from '../components/SearchComponent';

test('calls searchBtn function with inputValue on search button click', () => {
    const setSearchMock = jest.fn();
    const setCurrentPageMock = jest.fn();
    const { getByText, getByPlaceholderText } = render(
        <SearchComponent
            setSearch={setSearchMock}
            setCurrentPage={setCurrentPageMock}
        />
    );
    const input = getByPlaceholderText('Search for characters');
    fireEvent.change(input, { target: { value: 'test' } });
    const searchButton = getByText('Search');
    fireEvent.click(searchButton);
    expect(setSearchMock).toHaveBeenCalledWith('test');
    expect(setCurrentPageMock).toHaveBeenCalledWith(1);
});
