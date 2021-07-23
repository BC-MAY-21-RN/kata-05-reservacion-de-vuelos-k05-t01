/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, TextInput, View} from 'react-native';
import style from './../../consts/style';
import Span from '../../consts/i18n/en';

export default function PasswordField({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  label,
  name,
  authError,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <View style={style.input_password_container}>
        <View style={style.upTextField}>
          <Text style={style.textField_text}>{label}</Text>
          {errors[name] && touched[name] ? (
            <Text style={style.error}>{errors[name]}</Text>
          ) : (
            authError && <Text style={style.error}>{authError}</Text>
          )}
        </View>
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
      </View>
      <Text style={style.password_advice}>
        <Span text = "passwordAdvice"/>
      </Text>
    </>
  );
}
