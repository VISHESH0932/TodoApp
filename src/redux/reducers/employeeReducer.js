const initialState = [];

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EMPLOYEES':
      return action.payload; // Return the list of employees fetched from the API
    default:
      return state;
  }
};
