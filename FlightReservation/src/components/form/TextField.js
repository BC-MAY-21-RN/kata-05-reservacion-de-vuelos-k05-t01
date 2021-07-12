import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../../consts/colors';

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
      <View style={style.inputs_nameAndMail_container}>
        <Text style={style.textField_text}>{label}</Text>
        <TextInput
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          value={values[name]}
          style={style.input}
        />
        {errors[name] && touched[name] && <Text>{errors[name]}</Text>}
      </View>
    </>
  );
}

const style = StyleSheet.create({
  inputs_nameAndMail_container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 18,
  },
  textField_text: {
    color: colors.white,
    fontSize: 20,
    paddingLeft: 20,
    alignSelf: 'flex-start',
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
});
