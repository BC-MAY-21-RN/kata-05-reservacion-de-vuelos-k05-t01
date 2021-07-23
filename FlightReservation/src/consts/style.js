import {StyleSheet} from 'react-native';
import colors from './colors';

const style = StyleSheet.create({
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
  input_password_container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 10,
  },
  textField_text: {
    color: colors.white,
    fontSize: 20,
    paddingLeft: 30,
    alignSelf: 'flex-start',
  },
  checkBox:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    lineHeight: 10,
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
  errorMessage:{
    color: colors.red,
    fontSize: 18,
  },
  errorTextBox:{
    color: colors.red,
  },
  inputs_nameAndMail_container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 18,
  },
  input: {
    paddingLeft: 20,
    backgroundColor: colors.light_green,
    borderColor: colors.white,
    borderWidth: 0.5,
    borderRadius: 5,
    color: colors.white,
    fontSize: 18,
    height: 50,
    width: 350,
  },
  error: {
    color: colors.red,
    fontSize: 16,
    fontWeight: '700',
  },
  upTextField: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
});
export default style;
