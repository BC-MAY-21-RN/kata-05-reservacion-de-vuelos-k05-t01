import {StyleSheet} from 'react-native';
import colors from './colors';

const style = StyleSheet.create({
  //* SignUp Style *//
  upper_background: {
    backgroundColor: colors.green,
  },

  textFieldView: {
    backgroundColor: colors.green,
  },
  textFieldBG: {
    backgroundColor: colors.orange,
  },
  title: {
    fontSize: 28,
    color: colors.white,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 30,
  },
  inferior_content_container: {
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
  },
  termsView: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
  },
  lower_content_text: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  btn: {
    height: 50,
    marginHorizontal: 20,
    backgroundColor: colors.orange,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnForm: {
    fontSize: 18,
    color: colors.white,
  },
  buttons_container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  button_text: {
    color: colors.white,
    fontSize: 18,
  },
  alreadyTxt: {
    paddingTop: 10,
  },
  account_link: {
    color: colors.blue,
  },

  //* PasswordFields Style *//
  input_password_container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 10,
  },
  textField_text: {
    color: colors.white,
    fontSize: 20,
    paddingLeft: 20,
    alignSelf: 'flex-start',
  },
  password_inputField_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.light_green,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.white,
    height: 50,
    width: 350,
  },
  password_text: {
    paddingLeft: 20,
    color: colors.white,
    fontSize: 20,
    height: 50,
  },
  icon: {
    fontSize: 25,
    color: colors.white,
    paddingRight: 20,
  },
  iconFlight: {
    fontSize: 28,
    marginHorizontal: 10,
    color: colors.orange,
  },
  iconBooking: {
    fontSize: 50,
    color: colors.orange,
    padding: 10,
  },
  password_advice: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    color: colors.white,
    alignSelf: 'center',
  },
  // Booking views style
  superior_content_container: {
    display: 'flex',
    height: 150,
    flexDirection: 'column',
    backgroundColor: colors.green,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-around',
  },
  superior_passenegers_container: {
    display: 'flex',
    height: 240,
    flexDirection: 'column',
    backgroundColor: colors.green,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-around',
  },
  bookingTitleContainer: {marginTop: 5, display: 'flex', flexDirection: 'row'},
  upperLocationContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: colors.light_green,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  upperLocationTitle: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 20,
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  dateTitle: {
    fontSize: 16,
    color: colors.white,
  },
  bookingTitle: {
    fontSize: 28,
    color: colors.white,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 50,
    paddingBottom: 30,
  },
  resultsTitle: {
    fontSize: 28,
    color: colors.orange,
    fontWeight: 'bold',
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 50,
    paddingBottom: 30,
  },
  listText: {
    color: colors.orange,
    fontSize: 20,
  },
  itemListText: {
    color: colors.orange,
    fontSize: 18,
  },
  iconBookingFlight: {
    paddingVertical: 20,
    paddingLeft: 20,
    fontSize: 35,
    color: colors.white,
  },
  calendarContainer: {
    marginTop: 40,
  },
  btnBooking: {
    marginTop: 440,
  },
  btnCalendar: {
    marginTop: 160,
  },
  btnPasseneger: {
    marginTop: 360,
  },
  btnResults: {
    marginTop: 280,
  },
});

export default style;
