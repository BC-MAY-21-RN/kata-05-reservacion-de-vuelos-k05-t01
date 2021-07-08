/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {Formik} from 'formik';
import TextField from '../components/form/TextField';
import PasswordField from '../components/form/PasswordField';
import {signUpValidationSchema} from '../schemas/signUpSchema';
import {signInWithNameEmailAndPassword} from '../helpers/firebaseSignUp';

const LogIn = function () {
  const [loading, setLoading] = useState(false);
//   const [emailInUseError, setEmailInUseError] = useState(false);

  const handleSignIn = values => {
    const {email, password} = values;
    setLoading(true);
    signInWithNameEmailAndPassword(email, password)
      .then(() => setEmailInUseError(false))
      .catch(() => setEmailInUseError(true))
      .finally(() => setLoading(false));
  };

  return (
    <SafeAreaView>
      <Provider store={store}>
        {loading && <Text>Loading...</Text>}
        {/* {emailInUseError && <Text>Email in use. Use a diferent email</Text>} */}
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
          {formProps => (
            <View>
              <Text>Log in</Text>
              <View>
                <TextField {...formProps} label="Email" name="email" />
              </View>
              <View>
                <PasswordField
                  {...formProps}
                  title="Password"
                  name="password"
                />
              </View>
              <View>
                <Button
                  rounded
                  disabled={!formProps.isValid || loading}
                  onPress={formProps.handleSubmit}
                  title="Log in"
                />
                <Text>or</Text>
                <Button title="Log in with Google" />
                <Text>Don't have an account?</Text>
                <Text>Sign up</Text>
              </View>
            </View>
          )}
        </Formik>
      </Provider>
    </SafeAreaView>
  );
};

export default LogIn;
