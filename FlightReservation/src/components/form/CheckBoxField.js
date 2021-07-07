import React from 'react';
import {Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

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
      <CheckBox
        disabled={false}
        onValueChange={newValue => setFieldValue(name, newValue)}
        value={values[name]}
      />
      {errors[name] && touched[name] && <Text>{errors[name]}</Text>}
      <Text>{label}</Text>
    </>
  );
}
