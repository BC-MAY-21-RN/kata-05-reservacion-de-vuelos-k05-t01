import {getFlights} from '../../helpers/flightsController';
import {DISPLAY_FLIGHTS} from '../actionTypes';
import {request, success, error} from '../baseActions.js';

export const getFlightsUser = () => async dispatch => {
  const action = DISPLAY_FLIGHTS;

  dispatch(request(action));

  try {
    const response = await getFlights();
    if (response) {
      return dispatch(success(action, response));
    }
    return dispatch(error(action, response));
  } catch (error) {
    return dispatch(error(action));
  }
};
