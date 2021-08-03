import {combineReducers} from 'redux';
import flightList from './flights';
const rootReducer = combineReducers({
  flightList,
});

export default rootReducer;
