import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getFlightsUser} from '../redux/actions/flReservation';
import Results from '../screens/booking/Results';
export default connect(
  () => ({}),
  dispatch =>
    bindActionCreators(
      {
        getFlightsUser,
      },
      dispatch,
    ),
)(Results);
