import {getNewState} from '../../helpers/frontend';
import {DISPLAY_FLIGHTS} from '../actionTypes';

const initialState = {
  flights: [],
  loading:false
};

export default (state = initialState, action) => {
  const {payload: flights} = action;
  switch (action.type) {
    case DISPLAY_FLIGHTS.request():
      return getNewState(state, {
        ...state,
        loading:true
      });
    case DISPLAY_FLIGHTS.error():
      return getNewState(state, {
        flights:[],
        loading:false
      });
    case DISPLAY_FLIGHTS.success():
      return getNewState(state, {
        flights,
        loading:false
      });

    default:
      return state;
  }
};
