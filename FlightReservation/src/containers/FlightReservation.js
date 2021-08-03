import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getFlightsUser} from '../redux/actions/flReservation';
import FlightReservation from '../screens/FlightReservation';

export default connect(
  ({flightList}) => ({flightList}),
  dispatch => bindActionCreators({getFlightsUser}, dispatch),
)(FlightReservation);
