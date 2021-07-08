/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from 'react-native';
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
              <View style={style.inferior_content_container}>
                <View style={{flexDirection: 'row', paddingTop: 20}}>
                  <CheckBoxField {...formProps} name="agreeTerms" />
                  <Text style={style.lower_content_text}>
                    I agree with the Terms and Privacy Policy. *
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <CheckBoxField {...formProps} name="subscribeForProducts" />
                  <Text style={style.lower_content_text}>
                    Subscribe for select product updates.
                  </Text>
                </View>
                <View>
                  {/* <Button
                    rounded
                    disabled={!formProps.isValid || loading}
                    onPress={formProps.handleSubmit}
                    title="Sign up"
                  />
                  <Text style={style.inferior_content_text}>or</Text>
                  <Button title="Sign up with Google" /> */}
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                      paddingBottom: 40,
                    }}
                  />
                  <Pressable
                    disabled={!formProps.isValid || loading}
                    onPress={formProps.handleSubmit}>
                    <View style={style.btn}>
                      <Text style={{color: colors.white, fontSize: 18}}>
                        Sign Up
                      </Text>
                    </View>
                  </Pressable>

                  <Text
                    style={[
                      style.lower_content_text,
                      {paddingTop: 10, paddingBottom: 10},
                    ]}>
                    or
                  </Text>

                  <Pressable
                    disabled={!formProps.isValid || loading}
                    onPress={formProps.handleSubmit}>
                    <View style={style.btn}>
                      <Text style={{color: colors.white, fontSize: 18}}>
                        Sign Up with Google
                      </Text>
                    </View>
                  </Pressable>

                  <View style={style.lower_content_text}>
                    <Text style={{paddingTop: 30}}>
                      Already have an account?
                      <Text
                        style={{color: 'blue'}}
                        onPress={() => Linking.openURL('http://google.com')}>
                        {' '}
                        Log in{' '}
                      </Text>
                    </Text>
                  </View>
                </View>
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
    fontSize: 28,
    color: colors.white,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 50,
  },
  inferior_content_container: {
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
  },
  lower_content_text: {
    alignSelf: 'center',
    fontSize: 15,
  },
  btn: {
    height: 50,
    marginHorizontal: 20,
    backgroundColor: colors.orange,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUp;
