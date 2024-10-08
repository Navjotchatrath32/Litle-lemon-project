import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm'; // Update the import path based on your folder structure

describe('BookingForm Component', () => {

    // Test for rendering form elements and static text
    test('renders BookingForm labels and inputs', () => {
        render(<BookingForm availableTimes={[]} dispatch={jest.fn()} />);

        // Check if labels are rendered
        expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();

        // Check if submit button is rendered
        const submitButton = screen.getByDisplayValue(/Make Your Reservation/i);
        expect(submitButton).toBeInTheDocument();
    });

    // Test for rendering availableTimes in the select dropdown
    test('renders available times in the time select dropdown', () => {
        const availableTimes = ['17:00', '18:00', '19:00'];
        render(<BookingForm availableTimes={availableTimes} dispatch={jest.fn()} />);

        // Check if the options are rendered
        availableTimes.forEach(time => {
            const option = screen.getByText(time);
            expect(option).toBeInTheDocument();
        });
    });

    // Test when there are no available times
    test('renders fallback when no available times are provided', () => {
        render(<BookingForm availableTimes={[]} dispatch={jest.fn()} />);

        // Check for the fallback option
        const fallbackOption = screen.getByText(/No available times/i);
        expect(fallbackOption).toBeInTheDocument();
    });

    // Test for date change dispatch
    test('dispatches the correct action when date is changed', () => {
        const mockDispatch = jest.fn();
        render(<BookingForm availableTimes={[]} dispatch={mockDispatch} />);

        // Simulate changing the date input
        const dateInput = screen.getByLabelText(/Choose date/i);
        fireEvent.change(dateInput, { target: { value: '2024-09-18' } });

        // Check if dispatch was called with the correct action
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'UPDATE_TIMES',
            payload: '2024-09-18',
        });
    });

});
import React from 'react';
import { render } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
    it('should have the correct attributes for date input', () => {
        const { getByLabelText } = render(<BookingForm availableTimes={[]} />);
        const dateInput = getByLabelText(/choose date/i);
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('name', 'date');
        expect(dateInput).toBeRequired();
    });

    it('should have the correct attributes for time select', () => {
        const { getByLabelText } = render(<BookingForm availableTimes={['12:00', '13:00']} />);
        const timeSelect = getByLabelText(/choose time/i);
        expect(timeSelect).toHaveAttribute('name', 'time');
    });

    it('should have the correct attributes for guests input', () => {
        const { getByLabelText } = render(<BookingForm availableTimes={[]} />);
        const guestsInput = getByLabelText(/number of guests/i);
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toBeRequired();
    });

    it('should have the correct attributes for occasion select', () => {
        const { getByLabelText } = render(<BookingForm availableTimes={[]} />);
        const occasionSelect = getByLabelText(/occasion/i);
        expect(occasionSelect).toHaveAttribute('name', 'occasion');
    });

    it('should have a submit button', () => {
        const { getByText } = render(<BookingForm availableTimes={[]} />);
        const submitButton = getByText(/make your reservation/i);
        expect(submitButton).toHaveAttribute('type', 'submit');
    });
});
