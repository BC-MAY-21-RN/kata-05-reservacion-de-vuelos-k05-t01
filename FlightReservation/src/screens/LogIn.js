/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import TextField from '../components/form/TextField';
import PasswordField from '../components/form/PasswordField';
import {logInValidationSchema} from '../schemas/logInSchema';
import {signInWithNameEmailAndPassword} from '../helpers/firebaseSignUp';

const LogIn = function ({navigation}) {
  const [loading, setLoading] = useState(false);

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
        {loading && <Text>Loading...</Text>}
        <Formik
          validationSchema={logInValidationSchema}
          initialValues={{
            email: 'juan1@example.com',
            password: 'Juan123%',
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
                <Text>
                  Don't have an account?
                </Text>
                <TouchableOpacity onPress={()=> {navigation.navigate("SignUp")}}>
                  <Text>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
    </SafeAreaView>
  );
};

export default LogIn;
