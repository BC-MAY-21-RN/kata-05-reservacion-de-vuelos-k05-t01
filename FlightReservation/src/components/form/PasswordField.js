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
        <Text>{label}</Text>
        <TextInput
          style={style.input_password_container}
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
      </View>
    </>
  );
}

const style = StyleSheet.create({
  input_password_container: {
    color: colors.white,
    paddingLeft: 20,
  },
});
