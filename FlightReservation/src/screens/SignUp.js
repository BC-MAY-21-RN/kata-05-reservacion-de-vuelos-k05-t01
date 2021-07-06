/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, TextInput, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {Formik} from 'formik';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as yup from 'yup';
import {signInWithNameEmailAndPassword} from '../helpers/firebaseSignIn';

const SignUp = function () {
  const [showPassword, setShowPassword] = useState(false);
  const [subscribeForProducts, setSubscribeForProducts] = useState(false);
  const [loading, setLoading] = useState(false);

  const signUpValidationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min}`)
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      ),
    agreeTerms: yup
      .bool()
      .oneOf([true], 'Accept Terms & Conditions is required'),
  });

  const handleSignIn = values => {
    const {name, email, password} = values;
    setLoading(true);
    signInWithNameEmailAndPassword(name, email, password)
      .then(console.log)
      .catch(console.log)
      .finally(() => setLoading(false));
  };

  return (
    <SafeAreaView>
      <Provider store={store}>
        {loading && <Text>Loading...</Text>}
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            name: 'Juan',
            email: 'juan1@example.com',
            password: 'Juan123%',
            agreeTerms: true,
          }}
          validateOnMount={true}
          onSubmit={values => handleSignIn(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            touched,
            errors,
            isValid,
          }) => (
            <View>
              <Text>Sign up</Text>
              <View>
                <Text>Name</Text>
                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {errors.name && touched.name && <Text>{errors.name}</Text>}
              </View>
              <View>
                <Text>Email</Text>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email && <Text>{errors.email}</Text>}
              </View>
              <View>
                <Text>Password</Text>
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={!showPassword}
                />
                <Icon
                  name={showPassword ? 'visibility' : 'visibility-off'}
                  onPress={() => setShowPassword(!showPassword)}
                />
                {errors.password && touched.password && (
                  <Text>{errors.password}</Text>
                )}
              </View>
              <View>
                <CheckBox
                  disabled={false}
                  onValueChange={newValue =>
                    setFieldValue('agreeTerms', newValue)
                  }
                  value={values.agreeTerms}
                />
                {errors.agreeTerms && touched.agreeTerms && (
                  <Text>{errors.agreeTerms}</Text>
                )}
                <Text>I agree with the Terms and Privacy Policy.</Text>
                <Text>*</Text>
                <CheckBox
                  disabled={false}
                  onValueChange={newValue => setSubscribeForProducts(newValue)}
                  value={subscribeForProducts}
                />
                <Text>Subscribe for select product updates.</Text>
              </View>
              <View>
                <Button
                  rounded
                  disabled={!isValid || loading}
                  onPress={handleSubmit}
                  title="Sign up"
                />
                <Text>or</Text>
                <Button title="Sign up with Google" />
                <Text>already have an account?</Text>
                <Text>Log in</Text>
              </View>
            </View>
          )}
        </Formik>
      </Provider>
    </SafeAreaView>
  );
};

export default SignUp;
