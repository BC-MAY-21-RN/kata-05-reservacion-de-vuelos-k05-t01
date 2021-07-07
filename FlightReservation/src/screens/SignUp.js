/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {Formik} from 'formik';
import TextField from '../components/form/TextField';
import PasswordField from '../components/form/PasswordField';
import {signUpValidationSchema} from '../schemas/signUpSchema';
import {signInWithNameEmailAndPassword} from '../helpers/firebaseSignIn';
import CheckBoxField from '../components/form/CheckBoxField';
import colors from '../consts/colors';
import {bool} from 'yup';

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
              <View style={{backgroundColor: colors.green}}>
                <Text style={style.title}>Sign Up</Text>
                <View style={style.textField__text}>
                  <TextField
                    {...formProps}
                    label="Name"
                    name="name"
                    style={{backgroundColor: colors.orange}}
                  />
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

const style = StyleSheet.create({
  title: {
    // backgroundColor: colors.green,
    fontSize: 28,
    color: colors.white,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 50,
  },
});

export default SignUp;
