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
  invalid_input_text: {
    color: colors.red,
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
    fontSize: 45,
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
  // --BOOKING SCREENS--
  // CONTAINERS
  superior_content_container: {
    display: 'flex',
    height: 200,
    width: 400,
    marginHorizontal: 6,
    flexDirection: 'column',
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    borderRadius: 15,
  },
  superior_passenegers_container: {
    display: 'flex',
    height: 230,
    marginHorizontal: 6,
    flexDirection: 'column',
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    borderRadius: 15,
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
  calendarContainer: {
    display: 'flex',
    marginTop: 30,
    height: 400,
    width: 400,
    marginHorizontal: 6,
    flexDirection: 'column',
    backgroundColor: colors.grey,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.green,
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  listPicker: {
    display: 'flex',
    marginTop: 40,
    height: 100,
    width: 400,
    marginHorizontal: 6,
    flexDirection: 'column',
    backgroundColor: colors.grey,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.green,
  },
  resultsContainer: {
    display: 'flex',
    marginTop: 40,
    height: 100,
    width: 400,
    marginHorizontal: 6,
    flexDirection: 'column',
    backgroundColor: colors.grey,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.green,
  },
  codeContainer: {
    display: 'flex',
    marginTop: 30,
    height: 200,
    width: 400,
    marginHorizontal: 6,
    flexDirection: 'column',
    backgroundColor: colors.grey,
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.green,
  },
  calendarWidget: {paddingVertical: 40},

  // TEXT
  upperLocationTitle: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 20,
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
    color: colors.green,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 50,
  },
  listText: {
    color: colors.orange,
    fontSize: 20,
  },
  itemListText: {
    color: colors.green,
    fontSize: 20,
  },
  // ICONS
  iconBookingFlight: {
    paddingVertical: 20,
    paddingLeft: 20,
    fontSize: 35,
    color: colors.white,
  },
  // BUTTONS
  btnBooking: {
    marginTop: 330,
  },
  btnCalendar: {
    marginTop: 40,
  },
  btnPasseneger: {
    marginTop: 310,
  },
  btnResults: {
    marginTop: 80,
  },

  // IMAGES
  imgFlight: {width: 400, height: 450, tintColor: colors.green, opacity: 0.4},
  imgCode: {width: 360, height: 200, tintColor: colors.dark, opacity: 0.8},

  //* Spinner Modal *//
  center_item: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '102%',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  modal_background: {
    backgroundColor: colors.green,
    borderRadius: 10,
    height: '20%',
    width: '40%',
  },
  spinner: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  modal_text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  modal_icon: {
    fontSize: 55,
    color: colors.white,
    marginBottom: 10,
  },
});

export default style;
