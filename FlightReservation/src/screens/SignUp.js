/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {Formik} from 'formik';
import TextField from '../components/form/TextField';
import PasswordField from '../components/form/PasswordField';
import {signUpValidationSchema} from '../schemas/signUpSchema';
import {signInWithNameEmailAndPassword} from '../helpers/firebaseSignIn';
import CheckBoxField from '../components/form/CheckBoxField';

const SignUp = function () {
  const [loading, setLoading] = useState(false);

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
          {formProps => (
            <View>
              <Text>Sign up</Text>
              <View>
                <TextField {...formProps} label="Name" name="name" />
              </View>
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
                <CheckBoxField
                  {...formProps}
                  label="I agree with the Terms and Privacy Policy. *"
                  name="agreeTerms"
                />
              </View>
              <View>
                <CheckBoxField
                  {...formProps}
                  label="Subscribe for select product updates."
                  name="subscribeForProducts"
                />
              </View>
              <View>
                <Button
                  rounded
                  disabled={!formProps.isValid || loading}
                  onPress={formProps.handleSubmit}
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
