import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import flightsReducer from '../reducers/flightsReducer';

const reducers = combineReducers({
  flights: flightsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
