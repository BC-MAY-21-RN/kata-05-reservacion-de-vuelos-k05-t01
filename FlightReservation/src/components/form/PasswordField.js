import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import colors from '../../consts/colors';

export default function PasswordField({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  label,
  name,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <View style={style.input_password_container}>
        <Text style={style.textField_text}>Password</Text>
        <View style={style.password_inputField_container}>
          <TextInput
            onChangeText={handleChange(name)}
            onBlur={handleBlur(name)}
            value={values[name]}
            secureTextEntry={!showPassword}
            style={style.password_text}
          />
          <Icon
            style={style.icon}
            name={showPassword ? 'visibility' : 'visibility-off'}
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>

        {errors[name] && touched[name] && <Text>{errors[name]}</Text>}

        {errors.password && touched.password && <Text>{errors.password}</Text>}
      </View>
      <Text style={style.password_advice}>
        Use 8 or more characters with a mix of letter, numbers and symbols
      </Text>
    </>
  );
}

const style = StyleSheet.create({
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
