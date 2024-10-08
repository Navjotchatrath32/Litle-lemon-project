import React, { useReducer, useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI } from './api';  // Ensure it's imported correctly

const initialState = {
    selectedDate: new Date().toISOString().slice(0, 10), // Set default date to today's date
};

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return {
                ...state,
                selectedDate: action.payload,  // Update selected date
            };
        default:
            return state;
    }
}

const Main = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [availableTimes, setAvailableTimes] = useState([]);

    // Fetch available times whenever the selected date changes
    useEffect(() => {
        const fetchAvailableTimes = async () => {
            try {
                const times = await fetchAPI(state.selectedDate);  // Fetch times for the selected date
                setAvailableTimes(times);
            } catch (error) {
                console.error("Error fetching available times:", error);
            }
        };

        fetchAvailableTimes();
    }, [state.selectedDate]);  // Re-run fetching when the selected date changes

    return (
        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
        />
    );
};

export default Main;
