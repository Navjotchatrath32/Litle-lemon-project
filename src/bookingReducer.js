export const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  };
  
  export const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // For now, just return the same times. You can add logic later based on the date
        return state;
      default:
        return state;
    }
  };
  