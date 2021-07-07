import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, TextInput} from 'react-native';

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
      <Text>{label}</Text>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        secureTextEntry={!showPassword}
      />
      {errors[name] && touched[name] && <Text>{errors[name]}</Text>}
      <Icon
        name={showPassword ? 'visibility' : 'visibility-off'}
        onPress={() => setShowPassword(!showPassword)}
      />
      {errors.password && touched.password && <Text>{errors.password}</Text>}
    </>
  );
}
