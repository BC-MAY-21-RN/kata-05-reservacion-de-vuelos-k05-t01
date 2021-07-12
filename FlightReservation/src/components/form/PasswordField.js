import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import style from './../../consts/style';

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
