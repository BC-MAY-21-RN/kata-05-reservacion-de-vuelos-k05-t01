/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import style from './../../consts/style';

export default function CheckBoxField({
  setFieldValue,
  values,
  errors,
  touched,
  label,
  name,
}) {
  return (
    <>
    <View style={style.upTextField}>
      <CheckBox
        disabled={false}
        onValueChange={newValue => setFieldValue(name, newValue)}
        value={values[name]}
      />
      <View style = {style.checkBox}>
        <Text style={style.lower_content_text}>{label}</Text>
        {errors[name] && touched[name] && <Text style={style.errorTextBox}>{errors[name]}</Text>}
      </View>
    </View>
    </>
  );
}
