import {types} from '../types/types';

const initialState = [];

export default function flightsReducer(state = initialState, action) {
  switch (action.type) {
    case types.flightsList:
      return action.payload;
    default:
      return state;
  }
}
