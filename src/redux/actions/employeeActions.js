import axios from 'axios';

export const fetchEmployees = () => async (dispatch) => {
  try {
    // Make the API request (update with the correct API URL)
    const response = await axios.get('https://restful-api.dev/');

    // Dispatch action to store employee data
    dispatch({
      type: 'FETCH_EMPLOYEES',
      payload: response.data,
    });
  } catch (error) {
    // Log any errors that occur during the API call
    console.error('Error fetching employees:', error);

    // Optionally, dispatch an error action to handle failure in the UI
    // dispatch({ type: 'FETCH_EMPLOYEES_ERROR', payload: error.message });
  }
};
