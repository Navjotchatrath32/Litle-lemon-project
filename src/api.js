// Function to simulate fetching available booking times based on the selected date
export const fetchAPI = async (date) => {
    // Mock available times for demonstration purposes
    const availableTimes = {
        "2024-10-07": ["12:00", "13:00", "14:00", "18:00", "19:00"],
        "2024-10-08": ["11:00", "12:30", "15:00", "17:00"],
        "2024-10-09": ["10:00", "11:00", "14:00", "16:00"],
    };

    // Simulate a delay to mimic an actual API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(availableTimes[date] || []); // Return available times or empty array
        }, 1000);  // Simulates a 1-second delay for fetching
    });
};


// Function to simulate submitting booking details
export const submitAPI = async (formData) => {
    // For demonstration purposes, just log the submitted form data
    console.log("Submitting form data:", formData);

    // Simulate a successful form submission
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);  // Simulate successful submission
        }, 1000);  // Simulate a 1-second delay
    });
};

