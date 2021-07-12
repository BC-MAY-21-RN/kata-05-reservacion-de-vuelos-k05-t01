import {StyleSheet} from 'react-native';
import colors from './colors';

const style = StyleSheet.create({
  //* SignUp Style *//
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
  lower_content_text: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  btn: {
    height: 50,
    marginHorizontal: 20,
    backgroundColor: colors.orange,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
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
  password_advice: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    color: colors.white,
    alignSelf: 'center',
  },
});

export default style;
