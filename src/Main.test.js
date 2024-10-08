// src/Main.test.js
import { render, screen, waitFor } from '@testing-library/react';
import Main from './Main';
import { fetchAPI } from './api'; 

jest.mock('./api', () => ({
    fetchAPI: jest.fn(),
}));

describe('Main Component', () => {
    beforeEach(() => {
        // Mock the API response before each test
        fetchAPI.mockResolvedValueOnce(['12:00', '12:30', '1:00']);
    });

    test('initializeTimes function should fetch available times and initialize them', async () => {
        render(<Main />);

        // Wait for the options to be available in the DOM
        const options = await waitFor(() => screen.getAllByRole('option'));

        // Ensure the options include the mock times
        expect(options).toHaveLength(3); // Verify the number of options
        expect(options[0]).toHaveTextContent('12:00');
        expect(options[1]).toHaveTextContent('12:30');
        expect(options[2]).toHaveTextContent('1:00');
    });
});


test('updateTimes function should update available times when date is changed', async () => {
    render(<Main />);

    // Simulate changing the date to a different one
    const newDate = '2024-10-05'; // Change to an appropriate date
    const selectDateInput = screen.getByLabelText(/Select Date/i);

    // Dispatch the update with the new date
    selectDateInput.value = newDate;
    selectDateInput.dispatchEvent(new Event('change', { bubbles: true }));

    // Wait for the options to be updated in the DOM
    const options = await waitFor(() => screen.getAllByRole('option'));

    // Expect the fetchAPI to have been called with the new date
    expect(fetchAPI).toHaveBeenCalledWith(newDate);

    // Ensure the options include the mock times
    expect(options).toHaveLength(3); // Verify the number of options
    expect(options[0]).toHaveTextContent('12:00');
    expect(options[1]).toHaveTextContent('12:30');
    expect(options[2]).toHaveTextContent('1:00');
});
