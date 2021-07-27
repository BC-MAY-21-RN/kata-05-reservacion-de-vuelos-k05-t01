/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import style from '../../consts/style';

export default function TextField({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  label,
  name,
  authError,
}) {
  return (
    <>
      <View style={style.inputs_nameAndMail_container}>
        <View style={style.upTextField}>
          <Text style={style.textField_text}>{label}</Text>
          {errors[name] && touched[name] ? (
            <Text style={style.error}>{errors[name]}</Text>
          ) : (
            authError && <Text style={style.error}>{authError}</Text>
          )}
        </View>
        <TextInput
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          value={values[name]}
          style={style.input}
        />
      </View>
    </>
  );
}
