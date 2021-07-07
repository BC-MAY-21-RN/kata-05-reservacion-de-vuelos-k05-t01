import React from 'react';
import {Text, TextInput} from 'react-native';

export default function TextField({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  label,
  name,
}) {
  return (
    <>
      <Text>{label}</Text>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
      />
      {errors[name] && touched[name] && <Text>{errors[name]}</Text>}
    </>
  );
}
