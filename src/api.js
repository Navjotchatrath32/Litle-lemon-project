export const fetchAPI = async (date) => {
    // Replace this with your actual API logic
    const response = await fetch(`your_api_endpoint?date=${date}`);
    const data = await response.json();
    return data.availableTimes || []; // Adjust based on your API response structure
};
export const submitAPI = async (formData) => {
    try {
        const response = await fetch('your_api_endpoint/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the appropriate content type
            },
            body: JSON.stringify(formData), // Convert formData to JSON
        });

        if (!response.ok) {
            throw new Error('Network response was not ok'); // Handle network errors
        }

        const result = await response.json(); // Adjust based on your API response structure
        return result.success; // Assume your API returns { success: true } on successful submission
    } catch (error) {
        console.error('Error submitting the booking:', error);
        return false; // Return false if there was an error
    }
};
