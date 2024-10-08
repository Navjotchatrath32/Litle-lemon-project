import './BookingForm.css';
import React, { useState } from 'react';

export const fetchAPI = async (date) => {
    const response = await fetch(`https://api.example.com/available-times?date=${date}`);
    const data = await response.json();
    return data.availableTimes || []; // Adjust based on your API response structure
};


export const submitAPI = async (formData) => {
    const response = await fetch('https://api.example.com/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    return response.ok; // Returns true if the submission was successful
};

const BookingForm = ({ availableTimes, dispatch }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
    });
    const [formValid, setFormValid] = useState(false); // State for form validity

    const validateForm = () => {
        const { date, time, guests } = formData;
        const isValid = date && time && guests >= 1; // Ensure all fields are filled correctly
        setFormValid(isValid);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateForm(); // Check form validity after every change
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setFormData({ ...formData, date: selectedDate });
        
        if (typeof dispatch === 'function') {
            dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
        }
        validateForm(); // Check form validity when the date changes
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await submitAPI(formData);
        if (success) {
            alert('Booking confirmed!');
        } else {
            alert('There was an error with your booking.');
        }
    };

    return (

        <form style={{ display: 'grid', maxWidth: '300px', gap: '20px' }} onSubmit={handleSubmit}>
                    <fieldset>
                    <legend>Make a Reservation</legend>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="date"
                value={formData.date}
                onChange={handleDateChange}
                required
                min={new Date().toISOString().split("T")[0]} // Prevent past date selection
            />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="time" value={formData.time} onChange={handleChange} required>
                {availableTimes && availableTimes.length > 0 ? (
                    availableTimes.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))
                ) : (
                    <option disabled>No available times</option>
                )}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                required
                value={formData.guests}
                onChange={handleChange}
            />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation"aria-label="Make Your Reservation"  disabled={!formValid} />
            </fieldset>
        </form>
    );
};

export default BookingForm;
